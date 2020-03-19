import React from 'react';
import styled from '@emotion/styled';
import Autocomplete from 'react-autocomplete';
import {usersEndpoint, options} from '../lib/api';
import {config} from '../config';
function ChannelForm() {
  const [newChannel, setNewChannel] = React.useState('');
  const [channels, setChannels] = React.useState([]);
  React.useEffect(() => {
    handleTwitchSearch('tiny').then((res) => {
      console.log(res);
    });
  }, []);
  const handleTwitchSearch = async (channel) => {
    try {
      const request = await fetch(
        `${usersEndpoint}?login=${channel}`,
        config.options,
      );
      const response = await request.json();
      console.log({response});
      setChannels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <label htmlFor="channels-autocomplete">Search for a Twitch Channel</label>
      <Autocomplete
        inputProps={{id: 'channels-autocomplete'}}
        items={channels}
      />
      <pre>{JSON.stringify(newChannel, 2, null)}</pre>
    </React.Fragment>
  );
}

export default ChannelForm;
