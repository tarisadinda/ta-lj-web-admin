import LayoutAuth from "@/components/layouts/auth"
import styles from "@/styles/pages/Login.module.scss"

export default function Login() {
    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center">Login Admin</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
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