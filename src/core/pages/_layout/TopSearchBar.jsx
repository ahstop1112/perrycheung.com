import React from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from 'core/store/hooks/useAuth';
import Grid from '@mui/material/Grid';
import SearchContainer from 'components/SearchContainer';
import SearchBarStyles from 'core/pages/_layout/styles/SearchBar';

const TopSearchBar = () => {
  const classes = SearchBarStyles();
  const { t } = useTranslation();
  const { Auth, AuthState, dispatch } = useAuth();
  const { searchInputs } = AuthState;

  return (
    <Grid container item className={classes.searchBox}>
      <SearchContainer
        SearchInputs={searchInputs}
        // updateSearchResult={updateSearchResult}
        hooks={Auth}
        addBtnLink=''
        addBtnText=''
      />
    </Grid>
  );
};

export default TopSearchBar;
