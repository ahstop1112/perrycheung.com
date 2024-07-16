import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { loadFull } from "tsparticles";
import useHomeStyles from './styles';

const Slider = () => {
  const { t } = useTranslation();
  const classes = useHomeStyles();

  return (
    <section className={`${classes.parallaxBg} ${classes.sliderSection}`}>
      <div className='tm_hero' id='home' data-style='one'>
        <div className='container'>
          <div className='content'>
            <div className='name_wrap'>
              <h3>
                <span>
                  {t('Slider.perryCheung')}
                </span>{' '}
                <TextLoop>
                  <span className='loop-text'>{t('Slider.fullStackDeveloper')}</span>
                </TextLoop>{' '}
                <span className='overlay_effect'></span>
              </h3>
            </div>
            {/* End title */}

            <div className='job_wrap'>
              <span className='job'>
                {t('Slider.baseIn')}
                <span className='overlay_effect'></span>
              </span>
            </div>
            {/* End designation */}
            <a href='#portfolio' className='white-fill-bg btn-medium'>
              {t('Slider.seePort')}
              <span className='overlay_effect'></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </section>
  );
};

export default Slider;
