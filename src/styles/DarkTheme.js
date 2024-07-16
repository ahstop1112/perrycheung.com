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
  sm: 770, // 768 (ipad)
  md: 991, // changed from default (960) for keep full data table with half screen in 1920 resolution
  lg: 1280,
  xl: 1920,
};
export const mainDrawerWidth = 160;

const DarkTheme = createTheme({
  root: {
    margin: 0,
    padding: 0,
  },
  typography: {
    // fontFamily: ["Avenir-Medium", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontFamily: ['Avenir-Medium'].join(','),
  },
  breakpoints: { values: breakpointValues },
  palette: {
    brandColor: `#003DA5`, // main color
    background: {
      default: `#121A22`,
      navbar: `#121A22`,
      toolsButton: `#B6995A`,
      login: `#FFFFFF`,
      menu: {
        1: `#121A22`,
        2: `#2C3E50`,
      },
      content: {
        1: `#333333`,
        2: `#121A22`,
        3: `#976E26`,
        4: `#152031`,
      },
      searchBar: `#4A6076`,
      searchBarText: `#CCCCCC`,
    },
    icon: {
      1: `#B6995A`,
      2: `#DBC193`,
      3: `#999999`,
      4: `#FFFFFF`,
      5: `#777777`,
    },
    button: {
      normal: `#B6995A`,
      selected: `#976E26`,
      disabled: `#CCCCCC`,
      1: `#00A3E0`,
      2: `#3FB8E6`,
      3: `#00A7B5`,
    },
    line: {
      1: `#976E26`,
      2: `#B6995A`,
      3: `#B6995A`,
    },
    text: {
      1: `#976E26`, // main color
      2: `#B6995A`,
      3: `#DBC193`,
      4: `#FFFFFF`,
      5: `#CCCCCC`,
      6: `#B6995A`,
      7: `#f00000`,
      8: `#B6995A`,
      9: `#7FD1EF`,
      10: `#3E95B3`,
      11: `#3DC0CC`,
      12: `#00A3E0`,
    },
    shadow: {
      1: `0px 2px 4px -1px #121A22`,
    },
    price: {
      // up:   `#00BA57`,
      // down: `#E01400`
      up: `#00BA00`,
      down: `#FF0000`,
    },
    charts: {
      1: `#B6995A`,
      2: `#666666`,
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
      13: `#416BBF`,
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
      responsiveStackedSmall: {
        // p.s. cannot use defaultTheme.breakpoints.down('md') as current theme changed the breakpoint
        [`@media (max-width: ${breakpointValues.md - 1}px)`]: {
          width: '70% !important',
          '& .MuiFormControlLabel-root': {
            marginTop: spacing(-1),
            marginLeft: spacing(1),
          },
          '& .MuiFormControlLabel-root .MuiInput-underline.Mui-disabled::before': {
            borderBottomStyle: 'unset',
          },
          '& .MuiFormControlLabel-root .MuiInput-underline::before': {
            marginBottom: spacing(1),
          },
          '& span': {
            marginTop: spacing(-0.25),
            marginLeft: spacing(-0.5),
          },
          '& .MuiIconButton-root': {
            marginTop: spacing(-0.75),
            float: 'right',
          },
        },
      },
    },
  },
});

export default DarkTheme;
