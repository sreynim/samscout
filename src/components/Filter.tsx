// import React from 'react';
// import MaterialTheme from '../components/MaterialTheme';
// import Section from "../components/Section";
// import Drawer from "@mui/material/Drawer";
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ListSubheader from '@mui/material/ListSubheader';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';

// const drawerWidth = 240;

// export default function PermanentDrawerRight() {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* <AppBar
//         position="fixed"
//         sx={{ width: `calc(20% + ${drawerWidth}px)`, mr: `${drawerWidth}px)` }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Filter
//           </Typography>
//         </Toolbar>
//       </AppBar> */}
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//       <Drawer
//         sx={{
//           width: drawerWidth + 10,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
        
//       >
//         <Toolbar />
//         <Divider />
//         <List
//         sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Filter
//           </ListSubheader>
//         }>
//           {['Preference', 'Causes', 'Skills'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton onClick={handleClick}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//                 {open ? <ExpandLess /> : <ExpandMore />}
//               </ListItemButton>
//               <Collapse in={open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   <ListItemButton sx={{ pl: 4 }}>
//                     <ListItemIcon>
//                     </ListItemIcon>
//                     <ListItemText primary="Starred" />
//                   </ListItemButton>
//                 </List>
//               </Collapse>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }

// // const SearchFilter = () => {
// //     return (
// //         <>
// //           <Section
// //             title="Contact Us"
// //             children={[
// //             "Thank you for your interest in learning more about Samaritan Scout!"
// //           ]}
// //           cols={14}
// //           primary={false}
// //           separator={true}
// //           />
// //           <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>

// //           </Drawer>
// //         </>
// //       );
// // };

// //export default SearchFilter;


import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DemoContainer from '@mui/x-date-pickers/internals/demo';
import LocalizationProvider from '@mui/x-date-pickers-pro';
import AdapterDayjs from '@mui/x-date-pickers-pro/AdapterDayjs';
import DateRangePicker from '@mui/x-date-pickers-pro/DateRangePicker';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState([0]);

  const handleClickPref = () => {
    setOpen(!open);
  };

  const handleClickCaus = () => {
    setOpen(!open);
  };

  const handleClickSkil = () => {
    setOpen(!open);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <List
      sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter
        </ListSubheader>
      }
    >
      

      <ListItemButton onClick={handleClickPref}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Preference" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        {[0].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <><ListItem
            //key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{ pl: 4 }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Remote`} />
            </ListItemButton>
          </ListItem>
          <ListItem
            //key={value}
            disablePadding
          >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }} />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`In Person`} />
              </ListItemButton>
            </ListItem></>
        );
      })}
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickCaus}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Causes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSkil}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSkil}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Within 5 Miles" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangePicker']}>
          <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
        </DemoContainer>
      </LocalizationProvider>
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}