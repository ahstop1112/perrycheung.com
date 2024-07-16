import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import { PageTitle, MetaTitle, Breadcrumb, PageTopSection, ButtonContained } from 'components/index';
import useForm from 'core/store/hooks/useForm';
import { DEFAULT_PAGE_ROOT } from 'utility/constants';

const useStyles = makeStyles((theme) => ({
  backContainer: {
    alignItems: `center`,
    justifyContent: `flex-end`,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
    '& button': {
      backgroundColor: `${theme.palette.button.secondary} !important`,
      color: theme.palette.text[4],
    },
  },
}));

// TODO still need to parsing pathName ?
const PageTopForm = ({ name, link, pageAction }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { handleLink } = useForm();

  return (
    <>
      <MetaTitle title={`${t(`ipms.${name}.${pageAction}`)} : ${t('commons.siteNameFull')}`} />
      <PageTopSection>
        <Grid container item xl={9} lg={9} md={9} sm={8} xs={8}>
          <PageTitle title={t(`ipms.${name}.${pageAction}`)} />
          <Breadcrumb
            currentLinkTag={t(`ipms.${name}.${pageAction}`)}
            lv1Tag={t('ipms.title')}
            lv1Link={`/cms/admin/${link}`}
            lv2Tag={t(`ipms.${name}.title`)}
            lv2Link={`/cms/admin/${link}`}
          />
        </Grid>
        <Grid container item xl lg md sm xs className={classes.backContainer}>
          <ButtonContained
            type='button'
            value='button'
            color='secondary'
            onClick={() => handleLink(`/cms/admin/${link}`)}
            disabled={false}
            loading={false}>
            {t('commons.back')}
          </ButtonContained>
        </Grid>
      </PageTopSection>
    </>
  );
};

export default PageTopForm;

PageTopForm.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  pageAction: PropTypes.string.isRequired,
};
