// unique client ID for twitch
import {config} from '../config.js';
const BASE_URL = 'https://api.twitch.tv/helix';
const streams = [
  'sooler_',
  'ourchickenlife',
  'alca',
  'bobross',
  'schwedy',
  'kwitty23',
  'eviltoaster',
];

async function authWithTwitch() {
  const options = {
    headers: {
      Authorization: `Bearer mn204npp4xpntwepndwjjlwtgt0pkc`,
    },
  };
  const request = await fetch(
    `${BASE_URL}/streams?user_login=sooler_`,
    options,
  );
  const {data} = await request.json();
  console.log(data);
}

export default {
  authWithTwitch,
  streams,
};

/*
'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=2x0dk3sed92a81e9n59256brysmdor&redirect_uri=http://localhost&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671'
*/
