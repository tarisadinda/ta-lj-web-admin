import React, { useRef } from 'react'
import styles from '@/styles/pages/JobCategories.module.scss'
import SVGAdd from '@/public/icons/add.svg'
import CustomTable from '@/components/common/table'
import LayoutMain from '@/components/layouts/main'
import IconBtn from '@/components/common/icon-button'
import AddCategoryModal from '@/components/modals/add-category'
import { axiosInstance } from 'src/utils/axios'
import { convertDate } from 'src/utils/convert-date'
import { API_CATEGORY_LIST, API_DELETE_CAT } from 'src/utils/api'
import ConfirmDeleteModal from '@/components/modals/confirm-delete'
import CustomAlert from '@/components/common/custom-alert'
import { useDispatch, useSelector } from 'react-redux'
import { alertMessage, openAlert, setMessage, setOpenAlert } from 'src/redux/slices/alertSlice'

const colList = [
    {
        id: 'category_name',
        label: 'Kategori',
        render: (data) => <span>{data.category_name}</span>
    },
    {
        id: 'create_date',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{convertDate(data.create_date)}</span>
    },
]

export default function JobCategories() {
    const dispatch = useDispatch()
    const effectRan = useRef(false)

    const isOpenAlert = useSelector(openAlert)
    const alertMsg = useSelector(alertMessage)

    const [openModal, setOpenModal] = React.useState(false)
    const [askDelete, setAskDelete] = React.useState(false)
    const [deleteId, setDeleteId] = React.useState('')
    const [categoryList, setCategoryList] = React.useState([])

    const getCategoryList = () => {
        axiosInstance.get(API_CATEGORY_LIST)
        .then((res) => {
            res.data.data.map((item) => {
                if(!categoryList.find((item) => item.category_id)) {
                    setCategoryList((categoryList) => [
                        ...categoryList, {
                            category_id: item.category_id,
                            category_name: item.category_name,
                            category_slug: item.category_slug,
                            create_date: item.createdAt
                        }
                    ])
                }
            })
        }).catch((err) => {
        })
    }

    console.log(categoryList)
    React.useEffect(() => {
        if (effectRan.current === false) {
          getCategoryList()  

          return () => {
            effectRan.current === true
          }
        }
    }, [])

    console.log(deleteId)
    const deleteItem = () => {
        if(deleteId !== '') {
            axiosInstance.get(API_DELETE_CAT + deleteId)
            .then((res) => {
                setAskDelete(false)
                setDeleteId('')
                dispatch(setMessage(res.data.message))
                dispatch(setOpenAlert(true))
            }).catch((err) => {
            })
        }
    }

    const modalDelete = (id) => {
        setDeleteId(id)
        setAskDelete(true)
    }

    return(<>
        <h4><b>Kategori Pekerjaan</b></h4>
        <div className={styles.addBtn}>
            <IconBtn 
                title='Tambah Kategori' 
                startIcon={<SVGAdd />}
                onClick={() => setOpenModal(!openModal)}
                className="btn btn-primary blue" 
            />
        </div>        
        <CustomTable 
            columns={colList}
            data={categoryList}
            deleteData
            deleteFunc={modalDelete}
            editData
        />
        <AddCategoryModal open={openModal} onClose={() => setOpenModal(false)} />
        <ConfirmDeleteModal open={askDelete} 
            delFunc={deleteItem} 
            onClose={() => { setAskDelete(false), setDeleteId('') }} 
        />
        <CustomAlert open={isOpenAlert} 
            severity="success" 
            text={alertMsg} 
            duration={3500} 
            onClose={() => { dispatch(setOpenAlert(false)), dispatch(setMessage('')) }} 
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