import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircleStack from "../Stacks/CircleSkeltonStack";
import { useState } from "react";
import RoutePages from "../../routes"

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(15),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  fontSize: "20px",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const [items, setItems] = useState([...Array.from({ length: 5 })]);

  function handleScroll() {
    var isAtBottom =
      +document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      // Load next posts
      fetchMoreData();
    }
  }

  window.addEventListener("scroll", handleScroll);

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 5 })));
    }, 500);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            fontSize: "130px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily={"Segoe UI"}
            noWrap
            component="div"
            variant="h3"
          >
            Your E-Commerce App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      ></Drawer>
      <Main open={open}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <Box width={"60vw"}>
            <CircleStack />
            <RoutePages items={items} />

            {/* {items.map(() => {
              return <ProperCard />;
            })} */}
          </Box>
        </Box>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
