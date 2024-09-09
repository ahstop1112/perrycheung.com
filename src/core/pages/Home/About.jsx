import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import useHomeStyles from './styles';

const About = () => {
  const { t } = useTranslation();
  const classes = useHomeStyles();

  return (
    <section className={`${classes.parallaxBg} ${classes.aboutSection}`}>
      <Grid id='about'>
        <div className='tm_about'>
          <div className='container'>
            <div className='about_inner'>
              <div className='left'>
                <div className='image' data-aos='fade-up' data-aos-duration='1200'>
                  <img src='img/about/profile.jpg' alt='Perry Cheung' />
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className='right'>
                <div className='tm_title' data-aos='fade-up' data-aos-duration='1200'>
                  <span>{t('About.title')}</span>
                  <h3>{t('About.introTitle')}</h3>
                </div>
                <div className='text' data-aos='fade-up' data-aos-duration='1200'>
                  <p>{t('About.introContent')}</p>
                  <br />
                  <p>{t('About.introContent2')}</p>
                  <br />
                  <p>{t('About.introContent3')}</p>
                </div>
                <div className='tm_button' data-aos='fade-up' data-aos-duration='1200'>
                  <a href='img/resume/PerryCheungResume092024.pdf' download>
                    {t('About.downloadCV')}
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
        </Grid>
      </section>
  );
};

export default About;
