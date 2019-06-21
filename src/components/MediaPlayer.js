import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class MediaPlayer extends Component {
    render() {
        return <ReactPlayer
            width='0%'
            height='0%'
            // https://audio.jukehost.co.uk/ for audio hosting
            url='https://audio.jukehost.co.uk/c5ca2c9406eabf0cc707240dc2296c1ecbe329b6/bd96bbca80e' playing />
    }
}

export default MediaPlayer;