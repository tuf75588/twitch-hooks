/** @jsx jsx */
import {useEffect, useState, Fragment} from 'react';
import {jsx, css} from '@emotion/core';
import API from '../lib/api';
import Card from './Card';
// grid container

function Showcase(props) {
  const [users, setUsers] = useState([]);
  const [liveUsers, setLiveUsers] = useState([]);
  const flattened = users.flat().slice(0, users.length / 2);

  // get all streamers who are currently live
  const liveRightNow = users
    .flat()
    .slice(flattened.length)
    .filter(({status}) => {
      return status !== 'offline';
    });

  useEffect(() => {
    async function fetchData() {
      let data = await API.authWithTwitch();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Card
        users={users.flat().slice(0, users.length / 2)}
        liveRightNow={liveRightNow}
      />
    </Fragment>
  );
}

export default Showcase;
