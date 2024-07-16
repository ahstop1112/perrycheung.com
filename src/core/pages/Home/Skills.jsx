import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { skillData, skillTypeData } from 'core/data/portfolio';
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
        <div className={classes.skillsInner}>
          <div className={classes.skillsLeft} data-aos='fade-right' data-aos-duration='900'>
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
                  <h6>{t(`Skills.${item.title}`)}</h6>
                  <p>{t(`Skills.${item.content}`)}</p>
                </div>
              ))}
            <br />
          </div>
          {/* End .left */}

          <div className={classes.skillsRight} data-aos='fade-right' data-aos-duration='1200'>
            <div className='tokyo_progress'>
              {skillData &&
                skillData.length > 0 &&
                skillData.map((item) => (
                  <div
                    key={item?.label}
                    className='progress_inner'
                    data-aos='fade-right'
                    data-aos-duration='1200'
                    data-aos-delay={item.delayAnimation}>
                    <span>
                      <img src={`/img/skills/${item?.img}`} className='logo' />
                      <span className='label'>{t(`Skills.${item?.label}`)}</span>
                      <span className='number'>{t(`Skills.${item?.number}`)}</span>
                    </span>
                    <div className='background'>
                      <div className='bar'>
                        <div className='bar_in' style={{ width: item?.bar + '%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* End .progress_inner */}
            </div>
          </div>
          {/* End .right */}
        </div>
      </div>
      {/* End .conainer */}
    </section>
  );
};

export default Skills;
