import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import style from "./header.module.scss";

export default function Header({ handleToggleMenu }) {
  return (
    <AppBar className={style.header} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleToggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography>مدیریت درخواست ها</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar>
            <AccountCircle></AccountCircle>
          </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
