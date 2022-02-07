import Box from '@mui/material/Box';
import About from '../components/About';
import Banner from '../components/Banner';

import Portfolio from '../components/Portfolio';

import Menu from '../components/Menu';

import Reputation from '../components/Reputation-section/Reputation';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <Box>
      <Banner />

      <Portfolio />

      <Menu />
      <About />

      <Reputation />
      <Contact />

    </Box>
  )
}
