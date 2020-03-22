/** @jsx jsx */
import {useEffect, useState, Fragment} from 'react';
import {jsx, css} from '@emotion/core';
import API from '../lib/api';
import Card from './Card';
import ChannelForm from './ChannelForm';
// grid container

function Showcase(props) {
  const [users, setUsers] = useState([]);
  const flattened = users.flat().slice(0, users.length / 2);

  // get all streamers who are currently live
  const liveRightNow = users
    .flat()
    .slice(flattened.length)
    .filter(({status}) => {
      return status !== 'offline';
    });
  const userInfo = users.flat().filter((obj) => {
    return !obj.hasOwnProperty('status') && !obj.hasOwnProperty('viewer_count');
  });
  // function to add a new user to the UI when a search is done
  const addNewUser = (channel) => {
    setUsers(() => {
      return [...userInfo, channel];
    });
  };
  useEffect(() => {
    async function fetchData() {
      let data = await API.authWithTwitch();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <ChannelForm addNewUser={addNewUser} />
      <Card users={userInfo} liveRightNow={liveRightNow} />
    </Fragment>
  );
}

export default Showcase;
