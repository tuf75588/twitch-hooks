/** @jsx jsx */
import {jsx, css} from '@emotion/core';

// grid container
const showCaseStyles = css`
  color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 10px;
  gap: 10px;
  .item {
    background: #f2f2f2;
    color: #000;
    overflow-y: hidden;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
  }
`;

function Showcase(props) {
  return (
    <div css={showCaseStyles}>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
      <div className="item">
        <h1>filler content</h1>
        <h1>filler content</h1>
        <h1>filler content</h1>
      </div>
    </div>
  );
}

export default Showcase;
