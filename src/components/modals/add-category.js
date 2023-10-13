import styles from '@/styles/components/modals/AddCategoryModal.module.scss'
import cn from 'classnames'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, setOpenModal } from 'src/redux/slices/modalSlice'

export default function AddCategoryModal({ open, onClose }) {
    const tes = useSelector(openModal)
    const dispatch = useDispatch()

    console.log(tes)
    return(<>
        <Dialog open={open} fullWidth={true} maxWidth='xs'>
            <DialogTitle sx={{ padding: '10px 15px' }}>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <span>Tambah Kategori Pekerjaan</span>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                    <label className={styles.inputLabel}>Nama Kategori</label>
                    <input type='text' className='form-control' />
                </div>
                <div className={styles.actionBtn}>
                    <button onClick={onClose} className={cn(styles.cancelBtn, 'btn btn-ghost')}>Batal</button>
                    <button className={cn(styles.saveBtn, 'btn btn-primary blue')}>Simpan</button>
                </div>
            </DialogContent>
        </Dialog>
    </>)
}