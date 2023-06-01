// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import PrimarySearchAppBar from "./components/NavBar/NavBar";
// import sideNavBg from "../../src/pictures/bg-01.jpg";
// import "../components/SideNavBar/SideNavBar.css";
// import HomeContent from "./components/HomeMainSection/HomeContent";
// import SoloImagesPage from "./pages/SoloImagesPage";
// import CollectorImages from "./components/Collector/CollectorImages";

// const MiniDrawer = () => {
//   const [open, setOpen] = React.useState(true);
//   const [toggle, setToggle] = React.useState(true);
//   const [hover, setHover] = React.useState(false);
//   const [upload, setUpload] = React.useState(false);
//   const [SoloPage, setSoloPage] = React.useState(false);
//   const [collection, setCollection] = React.useState(true);

//   const Logo = "Logo";
//   const Heading = "Heading";
//   const handleDrawerOpen = () => {
//     setOpen(true);
//     setToggle(true);
//     setHover(false);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//     setToggle(false);
//     setHover(true);
//   };
//   const handleDrawerOpen2 = () => {
//     setOpen(true);
//     setToggle(true);
//     setHover(true);
//   };

//   const handleDrawerClose2 = () => {
//     setOpen(false);
//     setToggle(false);
//     setHover(true);
//   };

//   const uplaodFile = () => {
//     setUpload(true);
//     setSoloPage(false);
//     setCollection(false);
//   };

//   const goTOSolo = () => {
//     setSoloPage(true);
//     setUpload(false);
//     setCollection(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <AppBar
//         position="fixed"
//         open={open}
//         onMouseEnter={hover ? handleDrawerClose2 : undefined}
//       >
//         <Toolbar
//           className="navbar_whole_container_toolbarTag"
//           style={{ padding: "0px", margin: "0px" }}
//         >
//           {!open && (
//             <Typography>
//               <div className="content_head_sidenav_container">
//                 <div className="content_head_sidenav">{Logo}</div>
//               </div>
//             </Typography>
//           )}

//           {toggle ? (
//             <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{
//                 marginRight: 5,
//                 ...(open && { display: "none" }),
//               }}
//               style={{ marginLeft: "7px" }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}

//           <Typography variant="h6" noWrap component="div">
//             <PrimarySearchAppBar />
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer variant="permanent" open={open}>
//         <div
//           className="background_container"
//           onMouseEnter={hover ? handleDrawerClose2 : undefined}
//         >
//           <img src={sideNavBg} alt="sideNavBg" className="backgound_sideNav" />
//           <div className="sideNav_content_container">
//             <DrawerHeader className="header_logo_section_sidenav">
//               <h3 className="header_logo_section_sidenav_heading">
//                 {" "}
//                 {Heading}
//               </h3>
//             </DrawerHeader>

//             <List
//               onMouseEnter={hover ? handleDrawerClose2 : undefined}
//               className="list_item_container"
//             >
//               {["upload "].map((text, index) => (
//                 <ListItem
//                   key={text}
//                   disablePadding
//                   sx={{ display: "block" }}
//                   onClick={uplaodFile}
//                 >
//                   <ListItemButton
//                     className="ListItemButton"
//                     sx={{
//                       minHeight: 48,
//                       justifyContent: open ? "initial" : "center",
//                       px: 2.5,
//                       borderBottom: " 1px dotted white",
//                       textTransform: "capitalize",
//                     }}
//                   >
//                     <ListItemIcon
//                       sx={{
//                         minWidth: 0,
//                         mr: open ? 3 : "auto",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <i class="bi bi-cloud-arrow-up-fill text-light"></i>
//                     </ListItemIcon>
//                     <ListItemText
//                       primary={text}
//                       sx={{ opacity: open ? 1 : 0 }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//               {["images"].map((text, index) => (
//                 <ListItem
//                   key={text}
//                   disablePadding
//                   sx={{ display: "block" }}
//                   onClick={goTOSolo}
//                 >
//                   <ListItemButton
//                     className="ListItemButton"
//                     sx={{
//                       minHeight: 48,
//                       justifyContent: open ? "initial" : "center",
//                       px: 2.5,
//                       borderBottom: " 1px dotted white",
//                     }}
//                   >
//                     <ListItemIcon
//                       sx={{
//                         minWidth: 0,
//                         mr: open ? 3 : "auto",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <i class="bi bi-image-fill text-light"></i>
//                     </ListItemIcon>
//                     <ListItemText
//                       primary={text}
//                       sx={{ opacity: open ? 1 : 0 }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </div>
//       </Drawer>

//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3 }}
//         onMouseEnter={hover ? handleDrawerClose2 : undefined}
//       >
//         <DrawerHeader />
//         <Typography paragraph>
//           {upload && <HomeContent />}
//           {SoloPage && <SoloImagesPage />}
//           {collection && <CollectorImages />}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default MiniDrawer;

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));
