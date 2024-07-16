import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs, Box } from '@mui/material';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import AOS from 'aos';
import { tagList, tagListContent, heights } from 'core/data/portfolio';
import ListHeader from './ListHeader';
import useHomeStyles from './styles';

const List = ({ tag }) => {
    const classes = useHomeStyles();
    const navigate = useNavigate();
    const tagIndex = tagList.findIndex(item => item.toLowerCase() === tag)
    console.log(tagIndex)
    const [currentTag, setCurrentTag] = useState(tag ? tagIndex : 0);
    const sortedObjbyDate = tagListContent.sort((p1, p2) =>
    p1.content.projectDate < p2.content.projectDate ? 1 : p1.content.projectDate > p2.content.projectDate ? -1 : 0,
    );

    const a11yProps = (val) => {
        return {
            id: `tab-${val.toLowerCase()}`,
            'aria-controls': `portfolio-tabpanel-${val.toLowerCase()}`,
        };
    }

  const handleChange = (e, newValue) => {
      setCurrentTag(newValue);
      navigate(`/portfolio/${tagList[newValue].toLowerCase()}`);
  };

  const CustomTabPanel = (props) =>{
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`portfolio-tabpanel-${index}`}
        aria-labelledby={`portfolio-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
    
    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, [])

  return (
    <Grid className={`${classes.portfolioPage} portfoio_page`}>
        <section id='portfolio' className={`${classes.parallaxBg} ${classes.overviewSection} tm_portfolio`}>
            <ListHeader />
            <SimpleReactLightbox>
                <div className='container'>
                <div className='positon-relative'>
                    <Box className='portfolio_filter'>
                    <Tabs className='tabs-list' value={currentTag} onChange={handleChange} aria-label="basic tabs example">
                        {tagList.map((val, i) => (<Tab key={val} label={val} {...a11yProps(val)} />))}
                    </Tabs>
                    {/* </Tabs> */}
                    <div className='portfolio_list'>
                        <SRLWrapper>
                        {tagList.map((val, i) => (
                            <CustomTabPanel value={currentTag} index={i} key={val}>
                            <ul className='gallery_zoom'>
                                {sortedObjbyDate
                                .filter((item) => (val !== 'All' ? item.tag === val : item.tag.includes('')))
                                .map((item, i) => (
                                    <li
                                    key={i}
                                    sx={heights[i]}
                                    data-aos='fade-right'
                                    data-aos-duration='1200'
                                    data-aos-delay={item?.delayAnimation}
                                    onClick={() => {
                                        navigate(
                                        `/portfolio/${item.tag.toLowerCase()}/${item?.content?.projectDate}/${item.slug}`,
                                        );
                                    }}>
                                    <div className='inner'>
                                        <img
                                        src={`/img/portfolio/${item.tag.toLowerCase()}/${item.img}`}
                                        alt={item.tag}
                                        className='mainImg'
                                        />
                                        <div className='mobile_title'>
                                        <h5>{`${item.title} - ${item?.content?.projectDate}`}</h5>
                                        <span>{item.tag}</span>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                            </CustomTabPanel>
                        ))}
                        </SRLWrapper>
                        {/* End tabpanel */}
                    </div>
                    </Box>
                </div>
                </div>
            </SimpleReactLightbox>
        </section>
    </Grid>
  );
};

export default List;
