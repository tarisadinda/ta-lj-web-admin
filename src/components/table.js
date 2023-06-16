import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '@/styles/components/Table.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

const CustomTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 700
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}))

const CustomTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}))

export default function CustomTable({columns, data, actionButton}) {
    return(<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <CustomTableCell className={styles.column}>No</CustomTableCell>
                        {columns.length > 0 && columns.map((column, index) => (
                            <CustomTableCell key={index} className={styles.column}>{column.label}</CustomTableCell>
                        ))}
                        <CustomTableCell className={styles.column}>Aksi</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <CustomTableRow key={index}>
                            <CustomTableCell>{index+1}</CustomTableCell>
                            {columns.map((col, index) => (
                                <CustomTableCell key={index}>{col.render(item)}</CustomTableCell>
                            ))}
                            <CustomTableCell>
                                <div>
                                    {actionButton.map((btn, index) => (
                                        <IconButton key={index} onClick={() => btn.function(item.id)}>
                                            {btn.icon}
                                        </IconButton>
                                    ))}
                                </div>
                            </CustomTableCell>
                        </CustomTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>)
}