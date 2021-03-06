import React from 'react';
import {Global, css} from '@emotion/core';

function AppGlobalStyles() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #24292e;
          }
          ul,
          h1,
          h2,
          h3,
          p,
          span,
          h4 {
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />
    </React.Fragment>
  );
}

export default AppGlobalStyles;
