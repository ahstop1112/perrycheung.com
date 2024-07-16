import { makeStyles } from "@mui/styles";

const PortfolioStyles = makeStyles((theme) => ({
  portfolioPage: {
    background: '#0e0e17',
    color: theme.palette.text[5],
    position: `relative`,
    minHeight: `100vh`,
    width: `100%`,
    display: `flex`,
    alignItems: `flex-start`,
    justifyContent: `center`,

    '&::before': {
      width: `100%`,
      height: `100%`,
      content: '" "',
      backgroundImage: `url('/img/bg.jpg')`,
      backgroundSize: `cover`,
      backgroundAttachment: `fixed`,
      transform: `translateZ(-1px) scale(2.1)`,
      position: `fixed`,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      // zIndex: -1,
      opacity: 0.125,
    },
    '& .tm_topbar': {
      position: `static`,
      '.topbar_inner': {
        backgroundColor: theme.palette.text[1],
        'li.current a': {
          color: theme.palette.text[2],
        },
        a: {
          color: theme.palette.text[2],
        },
      },
    },
  },
  body: {
    width: `96%`,
    marginLeft: `2%`,
    padding: `100px 0`,
    minHeight: `100vh`,
    display: `flex`,
    flexWrap: `wrap`,
    flexDirection: `column`,
  },
  leftImgBody: {
    padding: 20,

    '& ul': {
      marginTop: 30,
    },
    '& .slick-slide li': {
      textAlign: 'center',
      display: 'flex !important',
      alignItems: 'center',
    },
  },
  rightDescBody: {
    flexDirection: `column`,
    alignItems: 'flex-start',
    '& h3': {
      marginTop: 30,
      marginBottom: 20,
      lineHeight: 1.5,
      display: `block`,
      color: `#fff`,
      textShadow: `#000 1px 0 10px`,
    },
  },
  companyName: {
    marginBottom: 5,
    '& span': {
      marginLeft: 50,
      fontWeight: 500,
      color: theme.palette.text[1],
    },
  },
  projectDate: {
    marginBottom: 5,
    '& span': {
      marginLeft: 30,
      fontWeight: 500,
      color: theme.palette.text[1],
    },
  },
  liveLinks: {
    display: `flex`,
    alignItems: 'flex-start',
    '& span': {
      display: 'inline-block',
      marginLeft: 38,
      fontWeight: 500,
      color: `#fff`,
    },
    '& a': {
      display: 'block',
      marginBottom: 5,
      color: `#fff`,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  gitLink: {
    display: `flex`,
    alignItems: 'flex-start',
    '& span': {
      display: 'inline-block',
      marginLeft: 66,
      fontWeight: 500,
      color: `#fff`,
    },
    '& a': {
      display: 'block',
      marginBottom: 5,
      color: `#fff`,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  description: {
    marginTop: 30,
    '& p': {
      marginBottom: 20,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  tag: {
    maxWidth: 120,
    padding: `5px 10px`,
    marginBottom: 30,
    backgroundColor: theme.palette.text[2],
    color: theme.palette.text[5],
    textAlign: `center`,
    borderRadius: 4,
    cursor: `pointer`,
  },
  hashtags: {
    marginTop: 30,
    display: `flex`,
    flexWrap: `wrap`,
    h4: {
      marginBottom: 10,
    },
  },
  hashtag: {
    padding: `5px 10px`,
    marginRight: 10,
    marginBottom: 10,
    border: `1px solid #ffc107`,
    backgroundColor: `#0e0e17`,
    color: `#fff`,
    textAlign: `center`,
    borderRadius: 4,
    cursor: `pointer`,
  },
}));

export default PortfolioStyles;
