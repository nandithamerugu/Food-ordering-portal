import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            FOOD ORDERING PORTAL
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/allregister")}>
          REGISTER
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/buyer_home")}>
           buyer home
          </Button>
          <Button color="inherit" onClick={() => navigate("/vendor_home")}>
          Vendor home
          </Button> */}
          <Button color="inherit" onClick={() => navigate("/login")}>
             Login
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
   
  );
};

export default Navbar;
