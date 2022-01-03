import { makeStyles, ThemeProvider } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined } from '@material-ui/icons';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import {useNavigate ,useLocation} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import {format} from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
const drawerWidth =240;
const useStyles= makeStyles((theme)=>{
    return ({
    page: {
        background : '#f9f9f9',
        width: '100%'
    },
    drawer:{
    width: drawerWidth
    },
    drawerPaper: {
        width:drawerWidth
    },
    root:{
      display:"flex"
    },
    active:{
        backgroundColor: '#f4f4f4'
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar
,
avatar:{
marginLeft:theme.spacing(2)
}})
});
export default function Layout({children}) {
const classes=useStyles();
const history =useNavigate();
const location= useLocation();
const menuItems =[
    {
        text: "My Notes" ,
        icon :<SubjectOutlined color="secondary"/>,
        path: '/'
    },
    {
        text: "Create Note" ,
        icon :<AddCircleOutlineOutlined color="secondary"/>,
        path: '/create'
    }
]
    return (
        <div className={classes.root}>
    <AppBar
    position= "fixed"
    className={classes.appbar}
    elevation={0}
    >
        <ToolBar>
            <Typography>
Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography>
                Mario
            </Typography>
            <Avatar src="/mario-av.png" className={classes.avatar}/>
        </ToolBar>
    </AppBar>
<Drawer className={classes.drawer}
variant="permanent"
anchor= "left"
classes= {{paper:classes.drawerPaper}}>
    <div>
        <Typography variant='h5'>
Ninja Notes
        </Typography>
      
    </div>
    <List>
        {menuItems.map( item =>(
            <ListItem key={item.text}
            button onClick={()=>{
history(item.path);}}
className ={location.pathname === item.path? classes.active:null }
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}/>
            </ListItem>
        ))}
        </List>
</Drawer>

        <div className={classes.page}>
        <div className={classes.toolbar}></div>
         {children} 
         </div>
        </div>
    )
}
