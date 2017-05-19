import React, { Component } from 'react'
import {render} from 'react-dom'

import MediaGallery from '../../src/MediaGallery'

class Demo extends Component {

    constructor() {

        super();

        this.state = {
            visible: true
        };

        this.openGallery = this.openGallery.bind(this);
        this.closeGallery = this.closeGallery.bind(this);
    }

    render() {

        return (
            <div>
                <h1>react-media-gallery Demo</h1>
                <button onClick={this.openGallery}>Open Gallery</button>
                <MediaGallery
                    style={{display: this.state.visible ? '' : 'none'}}
                    onClose={this.closeGallery}
                />
            </div>
        );
    }

    openGallery() {

        this.setState({
            visible: true
        });
    }

    closeGallery() {

        this.setState({
            visible: false
        });
    }
}

render(<Demo/>, document.querySelector('#demo'));
