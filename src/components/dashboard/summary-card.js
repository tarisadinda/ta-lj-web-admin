import styles from '@/styles/components/dashboard/SummaryCard.module.scss'
import { Card } from '@mui/material'

export default function SummaryCard() {
    return(<>
        <Card variant="outlined" className={styles.cardWrap}>
            <p className={styles.count}><b>Total Pendaftar Baru: 23</b></p>
            <p>5 Akun Perusahaan</p>
            <p>18 Akun Pekerja</p>
        </Card>
    </>)
}