import React from 'react'
import styles from '@/styles/pages/JobCategories.module.scss'
import SVGAdd from '@/public/icons/add.svg'
import CustomTable from '@/components/common/table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import LayoutMain from '@/components/layouts/main'
import IconBtn from '@/components/common/icon-button'

const colList = [
    {
        id: 'category',
        label: 'Kategori',
        render: (data) => <span>{data.category}</span>
    },
    {
        id: 'create_date',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{data.create_date}</span>
    },
]

const actionBtn = [
    {
        icon: <DeleteIcon />,
        id: 'delete',
    },
    {
        icon: <EditIcon />,
        id: 'edit',
    },
]

export default function JobCategories() {
    return(<>
        <h4><b>Kategori Pekerjaan</b></h4>
        <div className={styles.addBtn}>
            <IconBtn 
                title='Tambah Kategori' 
                startIcon={<SVGAdd />}
                className="btn btn-primary blue" 
            />
        </div>        
        <CustomTable 
            columns={colList}
            actionButton={actionBtn}
        />
    </>)
}

JobCategories.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}