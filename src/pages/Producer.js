import React, { Component } from 'react';
import MediaPlayer from '../components/MediaPlayer';
import ParticlesWrapper from '../components/Particles';
import { Header, Footer } from '../components/Producer/index.js';
import '../css/myStyle/producer.css';

export class Producer extends Component {
    render() {
        return (
            <div className='producer'>
                <div className='background'>
                    <ParticlesWrapper />
                </div>
                <MediaPlayer />
                <div className='intro'>
                    <div className='grid-1'>

                    </div>
                    <div className='grid-2'>

                    </div>
                    <div className='grid-3'>

                    </div>
                    <div className='grid-4'>

                    </div>
                    <div className='grid-5'>
                        <h1>Welcome EggTronic's Music Center</h1>
                    </div>
                    <div className='grid-6'>

                    </div>
                    <div className='grid-7'>

                    </div>
                    <div className='grid-8'>

                    </div>
                    <div className='grid-9'>

                    </div>

                </div>
            </div>
        )
    }
}

export default Producer
