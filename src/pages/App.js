import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import Cover from './Cover';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar'
        };
        ReactGA.initialize('UA-110570651-1');
    }

    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link rel="shortcut icon" href="./../statics/favicon.ico" />
                    <link rel="manifest" href="./../statics/manifest.json" />
                </Helmet>
                <Cover />
            </div>
        );
    }
}

export default App;