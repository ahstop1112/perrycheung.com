import { makeStyles } from "@mui/styles";

const SearchBarStyles = makeStyles((theme) => ({
  content: {
    //   borderBottom: `1px solid ${theme.palette.grey.main}`,
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: '2em',
    fontWeight: 300,
  },
  buttonContainer: {
    textAlign: 'right',
  },
  select: {
    // border: '1px solid red',
    marginTop: '12px',
  },
  icon: {
    color: '#00B2E2',
  },
  searchTextField: {
    overflow: `hidden`,
    '& .MuiFormControl-root': {
      // border: `1px solid ${theme.palette.line[1]}`,
      borderRadius: theme.spacing(0.5),
      background: theme.palette.background.searchBar,
    },
    '&:hover': {
      border: 'none',
    },
    '& input': {
      // display: 'none',
      color: theme.palette.background.searchBarText,
      border: 'none',
      borderRadius: 0,
      '&:hover': {
        border: 'none',
      },
      '&::placeholder': {
        color: theme.palette.background.searchBarText,
      },
    },
  },
}));

export default SearchBarStyles;
