import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"
import axios from "axios"
import { Alert, Snackbar } from '@mui/material'
import cn from 'classnames'
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { getToken } from "src/utils/token"

export default function Login() {
    let vertical = 'top'
    let horizontal = 'center'

    const LOGIN_API = '/admin/login'

    const router = useRouter()
    const token = getToken()
    const [errorMsg, setErrorMsg] = React.useState('')
    const [userAccount, setUserAccount] = React.useState({
        username: '',
        password: ''
    })

    console.log(token)
    const [openToast, setOpenToast] = React.useState(false)

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

            console.log(res)
            if(res.status === 200) {
                sessionStorage.setItem('user_token', res.data.token)

                router.push('/dashboard')
            }
        } catch (err) {
            if(err) {
                if( err.response?.status === 401) {
                    setErrorMsg(err.response.data.message)
                    setOpenToast(true)
                }
            }
        }
    }

    console.log(errorMsg)
    console.log(openToast)

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
        <Snackbar 
            open={openToast} 
            onClose={() => setOpenToast(false)}
            autoHideDuration={2500} 
            anchorOrigin={{vertical, horizontal}}
        >
            <Alert severity="error">{errorMsg}</Alert>
        </Snackbar>
    </>)
}

Login.getLayout = function getLayout(page) {
    return (
        <LayoutAuth>
            {page}
        </LayoutAuth>
    )
}