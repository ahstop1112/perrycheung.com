import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import MetaTitle from 'components/MetaTitle';
import Home from './Home';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <MetaTitle title={`${t('Home.title')} : ${t('siteNameFull')}`} />
      <Home />
    </Fragment>
  );
};

export default HomePage;
