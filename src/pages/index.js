import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"
import { Alert, Snackbar } from '@mui/material'
import cn from 'classnames'
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { setToken } from "src/utils/token"
import InputIcon from "@/components/common/input-icon"
import { axiosInstance } from "src/utils/axios"
import SVGEye from '@/public/icons/eye.svg'
import SVGEyeClose from '@/public/icons/eye-closed.svg'

export default function Login() {
    let vertical = 'top'
    let horizontal = 'center'

    const LOGIN_API = '/admin/login'

    const router = useRouter()
    const [errorMsg, setErrorMsg] = React.useState('')
    const [seePassword, setSeePassword] = React.useState(false)
    const [userAccount, setUserAccount] = React.useState({
        username: 'min',
        password: ''
    })

    const [openToast, setOpenToast] = React.useState(false)

    const handleVisibility = () => {
        setSeePassword(!seePassword)
    }

    const handleChange = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username: userAccount.username,
            password: userAccount.password
        }

        axiosInstance.post(LOGIN_API, formData)
        .then((res) => {
            if(res.data.status === "success") {
                setToken(res.data.token)
                router.push('/dashboard')
            }
        }).catch((err) => {
            if(err) {
                if( err.response?.status !== 200) {
                    setErrorMsg(err.response?.data.message)
                    setOpenToast(true)
                }
            }
        })
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-5">Login Admin</h2>
            <form onSubmit={handleSubmit} className={styles.formWrap}>
                <div className={styles.form}>
                    <div className={cn(styles.inputGroup, "mb-3")}>
                        <label htmlFor="username" className="form-label"><b>Username</b></label>
                        <input type="text" 
                            onChange={handleChange} 
                            className={cn(styles.inputField, "form-control")} 
                            id="username" 
                            name="username" 
                            placeholder="Masukkan username admin" 
                        />
                    </div>
                    <div className={cn(styles.inputGroup, "mb-1")}>
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan password"
                            id="password"
                            name="password"
                            type={seePassword ? "text" : "password"}
                            onChange={handleChange}
                            onClick={handleVisibility}
                            icon={seePassword ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <div className="mb-4">
                        <span className={styles.forgetText}>
                            <Link href='#'>Lupa password?</Link>
                        </span>
                    </div>
                    <button type="submit" className={cn(styles.loginBtn, "btn btn-primary blue")}>Login</button>
                    <div className="mt-2">
                        <p className={styles.registText}>Belum punya akun? <Link href="/register"><span>Daftar</span></Link></p>
                    </div>
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