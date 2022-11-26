import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Divider } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'; 
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import RoomIcon from '@material-ui/icons/Room';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EventNoteIcon from '@material-ui/icons/EventNote';
import '../../../src/styleadmin.css'
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Apartment, Assessment, Edit, Router } from '@material-ui/icons';
import ContractItem from '../RealEstate/ContractItem';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    padding:10,
    height:800,
    backgroundColor:'white',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link:{
      textDecoration:'none',
      color:'#050505',
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list_nav}
      component="nav"
      subheader={
            <div></div>
      }
      className={classes.root}
    >
      
    <div id="logo-sidebar">
        <div>
            <img id="img-sidebar-logo" src="https://i.pinimg.com/originals/d3/44/be/d344bec3e6f3fa3a75e2ae2ec305f3c9.png" 
            height="120" width="160"/>
        </div>
        <div id="email-logo">dreamhouse@gmail.com</div>
        <div>Welcome to the Dream House!</div>
    </div>
      
      <Divider/>
      <NavLink to="/admin/nhanvien" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Nhân Viên"/>
      </ListItem>
      </NavLink>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <NavLink to="/admin/khachhang" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Khách hàng" /></NavLink>
        
      </ListItem>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <NavLink to="/admin/adminbatdongsan" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Bất động sản" /></NavLink>
      </ListItem>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
         <EventNoteIcon />
        </ListItemIcon>
        <NavLink to="/admin/tintuc" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Tin tức" /></NavLink>
      </ListItem>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
         <EventNoteIcon />
        </ListItemIcon>
        <NavLink to="/admin/project" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Dự án" /></NavLink>
      </ListItem>
      <Divider/>

      <ListItem button>
        <ListItemIcon>
         <Apartment/>
        </ListItemIcon>
        <NavLink to="/admin/company" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Thông tin công ty" /></NavLink>
      </ListItem>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
         <Assessment />
        </ListItemIcon>
        <NavLink to="/admin/realestatechart" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Thống kê" /></NavLink>
      </ListItem>

      <Divider/>
      <ListItem button>
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        <NavLink to="/admin/contract" className={classes.link} activeStyle={{color: "blue",textDecoration:"none"}}><ListItemText primary="Hợp đồng" /></NavLink>
      </ListItem>
       
      {/*
      <Divider/>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Hợp đồng" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      */}
      <Divider/>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <Divider/>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Thông tin" />
          </ListItem>
        </List>
      </Collapse>

      
    </List>
  );
}
