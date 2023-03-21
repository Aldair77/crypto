import React from 'react'
import {
    Grid,
    Avatar,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
    Link ,InputAdornment  ,IconButton,InputLabel,FormControl,OutlinedInput } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../styles/Login.css'
import { Box } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import image from '../assets/ethhh.gif';
import image1 from '../assets/ethereum.gif';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
    const paperStyle={padding:25,height:'70vh', width:280}
    const avatarStyle={backgroundColor:'blueviolet',margin:'5vh'}
    const btnstyle={margin:'10px 0',borderRadius:'30px',transition: '0.5s'}
  return (<>
        
        <Grid height='90vh' paddingTop='10vh' display='flex' justifyContent='center' >
        <div className='imagen' ><img src={image}/></div>
            <div className='form' elevation ={10} style ={paperStyle} >
                <Grid align='center'>
                   <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> 
                   <h2>Iniciar Sesion</h2>
                </Grid>
                <Box component="form"
                    sx={{
                        
                        '& .MuiTextField-root': { mb: 1 ,borderRadius:'30px'},
                        '&:hover fieldset': {
                            borderColor: 'none',
                            
                          },

                          '& fieldset': {
                            borderRadius: '30px',
                           
                          },
                    }}
                    
                    >
                <TextField  id="outlined-size-small" size="small" variant="outlined"  label='Username' fullWidth required/>
                <FormControl   variant="outlined"  size="small"  fullWidth required >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                </Box>
                <FormControlLabel control={<Checkbox  />} label="Recordarme" />
                <Button className='Boton-form' type='submit'  variant="contained" style={btnstyle} fullWidth >Iniciar Sesion</Button>
                <Typography>
                    <Link href='#' underline="hover">
                        Olvidaste tu Contraseña?
                    </Link>
                </Typography>
                <Typography> Tienes una cuenta?
                    <Link href='#' underline="hover">
                        Registrate
                    </Link>
                </Typography>

            </div>
            
        </Grid>
        </>
  )
}

export default Login