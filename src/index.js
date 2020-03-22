/** @jsx jsx */

// some components will eventually be lazy loaded
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {jsx, css} from '@emotion/core';
import AppGlobalStyles from './components/GlobalStyles';
import Navbar from './components/Nav';
import Showcase from './components/Showcase';
import ChannelForm from './components/ChannelForm';
const HomeContainer = css`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

function App() {
  return (
    <Fragment>
      <AppGlobalStyles />
      <div css={HomeContainer}>
        <Navbar />
        <Showcase title="hello" />
      </div>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
