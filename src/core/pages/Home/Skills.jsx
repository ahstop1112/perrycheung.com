import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { skillTypeData } from 'core/data/portfolio';
import useHomeStyles from './styles';

const Skills = () => {
  const { t } = useTranslation();
  const classes = useHomeStyles();

  return (
    <section className={`${classes.parallaxBg} ${classes.skillSection} tm_section `} id='skills'>
      <div className='container'>
        <div className='tm_title' data-aos='fade-up' data-aos-duration='300'>
          <span>{t('Skills.title')}</span>
        </div>
        <div className="skills_container"  data-aos='fade-right' data-aos-duration='900'>
            <h3>
              <Trans i18nKey='Skills.introContent' components={{ bold: <strong /> }} />
            </h3>
            {skillTypeData &&
              skillTypeData.length > 0 &&
              skillTypeData.map((item) => (
                <div
                  key={item.title}
                  data-aos='fade-right'
                  data-aos-duration='1200'
                  data-aos-delay={item.delayAnimation}>
                  <h5>{t(`Skills.${item.title}`)}</h5>
                  {/* <p>{t(`Skills.${item.content}`)}</p> */}
                  <div className="skills_image_container">
                    {item?.images.map((image) => (
                    <div
                        key={image?.label}
                      className="skills_image"
                      data-aos='fade-right'
                      data-aos-duration='1200'
                      data-aos-delay={image.delayAnimation}>
                        <img src={`/img/skills/${image?.img}`} className='logo' />
                        <span className='label'>{t(`Skills.${image?.label}`)}</span>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* End .conainer */}
    </section>
  );
};

export default Skills;
