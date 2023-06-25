import * as React from 'react'
import styles from '@/styles/components/Navbar.module.scss'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Link from 'next/link'

const drawerWidth = 240

const bottomMenu = [
    {
        label: 'Profil Saya',
        link: '#'
    },
    {
        label: 'Logout',
        link: '/login'
    }
]

export default function Navbar() {
  const [openCompanyList, setOpenCompanyList] = React.useState(false)
  const [openEmployeeList, setOpenEmployeeList] = React.useState(false)
  const [openSkillList, setOpenSkillList] = React.useState(false)

  const handleCompanyList = () => {
    setOpenCompanyList(!openCompanyList)
  }

  const handleEmployeList = () => {
    setOpenEmployeeList(!openEmployeeList)
  }

  const handleSkillList = () => {
    setOpenSkillList(!openSkillList)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} className={styles.menuWrap}>
          <List>
            <Link href='/dashboard' className={styles.link}>
                <ListItemButton>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <ListItemButton onClick={handleCompanyList}>
                <ListItemText primary="Perusahaan" />
                {openCompanyList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCompanyList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='/company/new-submission' className={styles.link}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pengajuan Baru" />
                  </ListItemButton>
                </Link>
                <Link href='/company/all' className={styles.link}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Semua Perusahaan" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleEmployeList}>
                <ListItemText primary="Pekerja" />
                {openEmployeeList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openEmployeeList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='/employee/all' className={styles.link}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Semua Pekerja" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={handleSkillList}>
                <ListItemText primary="Pengajuan Keahlian" />
                {openSkillList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSkillList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href='/skills/skill-submission' className={styles.link}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pengajuan Baru" />
                  </ListItemButton>
                </Link>
                <Link href='#' className={styles.link}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Proses Sertifikasi" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </List>
          <List>
            {bottomMenu.map((text, index) => (
              <ListItem key={index} disablePadding>
                <Link href={text.link} className={styles.link}>
                    <ListItemButton>
                        <ListItemIcon>
                            {text.label === 'Logout' ? <LogoutIcon fontSize="small" /> : <PersonIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText primary={text.label} />
                    </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}