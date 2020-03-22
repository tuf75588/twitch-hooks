/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import CardListItem from './CardListItem';

// grid container and grid items
const gridContainer = css`
  color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: row;
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
  const usernames = liveRightNow.map((user) => user.user_id);

  return (
    <div css={gridContainer}>
      {users.map(({display_name, profile_image_url, id}, i) => {
        const status = {};
        if (usernames.includes(id)) {
          status.online = true;
          status.user = display_name;
        } else {
          status.online = false;
        }

        return (
          <div className="item" key={id}>
            <CardListItem
              name={display_name}
              status={status}
              img={profile_image_url}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
