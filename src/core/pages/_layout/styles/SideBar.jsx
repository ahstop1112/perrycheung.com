import { makeStyles } from "@mui/styles";

const SideBarStyles = makeStyles((theme) => ({
  sideBarHeader: {
    backgroundColor: `rgba(0,0,0, 0.75)`,
    padding: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '& h6': {
      fontSize: `1rem`,
      width: `100%`,
    },
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      right: -10,
    },
  },
  sideBarSection: {
    color: `rgba(${theme.palette.text[5]}, 0.5)`,
    padding: `${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(1)}`,
    opacity: 0.9,
    display: `block`,
  },
  category: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontWeight: 500,
    '& img': {
      color: theme.palette.text[5],
      fontSize: `1.2em`,
      marginRight: theme.spacing(0.5),
      opacity: 0.8,
    },
    '& svg': {
      color: theme.palette.text[5],
      fontSize: `1.2rem`,
      marginRight: theme.spacing(0.5),
      opacity: 0.8,
    },
    '& :hover': {
      background: `rgba(0, 0, 0, 0.08)`,
    },
    // &.${props => props.activeClassName} {
    //   background-color: ${props => darken(0.05, props.theme.sidebar.background)};

    //   span {
    //     color: ${props => props.theme.sidebar.color};
    //   }
    // }
  },
  categoryText: {
    margin: 0,
    cursor: `pointer`,
    '& span': {
      color: theme.palette.text[5],
      fontSize: `0.9rem`,
      fontWeight: `normal`,
      padding: theme.spacing(1),
    },
  },
  categoryIcon: {
    cursor: `pointer`,
    color: `rgba(${theme.palette.text[5]}, 0.5)`,
  },
  list: {
    backgroundColor: theme.palette.primary.second,
  },
  items: {
    padding: `0 ${theme.spacing(2.5)}`,
  },
  link: {
    fontSize: `1rem`,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '& span': {
      color: theme.palette.text[5],
      opacity: 0.75,
    },
    '&:hover span': {
      color: `rgba(${theme.palette.text[5]}, 0.9)`,
    },
    '&.active span': {
      fontWeight: `700 !important`,
      opacity: 1,
    },
    // &.${props => props.activeClassName} {
    //   background-color: ${props => darken(0.06, props.theme.sidebar.background)};

    //   span {
    //     color: ${props => props.theme.sidebar.color};
    //   }
    // }
  },
  linkText: {
    color: `rgba(${theme.palette.text[5]}, 0.5)`,
    marginTop: 0,
    marginBottom: 0,
  },
  linkHeaderBadge: {
    fontSize: `1rem`,
    fontWeight: 700,
    height: 20,
    // position: `absolute`,
    // right: 12,
    // top: 8,
    background: `#f50057`,
    color: theme.palette.text[5],

    '& span.MuiChip-label:hover': {
      cursor: `pointer`,
      color: `rgba(${theme.palette.text[5]}, 0.5)`,
      padding: `0 ${theme.spacing(2)}`,
    },
  },
  linkBadge: {
    fontSize: `0.86em`,
    fontWeight: 700,
    height: 20,
    // position: `absolute`,
    // right: 12,
    // top: 8,
    background: `#f50057`,
    color: theme.palette.text[5],

    '& span.MuiChip-label:hover': {
      cursor: `pointer`,
      color: `rgba(${theme.palette.text[5]}, 0.5)`,
      padding: `0 ${theme.spacing(2)}`,
    },
  },
  mobileLogout: {
    display: `none`,
    [theme.breakpoints.down('sm')]: {
      display: `block`,
      cursor: `pointer`,
    },
  },
  scrollBar: {
    borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
  },
}));

export default SideBarStyles;
