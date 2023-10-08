import React from 'react'
import styles from '@/styles/components/common/IconButton.module.scss'
import cn from 'classnames'

export default function IconBtn({ title, className, startIcon = '', endIcon = '' }) {
    return(<>
        <button className={cn(styles.iconBtn, className)}>
            {startIcon !== '' && startIcon}
            <span>{title}</span>
            {endIcon !== '' && endIcon}
        </button>
    </>)
}