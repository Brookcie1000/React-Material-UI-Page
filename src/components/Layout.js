import React from "react";
import { Drawer, Typography, Box, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, styled, Avatar } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import format from "date-fns/format";

const drawerWidth = 240
const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path: '/'
    },
    {
        text: 'Create',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/create'
    }
]
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar); //used as a buffer for the top toolbar


export default function Layout({ children }) {
    const history = useHistory()
    const location = useLocation()

    return (
        <Box
        sx={{
            display: 'flex'
        }}
        >
            <AppBar elevation={0}
            sx={{
                width: `calc(100% - ${drawerWidth}px)`
            }}
            >
                <Toolbar>
                    <Typography
                    sx={{flexGrow: 1}}
                    >
                        Date Today: {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Username
                    </Typography>
                    <Avatar 
                    sx={{marginLeft: 2}}
                    />
                </Toolbar>
            </AppBar>
            <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                }
            }}
            variant="permanent"
            anchor="left"
            >
                <div>
                    <Typography variant="h5"
                    sx={{
                        padding: 2
                    }}
                    >
                        Menu List
                    </Typography>
                </div>

                {/* List Links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        sx={location.pathname === item.path ? {bgcolor: '#f4f4f4'} : null}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
            sx={{
                flexGrow: 1,
                bgcolor: '#f9f9f9',
                padding: 3
            }}
            >
                <Offset />
                {children}
            </Box>  
        </Box>
    )
}