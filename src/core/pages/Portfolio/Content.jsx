import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tagListContent } from 'core/data/portfolio';
import ContentHeader from './ContentHeader';
import Gallery from './Gallery';
import usePortfolioStyles from './styles';

const Content = ({ slug }) => {
  const { t } = useTranslation();
  const classes = usePortfolioStyles();
  const portfolio = tagListContent.find(item => item.slug === slug) || {};
  const { img, tag, title, content } = portfolio || {};
  const { description, projectDate, companyName, hashtags, imgItems, liveLinks } = content || {};

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid className={`${classes.portfolioPage} portfoio_page`}>
      <section className={`${classes.body} container`}>
        <ContentHeader title={title} tag={tag} />
        <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container item xl={7} lg={7} className={classes.leftImgBody}>
            {imgItems && imgItems.length > 0 && <Gallery tag={tag} imgItems={imgItems} />}
          </Grid>
          <Grid container item xl={5} lg={5} className={classes.rightDescBody}>
            <section className={classes.topSection}>
              <h3>{title}</h3>
              <div className={classes.tag}>{tag}</div>
              <div className={classes.companyName}>
                {`${t('Portfolio.companyName')}: `}
                <span>{companyName}</span>
              </div>
              <div className={classes.projectDate}>
                {`${t('Portfolio.projectDate')}: `}
                <span>{projectDate}</span>
              </div>
              {liveLinks && liveLinks.length > 0 && (
                <div className={classes.liveLinks}>
                  {`${t('Portfolio.liveLinks')}: `}
                  <span>
                    {liveLinks.map((link) => (
                      <a key={link?.title} href={link?.url} target='_blank'>
                        {link?.title}
                      </a>
                    ))}
                  </span>
                </div>
              )}
              {description && description.length > 0 && (
                <div className={classes.description}>
                  {description.map((content) => (
                    <p key={content}>{content}</p>
                  ))}
                </div>
              )}
            </section>

            <section className={classes.hashtags}>
              {hashtags &&
                hashtags.length > 0 &&
                hashtags.map((item) => (
                  <span key={item} className={classes.hashtag}>
                    {item}
                  </span>
                ))}
            </section>
          </Grid>
        </Grid>
        {/* End tm_partners */}
      </section>
    </Grid>
  );
};

export default Content;
