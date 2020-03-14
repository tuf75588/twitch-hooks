/** @jsx jsx */
import {jsx, css} from '@emotion/core';

const navStyles = css`
  height: 100px;
  background: #9147ff;
  padding: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0.25px solid #fff;

  h1 {
    color: #f2f2f2;
    text-align: center;
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
    font-weight: 300;
  }
`;

function Navbar() {
  return (
    <div css={navStyles}>
      <h1>Twitch.tv viewer</h1>
    </div>
  );
}
export default Navbar;
