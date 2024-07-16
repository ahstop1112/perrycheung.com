import { createTheme } from '@mui/material';
import { createSpacing } from '@mui/system';
import {
  black,
  htiPrimaryBlue,
  htiPrimaryBlue25,
  htiPrimaryBlue75,
  htiPrimaryGery25,
  htiSecondaryCyan25,
} from './AppColours';

const spacing = createSpacing(8);
const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 992,
  lg: 1280,
  xl: 1920,
};
export const mainDrawerWidth = 160;

const LightTheme = createTheme({
  root: {
    margin: 0,
    padding: 0,
  },
  breakpoints: { values: breakpointValues },
  palette: {
    brandColor: `#123E74`, // main color
    background: {
      default: `#E9EDF1`,
      disabled: `#f0f0f0`,
      navbar: `#FFFFFF`,
      toolsButton: `#FFFFFF`,
      login: `#FFFFFF`,
      light: `#f9f9f9`,
      1: `#0e0e17`,
      2: `#030303`,
      menu: {
        1: `#2d2f30`,
        2: `#2C3E50`,
      },
      content: {
        1: `#E9EDF1`,
        2: `#FFFFFF`,
        3: `#003da5`, // white 0.05
        4: `#F4F5FA`,
        5: `#EEEEEE`,
      },
      searchBar: `#E9EDF1`,
      searchBarText: `#333333`,
    },
    icon: {
      1: `#003DA5`,
      2: `#999999`,
      3: `#416BBF`,
      4: `#00000089`, // icon button working color
      5: `#00000042`, // icon button disabled color
    },
    button: {
      normal: `#416BBF`,
      selected: `#003DA5`,
      disabled: `#666666`,
      secondary: `#eeeeee`,
      third: `#dedede`,
      1: `#FC9518`,
      2: `#ff5722`,
      3: `#00A7B5`,
    },
    line: {
      1: `#B8C7E6`,
      2: `rgba(153, 153, 153, 1)`,
      3: `#DDDDDD`,
    },
    text: {
      1: `#ffc107`, // main color
      2: `#333333`,
      3: `#999999`,
      4: `#666666`,
      5: `#FFFFFF`,
      6: `#117cff`,
      7: `#f00000`,
      8: `#B6995A`,
      9: `#7FD1EF`,
      10: `#ff5722`,
      11: `#3DC0CC`,
      12: `#ef9404`,
      13: `#FC9518`,
      14: `#3e8dc5`,
      15: `#247880`,
      16: `#ef9404`,
      17: `#FC9518`,
      disabled: `#999999`,
    },
    shadow: {
      1: `0px 2px 4px -1px #AAAAAA`,
    },
    price: {
      up: `#00BA57`,
      down: `#E01400`,
    },
    apiError: {
      background: `#f44336`,
      text: `#D0021B`,
    },
    errorRed: `#D0021B`,
    charts: {
      1: `#416BBF`,
      2: `#B8C7E6`,
      3: `#00A3E0`,
      4: `#3FB8E6`,
      5: `#00A7B5`,
      6: `#3DC0BC`,
      7: `#007396`,
      8: `#3E95B3`,
      9: `#B7BF10`,
      10: `#C1CC47`,
      11: `#ED8B00`,
      12: `#F2A730`,
      13: `#B6995A`,
      14: `#123E74`,
    },
  },
  marketData: {
    background: `#D9E1F2`,
  },
  mixins: {
    toolbar: {
      minHeight: spacing(3),
    },
  },
  props: {
    MuiInputLabel: {
      shrink: true, // shrink all input label by default
    },
  },
  overrides: {
    MuiFormControl: {
      // class: readonly - change the field in the form control to "look like" read-only
      root: {
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
        '&.readonly label': {
          color: black,
        },
        '& input::placeholder': {
          display: 'none',
        },
        '& input': {
          '&::placeholder': {
            display: 'none',
          },
        },
        '& ::-moz-placeholder': {
          display: 'none',
        },
        '&.readonly div::before': {
          borderBottomColor: black,
          content: 'unset !important',
        },
        '&.readonly div::focused': {
          borderBottomColor: black,
          content: 'unset !important',
        },
        '&.readonly div::after': {
          borderBottomColor: black,
          content: 'unset !important',
        },
        '&.readonly div button': {
          display: 'none',
        },
        '&.readonly svg': {
          display: 'none',
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 'bolder',
        color: htiPrimaryBlue,
        '&$focused': {
          color: htiPrimaryBlue75,
          fontWeight: 'bold',
        },
      },
      focused: {},
    },
    // Assume we only use Fab for right-bottom floating button
    MuiFab: {
      root: {
        position: 'fixed',
        zIndex: '10000',
        right: spacing(4),
        bottom: spacing(4),
      },
    },
    // MUI Data Table
    MUIDataTableHeadRow: {
      root: {
        borderBottomColor: htiSecondaryCyan25,
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
      },
    },
    MuiTable: {
      root: {
        '& caption': {
          paddingLeft: spacing(0),
          paddingRight: spacing(0),
          paddingTop: spacing(0),
          paddingBottom: spacing(0),
        },
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        paddingTop: spacing(0.5),
        paddingBottom: spacing(0.5),
      },
    },
    MuiTablePagination: {
      toolbar: {
        minHeight: spacing(3),
        '& .MuiIconButton-root': {
          padding: spacing(0),
        },
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontWeight: 'bolder',
      },
      sortAction: {
        display: 'unset',
      },
    },
    MUIDataTableBodyCell: {
      cellStackedSmall: {
        fontSize: '14px !important',
        '&:nth-child(odd)': {
          fontWeight: 'bolder',
          borderRightStyle: 'dotted',
          borderRightWidth: '1px',
          borderRightColor: htiPrimaryBlue25,
          width: '30% !important',
        },
      },
      stackedCommon: {
        fontSize: '14px !important',
      },
    },
  },
});

export default LightTheme;
