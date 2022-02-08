import Box from '@mui/material/Box';
import About from '../components/About';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Menu from '../components/Menu';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <Box>
      <Banner />
      <Portfolio />
      <Menu />
      <About />
      <Skills />
    </Box>
  )
}
