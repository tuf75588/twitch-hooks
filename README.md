# Twitch.tv monitor

A simple React app that allows for viewing a streamers status on Twitch (aka live or not)

## TODO

- [x] create array of default streams to render on first render
- [x] establish connection with Twitch
- [x] make async call to twitch for stream information, need to determine if broadcaster is live or not
- [x] work on auto-complete component for searching for a channel not listed


## Stretch TODOS

- [ ] store new streamers added in localStorage so they persist after browser refresh
- [ ] cache the original showcase streamers for better optimization
- [ ] add some more intuitive CSS to show if a streamer is live
- [ ] if a streamer is live, show what they are streaming and how many viewers