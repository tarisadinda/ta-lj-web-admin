import React, { useRef, useState } from 'react'
import styles from '@/styles/pages/Payroll.module.scss'
import IconBtn from "@/components/common/icon-button"
import LayoutMain from "@/components/layouts/main"
import SVGAdd from '@/public/icons/add.svg'
import CustomTable from '@/components/common/table'
import AddSalaryModal from '@/components/modals/add-salary'
import { axiosInstance } from 'src/utils/axios'
import { API_SALARY_END, API_SALARY_START } from 'src/utils/api'
import { convertDate } from 'src/utils/convert-date'
import { useDispatch, useSelector } from 'react-redux'
import { alertMessage, openAlert, setOpenAlert } from 'src/redux/slices/alertSlice'
import CustomAlert from '@/components/common/custom-alert'

const colList = [
    {
        id: 'salary_start_nominal',
        label: 'Gaji Minimal',
        render: (data) => <span>{data.salary_start_nominal}</span>
    },
    {
        id: 'createdAt',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{convertDate(data.createdAt)}</span>
    },
]

const colList2 = [
    {
        id: 'salary_end_nominal',
        label: 'Gaji Maksimal',
        render: (data) => <span>{data.salary_end_nominal}</span>
    },
    {
        id: 'createdAt',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{convertDate(data.createdAt)}</span>
    },
]

export default function Payroll() {
    const dispatch = useDispatch()

    const effectRan = useRef(false)

    const isOpenAlert = useSelector(openAlert)
    const alertMsg = useSelector(alertMessage)

    const [isAddSalary, setIsAddSalary] = useState(false)
    const [salaryStartList, setSalaryStartList] = useState([])
    const [salaryEndList, setSalaryEndList] = useState([])

    const getSalaryStart = () => {
        axiosInstance.get(API_SALARY_START)
        .then((res) => {
            setSalaryStartList(res.data.data)
        }).catch((err) => {})
    }

    const getSalaryEnd = () => {
        axiosInstance.get(API_SALARY_END)
        .then((res) => {
            setSalaryEndList(res.data.data)
        })
    }

    console.log(salaryStartList)
    React.useEffect(() => {
        if (effectRan.current === false) {
            getSalaryStart()
            getSalaryEnd()

            return () => {
                effectRan.current === true
            }
        }
    }, [])

    const deleteSalary = (id) => {
        console.log(id)

        // axiosInstance.get()
    }

    return(<>
        <h4><b>Penghasilan</b></h4>
        <div style={{ margin: '20px 0px'}}>
            <IconBtn 
                title='Tambah Penghasilan' 
                startIcon={<SVGAdd />}
                onClick={() => setIsAddSalary(!isAddSalary)}
                className="btn btn-primary blue" 
            />
        </div>
        <div>
            <p className={styles.tableName}>Daftar Penghasilan Minimal</p>
            <CustomTable
                columns={colList}
                data={salaryStartList}
                idKey='salary_start_id'
                deleteData={true}
                editData={true}
                deleteFunc={deleteSalary}
            />
        </div>
        <div className='mt-5'>
            <p className={styles.tableName}>Daftar Penghasilan Maksimal</p>
            <CustomTable
                columns={colList2}
                data={salaryEndList}
                idKey='salary_end_id'
                deleteData={true}
                editData={true}
                deleteFunc={deleteSalary}
            />
        </div>
        <AddSalaryModal open={isAddSalary} onClose={() => setIsAddSalary(false)} />
        <CustomAlert 
            open={isOpenAlert} 
            severity="success" 
            text={alertMsg}
            duration={3500} 
            onClose={() => dispatch(setOpenAlert(false))} 
        />
    </>)
}

Payroll.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}