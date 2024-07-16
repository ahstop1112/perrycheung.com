import React from "react";
import TextLoop from "react-text-loop";
import { useTranslation } from 'react-i18next';
import useHomeStyles from './styles';

const Slider = () => {
    const { t } = useTranslation();
    const classes = useHomeStyles();

    return (
        <section className={`${classes.parallaxBg} ${classes.sliderSection}`}>
            <div className="main-slider">
      <div className="tm_hero" id="home" data-style="one">

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                {t('Slider.perryCheung')}
                  <br />
                </span>{" "}
                <TextLoop>
                <span className='loop-text'>{t('Slider.frontendDeveloper')}</span>
                  <span className="loop-text"> UI/UX Designer.</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                {t('Slider.baseIn')}
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              {t('Slider.seePort')}
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
            </div>
            </section>
  );
};

export default Slider;
