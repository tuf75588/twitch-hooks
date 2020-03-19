// unique client ID for twitch
import {config} from '../config.js';
export const BASE_URL = 'https://api.twitch.tv/helix';
export const usersEndpoint = `${BASE_URL}/users`;
const streamsEndpoint = `${BASE_URL}/streams`;
const streams = [
  'sooler_',
  'ourchickenlife',
  'alca',
  'bobross',
  'schwedy',
  'kwitty23',
  'eviltoaster',
];

export const options = {
  headers: {
    'Client-ID': config.clientID,
    Authorization: `Bearer ${config.access_token}`,
  },
};

// for getting each streamers information from twitch
function getUserInfo(user) {
  return fetch(`${usersEndpoint}?login=${user}`, options)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      return user.data;
    });
}

function getStreamInfo(login) {
  return fetch(`${streamsEndpoint}/?user_login=${login}`, options)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      return !!user.data.length ? user.data : [{status: 'offline', login}];
    });
}

async function authWithTwitch() {
  //users first
  const userData = await streams.map(getUserInfo);
  const streamData = await streams.map(getStreamInfo);
  const [users, streamInfo] = await Promise.all([
    Promise.all(userData),
    Promise.all(streamData),
  ]);
  return [...users, ...streamInfo];
}

export default {
  authWithTwitch,
  streams,
};
