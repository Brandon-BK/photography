import Box from '@mui/material/Box';
import About from '../components/About';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Reputation from '../components/Reputation-section/Reputation';

export default function Home() {
  return (
    <Box>
      <Banner />
      <Menu />
      <About />
      <Reputation />
    </Box>
  )
}
