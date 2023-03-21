
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './pages/Login'
import Menu from './components/menu'
import TableGrid from "./components/TablaGrid";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    
  },
});




function App() {

  return (
    
      <>
      
      <ThemeProvider theme={darkTheme}>      
        <Menu />
      </ThemeProvider>
        
        <TableGrid />
        
    </>

  )
}

export default App
