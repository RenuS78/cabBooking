import * as React from "react";
import { styled } from "@mui/material/styles";
//below line to add inner left arrow icon to close sidenav
// import {  useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import PersonPinIcon from "@mui/icons-material/PersonPin";
// add below two for inside left arrow icon to close sidenav
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//////******** */
import AppBarContainer from "./AppBarContainer";

import sideNavBg from "../../../src/pictures/bg-01.jpg";
import "./SideNavBar.css";
// import ListItemsContainer from './ListItemsContainer';
import HomeContent from "../HomeMainSection/HomeContent";
import SoloImagesPage from "../../pages/SoloImagesPage";

const MiniDrawer = () => {
  //below for closing nav with left arrow icon inside sidenav
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const [upload, setUpload] = React.useState(false);
  const [SoloPage, setSoloPage] = React.useState(false);
  // const [collection,setCollection] =React.useState("unactive");

  // const navigate = useNavigate();
  //add logo on close of sidenav here.......................................
  const Heading = "companyName"; //add heading/logo on open of side nav here............................
  const handleDrawerOpen = () => {
    setOpen(true);
    setToggle(true);
    setHover(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setToggle(false);
    setHover(true);
  };
  const handleDrawerOpen2 = () => {
    setOpen(true);
    setToggle(true);
    setHover(true);
  };

  const handleDrawerClose2 = () => {
    setOpen(false);
    setToggle(false);
    setHover(true);
  };

  const uplaodFile = () => {
    setUpload(true);
    setSoloPage(false);
    // setCollection("unactive");
  };

  const goTOSolo = () => {
    setSoloPage(true);
    setUpload(false);
    // setCollection("unactive");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarContainer
        open={open}
        hover={hover}
        handleDrawerOpen2={handleDrawerOpen2}
        toggle={toggle}
        IconButton={IconButton}
        handleDrawerClose={handleDrawerClose}
        MenuIcon={MenuIcon}
        handleDrawerOpen={handleDrawerOpen}
      />

      {/* ...................................sidenav inner content .........................*/}

      <Drawer variant="permanent" open={open}>
        <div
          className="background_container"
          onMouseEnter={hover ? handleDrawerOpen2 : undefined}
        >
          <img src={sideNavBg} alt="sideNavBg" className="backgound_sideNav" />
          <div className="sideNav_content_container">
            {/*................... on sidevav open logo seaction data ..............................*/}
            <DrawerHeader className="header_logo_section_sidenav">
              <h3 className="header_logo_section_sidenav_heading">
                {Heading}
                {/* //insert icon button for adding sidenav inside closing left arrow icon */}
                {/* <IconButton onClick={handleDrawerClose} style={{color:'white',height:'3rem',width:'4rem'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
              </h3>
            </DrawerHeader>
            {/*.................... sidenav bar inner content................... */}
            {/* <div  className='itmes_sideNav' > */}
            {/*......open on hover...... onMouseEnter={condition ? value : undefined} */}
            <List
              onMouseEnter={hover ? handleDrawerOpen2 : undefined}
              className="list_item_container"
            >
              {/*.................... sidenav bar items with icons................... */}
              {["book cab"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={uplaodFile}
                >
                  <ListItemButton
                    className="ListItemButton"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      borderBottom: " 1px dotted white",
                      textTransform: "capitalize",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LocalTaxiIcon style={{ color: "white" }} />
                      {/* <i class="bi bi-cloud-arrow-up-fill text-light"></i> */}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              {["drivers"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={goTOSolo}
                >
                  <ListItemButton
                    className="ListItemButton"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      borderBottom: " 1px dotted white",
                      textTransform: "capitalize",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PersonPinIcon style={{ color: "white" }} />
                      {/* <i class="bi bi-image-fill text-light"></i> */}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* </div> */}
          </div>
        </div>
      </Drawer>

      {/* ..........content outside sidenav and navbar -- main container of home page............ */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        onMouseEnter={hover ? handleDrawerOpen2 : undefined}
      >
        <DrawerHeader />
        {/* <Typography paragraph > */}
        {upload && <HomeContent />}
        {SoloPage && <SoloImagesPage />}
        {/* {collection === "active" && <CollectorFilterImagesPage />} */}
        {/* </Typography> */}
      </Box>
    </Box>
  );
};

export default MiniDrawer;

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));