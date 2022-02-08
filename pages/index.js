import Box from '@mui/material/Box';
import About from '../components/About';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Menu from '../components/Menu';
import Skills from '../components/Skills';
import Menu from '../components/Menu';
import Reputation from '../components/Reputation-section/Reputation';
import Contact from '../components/Contact';
import Form from '../components/Form';


export default function Home() {
  return (
    <Box>
      <Banner />
      <Portfolio />
      <Menu />
      <About />
      <Skills />
      <Menu />
      <About />
      <Reputation />
      <Contact />
      <Form />

    </Box>
  )
}
