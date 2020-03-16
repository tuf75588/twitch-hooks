/** @jsx jsx */
import {useEffect, useState} from 'react';
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
  const [users, setUsers] = useState([]);
  const flattened = users.flat().slice(0, 7);

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
          console.log(user);
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
