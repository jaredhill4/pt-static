// @flow

// Vendors
import React from 'react';

// Components
import { Container } from '../../components';

// Styles
import './home.scss';

// Types
type Props = {
  pageData: {
    title: string,
    content: string
  }
};

const Home = ({ pageData }: Props) => (
  <Container>
    <h1>{pageData.title}</h1>
    <div>{pageData.content}</div>
  </Container>
);

export default Home;
