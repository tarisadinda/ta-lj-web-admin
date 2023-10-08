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
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const [openCompanyList, setOpenCompanyList] = React.useState(false)
  const [openSkillList, setOpenSkillList] = React.useState(false)

  const handleCompanyList = () => {
    setOpenCompanyList(!openCompanyList)
  }

  const handleSkillList = () => {
    setOpenSkillList(!openSkillList)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user_token')
    router.push('/')
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
            <Link href='/job-categories' className={styles.link}>
                <ListItemButton>
                    <ListItemText primary="Kategori Pekerjaan" />
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
            <Link href='/employee/all' className={styles.link}>
                <ListItemButton>
                    <ListItemText primary="Semua Pekerja" />
                </ListItemButton>
            </Link>
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
            <ListItem disablePadding>
              <Link href='#' className={styles.link}>
                  <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary='Profil Saya' />
                  </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding onClick={handleLogout}>
              <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}