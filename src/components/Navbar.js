import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, ButtonGroup } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const notify = () => {
    toast.success("🦄 Hello", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true, //sadece tıklayınca kapanıyor
      pauseOnHover: true, //mouse ile üzerine tıklayınca duruyor
      draggable: true, //sürükleyip bildirim silmek için
      progress: 0,
    });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ backgroundColor: "orange" }}
      >
        <Toolbar>
          <Link exact to="/">
            <Box>
              <img
                src={logo}
                alt="logo"
                style={{ width: "100px", height: "85px" }}
              />
            </Box>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "black",
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontStyle: "italic",
                textDecoration: "none",
              },
            }}
          >
            <Link
              exact
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4>Sertaç Gültekin</h4>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ButtonGroup orientation="horizontal">
              <Button
                onClick={notify}
                color="error"
                variant="contained"
                size="small"
                textDecoration="none"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/card"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/media"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Media
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/carousel"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Carousel
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/alerty"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  alerty
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/counter"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  counter
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/linear"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  linear
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/mainbg"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  mainbg
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="secondary"
                variant="contained"
                size="small"
                sx={{ margin: 1 }}
              >
                <Link
                  exact
                  to="/muis"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  muis
                </Link>
              </Button>
              <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </ButtonGroup>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ color: "white" }}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ color: "white" }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ color: "white" }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
