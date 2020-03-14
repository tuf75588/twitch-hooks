/** @jsx jsx */

import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {jsx, css} from '@emotion/core';
import AppGlobalStyles from './components/GlobalStyles';
import Navbar from './components/Nav';

const HomeContainer = css`
  max-width: 1100px;
  margin: 0 auto;
`;

function App() {
  return (
    <Fragment>
      <AppGlobalStyles />
      <div css={HomeContainer}>
        <Navbar />
      </div>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
