/** @jsx jsx */
import {useEffect} from 'react';
import {jsx, css} from '@emotion/core';
import API from '../lib/api';
import Card from './Card';
// grid container
const showCaseStyles = css`
  color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  padding: 10px;
  gap: 10px;
  .item {
    background: #f2f2f2;
    padding: 10px;
    color: #000;
    overflow-y: hidden;
    text-align: center;
    border-radius: 5px;
  }
`;

function Showcase(props) {
  useEffect(() => {
    API.authWithTwitch();
  }, []);
  return (
    <div css={showCaseStyles}>
      {API.streams.map((user) => {
        return (
          <div className="item" key={user}>
            {/* this will be asynchronously rendered */}
            <Card username={user} />
          </div>
        );
      })}
    </div>
  );
}

export default Showcase;
