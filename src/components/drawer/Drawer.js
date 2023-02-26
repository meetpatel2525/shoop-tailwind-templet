import React, { useState } from "react";
import "./Drawer.css";
import { Divider, Drawer, IconButton, List, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const StyleDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: 280,
    boxSizing: "border-box",
    backgroundColor: "white",
    color: "#0000",
    // borderRadius: "0px 100px 0px 0px",
  },

  " & .MuiListItemText": {},
}));

const Drawerr = () => {
    
    const location = useLocation();   
    const { pathname } = location;
    const [openDrawer, setOpenDrawer] = useState(false);
  
  return (
    
    <React.Fragment>
    
      <StyleDrawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className
      >
      <div className="flex justify-between ">
                          {/* <img className="w-[150px] p-4" src={Smart} alt="" /> */}
      <div className="p-2 cursor-pointer" >
      <CloseIcon onClick={() => setOpenDrawer(false)} sx={{ color:"#000" }} />

      </div>
      </div>
    
        <Divider sx={{ background: "white" }} />
        
        <List>
          <div className="uppercase">
            <ul className="" style={{ listStyleType: "none" }}>
              <li
                className={
                  pathname === "/"
                    ? "text-black pb-4 mt-3 underline-offset-4 underline decoration-white"
                    : "text-black pb-4  mt-3 "
                }
              >
                <Link onClick={() => setOpenDrawer(false)} className="pl-4 " to="/">
                  Home
                </Link>
              </li>
              <li
                className={
                  pathname === "/catalogue"
                    ? "text-black pb-4 underline-offset-4 underline decoration-white"
                    : "text-black pb-4 "
                }
              >
                <Link onClick={() => setOpenDrawer(false)} className="pl-4" to="/services">
                catalogue
                </Link>
              </li>
              <li
                className={
                  pathname === "/fashion"
                    ? "text-black pb-4 underline-offset-4 underline decoration-white "
                    : "text-black pb-4"
                }
              >
                <Link onClick={() => setOpenDrawer(false)} className="pl-4" to="/about-us">
                fashion
                </Link>
              </li>
              <li
                className={
                  pathname === "/favorite"
                    ? "text-black pb-4 underline-offset-4 underline decoration-white "
                    : "text-black pb-4"
                }
              >
                <Link onClick={() => setOpenDrawer(false)} className="p-4" to="/protfolio">
                favorite
                </Link>
              </li>
              <li
                className={
                  pathname === "/lifestyle"
                    ? "text-black pb-4 underline-offset-4 underline decoration-white"
                    : "text-black pb-4"
                }
              >
                <Link onClick={() => setOpenDrawer(false)} className="p-4" to="/career">
                lifestyle
                </Link>
              </li>
           
            </ul>
          </div>
        </List>
        <Divider sx={{ background: "white" }} />
      </StyleDrawer>
    
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        
        <MenuIcon sx={{ color: "black" }} />

      </IconButton>
    </React.Fragment>
  );
};

export default Drawerr;
