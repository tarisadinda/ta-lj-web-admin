import styles from '@/styles/components/common/InputIcon.module.scss'
import cn from 'classnames'
import { IconButton } from '@mui/material'

export default function InputIcon({ placeholder, id, type, icon, name, onChange, onClick }) {
    return(<>
        <div className={styles.wrapper}>
            <input 
                placeholder={placeholder} 
                id={id}
                name={name}
                type={type}
                className={cn(styles.inputWrap, "form-control")} 
                onChange={onChange}
            />
            <div className={styles.iconWrapper}>
                <IconButton className={styles.btnIcon} onClick={onClick}>
                    {icon}
                </IconButton>
            </div>
        </div>
    </>)
}