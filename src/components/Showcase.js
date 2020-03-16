/** @jsx jsx */
import {useEffect, useState} from 'react';
import {jsx, css} from '@emotion/core';
import API from '../lib/api';
import Card from './Card';
// grid container
const showCaseStyles = css`
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

function Showcase(props) {
  const [users, setUsers] = useState([]);
  const flattened = users.flat().slice(0, 7);
  const statuses = users.flat().slice(flattened.length);

  useEffect(() => {
    async function fetchData() {
      let data = await API.authWithTwitch();

      setUsers(data);
    }
    fetchData();
  }, []);
  return (
    <div css={showCaseStyles}>
      {users &&
        flattened.map((user) => {
          return (
            <div className="item" key={user.id}>
              {/* this will be asynchronously rendered */}
              <Card
                username={user.display_name}
                avatar={user.profile_image_url}
                description={user.description ? user.description : ''}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Showcase;
