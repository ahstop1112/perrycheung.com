import { makeStyles } from "@mui/styles";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_XL } from 'utility/constants';

const MainLayoutStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    minHeight: `80vh`,
    alignContent: `flex-start`,
    backgroundColor: theme.palette.background.light,
    '&::-webkit-scrollbar': {
      width: 5,
      height: 5,
    },
    '&::-webkit-scrollbar-track': {
      /* Track */ background: theme.palette.background.light,
      borderLeft: 0,
      borderRight: 0,
      backgroundClip: `content-box`,
    },
  },
  main: {
    // border: `1px solid red`,
    display: `flex`,
    flexWrap: `noWrap`,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.light,
    },
  },
  centerContent: {
    flex: `0 0 100%`,
    maxWidth: `100%`,
    // padding: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
      // padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      padding: theme.spacing(0),
      marginTop: 0,
    },
  },
  content: {
    minHeight: `50vh`,
    display: `flex`,
    flexWrap: `wrap`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    marginTop: 0,
    paddingLeft: theme.spacing(0),
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  contentShift: {
    width: `100%`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    [theme.breakpoints.down('sm')]: { marginLeft: 0 },
  },
}));

export default MainLayoutStyles;
