import LayoutMain from "@/components/layouts/main"
import styles from '@/styles/pages/company/DetailCompany.module.scss'
import Image from "next/image"
import Laptop from '@/public/laptop-work.png'

export default function DetailCompany() {
    return(<>
        <Image src={Laptop} className={styles.logoCompany} width={150} height={150} alt="company-logo" />
        <div className="mt-2">
            <div className="row">
                <div className="col-3"><b>Nama Perusahaan</b></div>
                <div className="col-4">PT Metanesia Indonesia</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Kategori Usaha</b></div>
                <div className="col-4">PT Metanesia Indonesia</div>
            </div>
            <div className="row">
                <div className="col-3"><b>Jakarta Pusat</b></div>
                <div className="col-4">PT Metanesia Indonesia</div>
            </div>
        </div>
    </>)
}

DetailCompany.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}