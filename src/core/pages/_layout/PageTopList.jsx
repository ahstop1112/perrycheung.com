import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { PageTitle, MetaTitle, Breadcrumb, PageTopSection, ButtonContained, SearchContainer } from 'components/index';
import useForm from 'core/store/hooks/useForm';

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    marginTop: theme.spacing(2),
    display: `flex`,
    justifyContent: `flex-end`,
    alignItems: `center`,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      marginRight: 0,
      paddingBottom: theme.spacing(1),
    },
  },
  addButton: {
    marginRight: theme.spacing(1),
    backgroundColor: `${theme.palette.text[17]} !important`,
    color: `${theme.palette.text[5]} !important`,
    borderRadius: theme.spacing(0.5),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.between('xs', 'sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginRight: theme.spacing(1.5),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      marginRight: 0,
      padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    },
    '&:hover': {
      backgroundColor: theme.palette.charts[4],
    },
  },
}));

// TODO still need to parsing pathName ?
const PageTopList = ({ name, link, updateSearchResult, hooks, showAddButton }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { handleLink } = useForm();

  return (
    <>
      <MetaTitle title={`${t(`ipms.${name}.title`)} : ${t('commons.siteNameFull')}`} />
      <PageTopSection>
        <Grid
          container
          item
          xl={showAddButton ? 6 : 12}
          lg={showAddButton ? 6 : 12}
          md={showAddButton ? 6 : 12}
          sm={showAddButton ? 6 : 12}
          xs={showAddButton ? 6 : 12}>
          <PageTitle title={t(`ipms.${name}.title`)} />
          <Breadcrumb currentLinkTag={t(`ipms.${name}.title`)} lv1Tag={t('ipms.title')} lv1Link={`/admin/${link}`} />
        </Grid>
        {showAddButton && (
          <Grid container item xl lg md sm xs className={classes.btnContainer}>
            <ButtonContained
              type='button'
              value='button'
              color='secondary'
              className={classes.addButton}
              loading={false}
              disabled={false}
              onClick={() => handleLink(`/cms/admin/${link}/add`)}>
              {t(`ipms.${name}.add`)}
            </ButtonContained>
          </Grid>
        )}
        <SearchContainer updateSearchResult={updateSearchResult} searchName='searchInputs' hooks={hooks} />
      </PageTopSection>
    </>
  );
};

export default PageTopList;

PageTopList.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  updateSearchResult: PropTypes.func.isRequired,
  hooks: PropTypes.objectOf(PropTypes.any).isRequired,
};
