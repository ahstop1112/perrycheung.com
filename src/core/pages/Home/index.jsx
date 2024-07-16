import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Slider from 'core/pages/Home/Slider';
import About from 'core/pages/Home/About';
import Overview from 'core/pages/Home/Overview';
import Skills from 'core/pages/Home/Skills';
import CallToAction from 'core/pages/Home/CallToAction';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Grid container item xl={12} className='mainBody'>
      <Slider />
      <About />
      <Skills />
      <Overview />
      <CallToAction />
    </Grid>
  );
};

export default Home;
