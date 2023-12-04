import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
function Header(){
  
return (
  <AppBar position="fixed">
    <Container maxWidth="md">
    <Toolbar
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{color:'#fff'}}>
     
      Courses 
      </Link>
      <Link to="/student" style={{color:'#fff'}}>
      Student
      </Link>
    </Toolbar>
    </Container>
  </AppBar>
);
}
export default Header;