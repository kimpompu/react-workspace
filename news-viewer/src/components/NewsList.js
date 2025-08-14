import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=`,
    );
  }, [category]);

  // 대기 중
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // articles 미설정
  if (!response) {
    return null;
  }

  // error
  if (error) {
    return <NewsListBlock>error</NewsListBlock>;
  }

  if (!response || !response.data || !response.data.articles) {
    return <NewsListBlock>데이터 없음</NewsListBlock>;
  }

  //articles 유효

  const articles = response.data.articles;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
