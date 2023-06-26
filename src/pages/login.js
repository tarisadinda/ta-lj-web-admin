import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"
import axios from "axios"
import cn from 'classnames'
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export default function Login() {
    const LOGIN_API = '/admin/login'

    const router = useRouter()
    const [userAccount, setUserAccount] = React.useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            username: userAccount.username,
            password: userAccount.password
        }

        try {
            const res = await axios({
                method: 'post',
                url: process.env.NEXT_PUBLIC_API_URL + LOGIN_API,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })

            if(res.status === 200) {
                router.push('/dashboard')
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-5">Login Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <div className="mb-3">
                        <label htmlFor="uusernameame" className="form-label"><b>Username</b></label>
                        <input type="text" onChange={handleChange} className={cn(styles.inputField, "form-control")} id="username" name="username" placeholder="Masukkan username admin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <input type="password" onChange={handleChange} className={cn(styles.inputField, "form-control")} id="password" name="password" placeholder="Masukkan password" />
                    </div>
                    <div className="my-3">
                        <span className={styles.forgetText}>
                            <Link href='#'>Lupa password?</Link>
                        </span>
                    </div>
                    <button type="submit" className={cn(styles.loginBtn, "btn btn-primary blue")}>Login</button>
                </div>
            </form>
        </div>
    </>)
}

Login.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}