import Box from '@mui/material/Box';
import About from '../components/About';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Menu from '../components/Menu';
import Skills from '../components/Skills';
import Reputation from '../components/Reputation-section/Reputation';
import Contact from '../components/Contact';
import Form from '../components/Form';
import Price from '../components/my-price/Price';
import Map from '../components/Map';
import Footer from '../components/Footer';


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
      <Price />
      <Contact />
      <Map />
      <Form />
      <Footer />
    </Box>
  )
}
