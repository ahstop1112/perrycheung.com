import { makeStyles } from "@mui/styles";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_XL } from 'utility/constants';

const NavBarStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: `flex-end`,
    width: '100%',
    backgroundColor: theme.palette.background.navbar,
    padding: `0 !important`,
    boxShadow: `none`,
    position: `static`,
    [theme.breakpoints.up('md')]: {
      position: `fixed`,
      maxHeight: 65,
      overflow: `hidden`,
    },
  },
  headerContent: {
    alignItems: 'center',
    padding: 0,
    display: 'flex',
    // flex: `0 0 100%`,
    flexWrap: `nowrap`,
    [theme.breakpoints.up('md')]: {
      flex: 0,
    },
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.background.content[3],
    },
  },
  logoContainer: {
    flex: `0 0 100%`,
    background: theme.palette.brandColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: `center`,
    flexDirection: `row-reverse`,
    flexWrap: `noWrap`,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
      maxWidth: SIDEBAR_WIDTH,
      flex: `0 0 ${SIDEBAR_WIDTH}px`,
      justifyContent: 'space-between',
      flexDirection: `row`,
    },
    [theme.breakpoints.up('xl')]: {
      padding: `${theme.spacing(1.2)}px ${theme.spacing(2)}px`,
      maxWidth: SIDEBAR_WIDTH_XL,
      flex: `0 0 ${SIDEBAR_WIDTH_XL}px`,
    },
  },
  logo: {
    maxHeight: 45,
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  },
  searchContainer: {
    flex: `0 0 100%`,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.content[2],
    [theme.breakpoints.up('sm')]: {
      flex: '0 0 25%',
      paddingLeft: theme.spacing(2.5),
      backgroundColor: `rgba(0,0,0,0)`,
    },
  },
  menuContainer: {
    flex: `0 0 100%`,
    display: 'none',
    justifyContent: 'center',
    // borderRight: `1px solid ${theme.palette.line[2]}`,
    backgroundColor: theme.palette.background.content[2],
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: '0 0 35%',
      paddingLeft: theme.spacing(1),
      backgroundColor: `rgba(0,0,0,0)`,
    },
    '& nav': {
      display: `flex`,
      width: `auto`,
    },
    '& .MuiListItem-root': {
      padding: `0 ${theme.spacing(1)}px`,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 80,
    },
    '& svg': {
      color: theme.palette.text[3],
    },
    '& span': {
      fontSize: `0.84rem`,
      color: theme.palette.text[3],
    },
  },
  closeMenuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    textAlign: 'left',
    display: `flex`,
    [theme.breakpoints.up('md')]: {
      display: `none`,
    },
  },
  mobileButton: {
    // mobile menu icon
    marginRight: theme.spacing(2),
    outline: 'none !important',
    color: theme.palette.text[5],
    // display: `none`,
    position: `absolute`,
    left: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: `block`,
      marginRight: 0,
      position: `static`,
    },
  },
  drawer: {
    width: SIDEBAR_WIDTH,
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      left: SIDEBAR_WIDTH,
      backgroundColor: theme.palette.primary.second,
    },
    [theme.breakpoints.up('xl')]: {
      width: SIDEBAR_WIDTH_XL,
    },
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerPaper: {
    width: `75%`,
    justifyContent: 'flex-start',
    top: 0,
    left: 0,
    zIndex: 999,
    paddingBottom: theme.spacing(5),
    overflowY: `auto`,
    backgroundColor: theme.palette.background.menu[1],
    color: theme.palette.text[5],
    [theme.breakpoints.up('sm')]: {
      width: `50%`,
    },
    [theme.breakpoints.up('md')]: {
      width: SIDEBAR_WIDTH,
      top: 65,
    },
    [theme.breakpoints.up('xl')]: {
      width: SIDEBAR_WIDTH_XL,
    },
    '& svg': {
      color: theme.palette.text[5],
    },
    '& .MuiPaper-root': {
      top: 0,
      background: `none`,
      position: `static`,
      [theme.breakpoints.up('md')]: {
        top: 65,
        backgroundColor: theme.palette.primary.second,
      },
    },
  },
  mobileItem: {
    width: '90%',
    marginLeft: '10%',
    borderBottom: '1px solid #C0C0C0',
    padding: '10px 25px',
    justifyContent: 'flex-start',
    color: '#767676',
  },
  accountContainer: {
    display: `flex`,
    justifyContent: `flex-end`,
    alignItems: `center`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: `none`,
    },
  },
  accountMobileContainer: {
    display: `none`,
    [theme.breakpoints.down('sm')]: {
      display: `flex`,
    },
  },
  stroke: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: `1.2em`,
    lineHeight: 2.5,
    fontWeight: 100,
    color: theme.palette.line[2],
    display: `none`,
    [theme.breakpoints.up('md')]: {
      display: `block`,
    },
  },
  icon: {
    margin: '0 15px',
    color: theme.palette.text[2],
  },
  logout: {
    fontSize: `0.95em`,
  },
  userArea: {
    background: `none`,
    display: `flex`,
    boxShadow: `none`,
    alignItems: `center`,
    paddingRight: theme.spacing(1),
    fontSize: `0.96em`,
    color: theme.palette.text[3],
    '& p': {
      display: `none`,
    },
    [theme.breakpoints.up('md')]: {
      display: `flex`,
      paddingRight: theme.spacing(2),
      '& p': {
        display: `block`,
      },
    },
    // borderRight: `1px solid ${theme.palette.text[3]}`
  },
  userMobileArea: {
    display: `flex`,
    alignItems: `center`,
    padding: theme.spacing(2),
    fontSize: `0.96em`,
    color: theme.palette.text[5],
    boxShadow: `none`,
    '& p': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      margin: 0,
    },
  },
  userMenu: {
    '& .MuiMenu-paper': {
      marginTop: 40,
    },
    '& .MuiMenu-list': {
      background: theme.palette.background.content[2],
      color: theme.palette.text[4],
    },
  },
  menuItem: {},
  menuIcon: {
    width: 30,
    minWidth: `0 !important`,
  },
  menuText: {
    whiteSpace: `noWrap`,
  },
  avatar: {
    width: 35,
    height: 35,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
    },
  },
  settings: {
    borderRadius: 0,
    // borderLeft: `1px solid ${theme.palette.text[3]}`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: 50,
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
    display: `none`,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.text[3],
      display: `block`,
    },
  },
  mobileHeaderContent: {
    maxWidth: `100%`,
    minHeight: 50,
    // border: `1px solid red`,
    overflowX: `auto`,
    padding: `${theme.spacing(1.2)}px ${theme.spacing(2)}px`,
    display: `flex`,
    flexWrap: `noWrap`,
    boxShadow: `none`,
    backgroundColor: theme.palette.background.base,
    // [theme.breakpoints.up('xs')]: {
    //   overflowX: `auto`
    // },
    [theme.breakpoints.up('md')]: {
      display: `none`,
    },
  },
  toolsButton: {
    flex: `0 0 20%`,
    marginRight: `1%`,
    display: `flex`,
    alignItems: `center`,
    fontSize: `0.86em`,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px`,
    paddingRight: 0,
    borderRadius: 15,
    background: theme.palette.background.toolsButton,
    border: `1px solid ${theme.palette.button.normal}`,
    color: theme.palette.text[4],
    justifyContent: `center`,
    boxShadow: `none`,
    [theme.breakpoints.down('xs')]: {
      flex: `0 0 30%`,
    },
    [theme.breakpoints.up('sm')]: {
      flex: `0 0 15%`,
    },
    '&:hover': {
      background: theme.palette.button.selected,
      border: `1px solid ${theme.palette.button.selected}`,
      color: theme.palette.text[5],
      cursor: `pointer`,
    },
  },
  itemLink: {
    fontSize: `1em`,
    color: theme.palette.text[3],
  },
  linkBadge: {
    fontSize: `0.75rem`,
    fontWeight: 700,
    lineHeight: 1.5,
    height: `auto`,
    position: `absolute`,
    right: -8,
    top: -8,
    background: `#f50057`,
    '& span.MuiChip-label': {
      cursor: `pointer`,
      color: theme.palette.text[5],
    },
  },
}));

export default NavBarStyles;
