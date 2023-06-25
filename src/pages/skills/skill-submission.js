import LayoutMain from "@/components/layouts/main";
import CustomTable from "@/components/table";

export default function SkillSubmission() {
    const colList = [
        {
            id: 'date',
            label: 'Tanggal Pengajuan',
            render: (data) => <span>{data.date}</span>
        },
        {
            id: 'full_name',
            label: 'Nama Lengkap',
            render: (data) => <span>{data.full_name}</span>
        },
        {
            id: 'email',
            label: 'Email',
            render: (data) => <span>{data.email}</span>
        },
        {
            id: 'skill',
            label: 'Keahlian',
            render: (data) => <span>{data.skill}</span>
        },
        {
            id: 'status',
            label: 'Status',
            render: (data) => <span>{data.status}</span>
        },
    ]

    return(<>
        <h4><b>Daftar Pengajuan Keahlian</b></h4>
        <div className="mt-3">
            <CustomTable 
                columns={colList}
            />
        </div>
    </>)
}

SkillSubmission.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}