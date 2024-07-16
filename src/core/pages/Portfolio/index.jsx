//  General JS Library importation
import React from 'react';
import { useParams } from 'react-router-dom';
import ContentMain from 'components/ContentMain';
//  Getting the Common Hooks from core/store/hooks
//  Getting the Provider for state usage
import PortfolioProvider from 'core/store/providers/Portfolio';
import { tagListContent } from 'core/data/portfolio';
//  Child Page Components
import List from './List';
import Content from './Content';

const Portfolio = () => {
  const { tag, year, slug } = useParams();
  const profo = tagListContent.filter((item) => item.slug === slug)[0];

  const initialPortfolioState = {
    isReadWrite: true,
    actionTypes: [],
    searchType: 'advanced',
    searchInputs: null,
    listColumns: null,
    searchResult: [],
    PortfolioById: [],
    layoutGrid: 4,
    isLoading: true,
    pageSorts: '-processStartDatetime',
    sortOrder: 'desc',
    canSort: true,
    totalCount: 0,
    pageIndex: 0,
    pageSize: 20,
    apiData: profo,
  };

  return (
    <PortfolioProvider initState={initialPortfolioState}>
      <ContentMain>{tag && year && slug ? <Content slug={slug}/> : <List tag={tag} year={year}/>}</ContentMain>
    </PortfolioProvider>
  );
};

export default Portfolio;
