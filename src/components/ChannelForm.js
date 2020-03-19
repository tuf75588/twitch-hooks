import React from 'react';
import Autocomplete from 'react-autocomplete';
import {config} from '../config';

function ChannelForm() {
  // for the input
  const [channelInput, setChannelInput] = React.useState('');
  // for the API
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    handleChannelSearch(channelInput).then((ch) => {
      setChannels(ch);
    });
  }, [channelInput]);

  const handleChannelSearch = async (login) => {
    const request = await fetch(
      `https://api.twitch.tv/kraken/search/channels?query=${login}&limit=40`,
      {
        headers: {
          'client-id': config.krakenID,
          accept: 'application/vnd.twitchtv.v5+json',
        },
      },
    );
    const response = await request.json();
    return response.channels || [];
  };
  return (
    <React.Fragment>
      <label htmlFor="channels-autocomplete">Search for a Twitch Channel</label>
      <Autocomplete
        getItemValue={(item) => item.display_name}
        items={channels}
        onChange={(e) => setChannelInput(e.target.value)}
        value={channelInput}
        renderItem={(item, isHighlighted) => (
          <div style={{background: isHighlighted ? 'lightgray' : 'white'}}>
            {item.display_name}
          </div>
        )}
      />
      <pre>{JSON.stringify(channels, null, 2)}</pre>
    </React.Fragment>
  );
}

export default ChannelForm;
