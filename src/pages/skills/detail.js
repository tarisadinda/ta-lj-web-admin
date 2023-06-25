import cn from 'classnames'
import LayoutMain from "@/components/layouts/main"
import styles from '@/styles/pages/skills/DetailSkill.module.scss'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { Card } from '@mui/material'

export default function DetailSkill() {
    return(<>
        <p className={styles.name}><b>Christian Wijaya</b></p>
        <h5 className={styles.silverText}>Sidoarjo, Jawa Timur</h5>
        <h5 className={styles.silverText}>christian_wijaya@gmail.com / 085235667809</h5>
        <div className={styles.infoSection}>
            <div className="row">
                <div className="col-3"><b>Tanggal Pengajuan</b></div>
                <div className="col-5">10/9/2022</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Kategori Keahlian</b></div>
                <div className="col-5">Teknologi</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Bidang Keahlian</b></div>
                <div className="col-5">Mobile Developer</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Level</b></div>
                <div className="col-5">Level 1</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Keterangan</b></div>
                <div className="col-5">Menunggu konfirmasi dari pihak penyedia sertifikasi</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Lampiran</b></div>
            </div>
        </div>
        <div className={styles.actionBtn}>
            <button className={cn(styles.fileBtn, "btn btn-primary blue")}>
                <InsertDriveFileIcon />
                <span className={styles.nameCertif}><b>Sertifikat Junior Mobile Developer</b></span>
            </button>
        </div>
        <Card variant="outlined" className={styles.cardStatus}>
            <p className='mb-0'><b>Status Pengajuan</b></p>
            <p  className='mb-0'>Menunggu konfirmasi</p>
            <div className={styles.updateBtn}>
                <button className='btn btn-primary blue'><b>Perbarui</b></button>
            </div>
        </Card>
    </>)
}

DetailSkill.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}