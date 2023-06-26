import cn from 'classnames'
import LayoutMain from "@/components/layouts/main"
import styles from '@/styles/pages/skills/DetailSkill.module.scss'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { Card, DialogContent } from '@mui/material'
import CustomDialog from '@/components/dialog'
import React from 'react'
import CustomDropdown from '@/components/custom-dropdown'

const statusData = [
    {
        label: 'Menunggu Konfirm',
        value: '1'
    },
    {
        label: 'Proses Sertifikasi',
        value: '2'
    },
    {
        label: 'Selesai',
        value: '3'
    },
    {
        label: 'Gagal',
        value: '4'
    },
]

export default function DetailSkill() {
    const [openDialog, setOpenDialog] = React.useState(false)
    
    //menunggu konfirm, proses sertifikasi, selesai, gagal
    const handleDialog = () => {
        setOpenDialog(!openDialog)
        console.log('klik')
    }

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
            <div className='d-inline-flex gap-3'>
                <p className='mb-0'><b>Status Pengajuan</b></p>
                <p  className='mb-0'>Menunggu konfirmasi</p>
            </div>
            <div className={styles.updateBtn}>
                <button className='btn btn-primary blue' onClick={handleDialog}><b>Perbarui</b></button>
            </div>
        </Card>
        <CustomDialog 
            open={openDialog} 
            handleClose={() => setOpenDialog(false)}
            title='Edit Status Pengajuan'
        >
            <DialogContent dividers>
                <span>Status Pengajuan</span>
                <CustomDropdown data={statusData} />
            </DialogContent>
        </CustomDialog>
    </>)
}

DetailSkill.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}