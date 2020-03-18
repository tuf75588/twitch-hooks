/** @jsx jsx */
import {jsx, css} from '@emotion/core';
// this component will eventually receive some props for UI

// grid container and grid items
const gridContainer = css`
  color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;
  padding: 10px;
  grid-auto-flow: column;
  height: 100%;
  width: 100%;
  gap: 10px;
  .item {
    background: #222327;
    position: relative;
    padding: 10px;
    color: #000;
    overflow-y: hidden;
    text-align: center;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
    }
  }
`;

function Card({users, liveRightNow}) {
  if (!users) return <p>loading..</p>;
  return <div css={gridContainer}></div>;
}

export default Card;
