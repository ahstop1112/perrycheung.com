import { makeStyles } from "@mui/styles";

export default MarketDataStyles = makeStyles((theme) => ({
  marketDataContainer: {
    background: theme.marketData.background,
    padding: theme.spacing(1),
    position: `fixed`,
    bottom: 0,
    width: `100%`,
    zIndex: 1000,
  },
  card: {
    width: '100%',
    boxShadow: `none`,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.line[1]}`,
    padding: theme.spacing(1),
    '& h3': {
      width: `100%`,
      fontFamily: 'theme.typography.avenirHeary',
      fontSize: `1.2em`,
      color: theme.palette.text[2],
      margin: `${theme.spacing(1)}px 0`,
    },
    '& div': {
      '& span': {
        display: 'inline-block',
        fontFamily: 'Avenir-Book',
        color: '#003DA5',
        letterSpacing: 0,
        //    lineHeight: "4.75rem",
      },
      '& img': {
        width: '24px',
        // margin:"0px 0 0 0"
      },
    },
  },
  titleHeader: {
    display: 'flex',
    alignItems: `center`,
    marginBottom: theme.spacing(1),
    '& h4': {
      color: theme.palette.text[2],
      fontSize: '1.25em',
      fontWeight: `normal`,
      lineHeight: 1.5,
      margin: 0,
    },
    '& a': {
      color: theme.palette.text[1],
      textDecoration: `none`,
    },
    '& svg': {
      color: theme.palette.text[1],
    },
  },
  cardBody: {},
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: `space-between`,
  },
  mains: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
    overflowY: 'auto',
  },
  openinnew: {
    width: '16px',
    height: '16px',
    float: 'right',
  },
  restorefrom: {
    width: '18px',
    height: '18px',
    float: 'right',
  },
}));
