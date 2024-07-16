import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaTitle from 'components/MetaTitle';
import Portfolio from './Portfolio';

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTitle title={`${t('Portfolio.title')} : ${t('siteNameFull')}`} />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
