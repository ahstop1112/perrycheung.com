import { makeStyles } from "@mui/styles";

const HomeStyles = makeStyles((theme) => ({
  parallaxBg: {
    position: 'relative',
    transformStyle: `preserve-3d`,
    width: `100%`,
    height: `auto`,
    padding: `100px 0`,
    color: theme.palette.text[5], // border: `1px solid red`,
    width: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    overflow: 'hidden',
    // @media screen and (maxWidth: 992px): {
    //   padding: 60px 0;
    // }
    '&::after': {
      width: `100%`,
      height: `100%`,
      content: '" "',  
      position: `absolute`,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      // transform: `translateZ(-1px) scale(2.1)`,
      backgroundSize: `cover`,
      backgroundAttachment: 'fixed',
      zIndex: -1,
    },

    '&  h1,h2,h3,h4,h5,h6': { paddingTop: 10, paddingBottom: 10 },
    '& p': { marginBottom: 10 },
    '& img.logo': { maxWidth: 35, marginRight: 15 },
    '& .text': {
      paddingTop: 27,
    },
  },
  skillSection: {
    background: `#0e0e17`,
    '&::after': {
      backgroundImage: `url('/img/bg.jpg')`,
      opacity: 0.075,
    },
  },
  skillsInner: {
    width: `100%`,
    height: `auto`,
    clear: `both`,
    display: `flex`,
    [theme.breakpoints.down('md')]: {
      flexWrap: `wrap`,
    },
  },
  skillsLeft: {
    width: `50%`,
    paddingRight: 50,
    [theme.breakpoints.down('md')]: {
      width: `100%`,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  skillsRight: {
    width: `50%`,
    paddingLeft: 50,
    [theme.breakpoints.down('md')]: {
      width: `100%`,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  sliderSection: {
    background: theme.palette.background[1],
    '&::after': {
      backgroundImage: `url('/img/slider/home_bg.jpg')`,
      opacity: 0.3,
    },
  },
  aboutSection: {
    background: theme.palette.background[1],
    '&::after': {
      backgroundImage: `url('/img/slider/home_bg.jpg')`,
      opacity: 0.15,
    },
  },
  overviewSection: {
    background: theme.palette.background[1],
    '&::after': {
      backgroundImage: `url('/img/bg2.jpg')`,
      opacity: 0.1,
    },
  },
  brandSection: {
    background: theme.palette.background[1],
  },
  callToActionSection: {
    background: theme.palette.background[1],
    height: `50vh`,
    '&::after': {
      backgroundImage: `url('/img/bg3.jpg')`,
      opacity: 0.075,
    },
  },
}));

export default HomeStyles;
