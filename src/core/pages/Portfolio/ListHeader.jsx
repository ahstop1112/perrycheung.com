import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import PageTopSection from 'components/PageTopSection';
import PageTitle from 'components/PageTitle';
import Breadcrumb from 'components/Breadcrumb';

const ContentHeader = ({ title, tag }) => {
  const { t } = useTranslation();

  return (
    <PageTopSection>
      <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} className='innerHeader'>
        <PageTitle title={t('Portfolio.title')} />
        <Breadcrumb currentLinkTag={t('Portfolio.title')} lv1Link='/portfolio' />
      </Grid>
    </PageTopSection>
  );
};

export default ContentHeader;
