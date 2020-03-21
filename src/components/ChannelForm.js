/** @jsx jsx */
import React from 'react';
import Autocomplete from 'react-autocomplete';
import {config} from '../config';
import {jsx, css} from '@emotion/core';
function ChannelForm() {
  // for the input
  const [channelInput, setChannelInput] = React.useState('');
  // for the API
  const [channels, setChannels] = React.useState([]);

  const [selectedChannel, setSelectedChannel] = React.useState('');
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
    <div
      css={css`
        margin-bottom: 5em;
        margin-top: 0;
        margin-right: auto;
        margin-left: auto;
        z-index: 1;
        position: relative;
        text-align: center;
        border: 0.5px solid rgba(255, 255, 255, 0.09);
        width: 50%;
        padding-bottom: 10px;
        label {
          padding-right: 10px;
          color: #f2f2f2;
          font-size: 2rem;
        }
        input {
          padding: 10px;
          border-radius: 5px;
        }
      `}
    >
      <label htmlFor="channels-autocomplete">Search for a Twitch Channel</label>
      <Autocomplete
        getItemValue={(item) => item.display_name}
        items={channels}
        onChange={(e) => setChannelInput(e.target.value)}
        value={channelInput}
        renderItem={(item, isHighlighted, style) => (
          <div
            style={{
              background: isHighlighted ? 'lightgray' : 'white',
              cursor: 'pointer',
            }}
          >
            {item.display_name}
          </div>
        )}
        onSelect={(value) => setSelectedChannel(value)}
      />
      <p>{selectedChannel}</p>
    </div>
  );
}

export default ChannelForm;
