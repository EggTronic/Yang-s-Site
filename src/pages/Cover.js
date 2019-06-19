import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../css/myStyle/Cover.css';
//import '../js/hackRain';

export class Cover extends Component {
    componentDidMount() {
        const c = this.refs.c;
        const ctx = this.refs.c.getContext("2d");
        //making the canvas half screen

        c.height = window.innerHeight;
        c.width = window.innerWidth / 2;

        let eggtronic = 'EggTronicYangEggTronicXu';

        eggtronic = eggtronic.split("");

        let font_size = 10;
        let columns = c.width / font_size; //number of columns for rain

        //an array of drops - one for column

        let drops = [];

        //x below is the x coordinate
        //1 - y co-cordinate of the drop - same for every drop initially

        for (let x = 0; x < columns; x++)
            drops[x] = 1;
        console.log(1);
        //drawing the characters

        function draw() {
            //black BG for canvas
            //translucent BG to show trail

            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "#0f0";
            ctx.font = font_size + "px arial";

            //looping over drops

            for (let i = 0; i < drops.length; i++) {
                let text = eggtronic[Math.floor(Math.random() * eggtronic.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++
            }
        }
        setInterval(draw, 33);
    }

    render() {
        return (
            <div className='cover'>

                <div className='left'>
                    <h1 className="text">Producer</h1>
                    <Link className='link' to={'/Producer'}><button className='btn'></button></Link>
                </div>
                <div className='right'>
                    <canvas ref="c" ></canvas>
                    <h1 className="text">Software Developer</h1>
                    <Link className='link' to={'/Developer'}><button className='btn'></button></Link>
                </div>
            </div>
        )
    }
}

export default Cover
