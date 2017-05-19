
import 'britannica-styleguide/src/grid/_grid.scss';
import 'britannica-styleguide/src/layout/_layout.scss';
import './MediaGallery.scss';

import React, { Component } from 'react';

class MediaGallery extends Component {

    render() {

        return (
            <div className="eb-gallery grid no-gutter">
                <div className="grid-xs">
                    <div className="eb-gallery-container grid no-gutter" data-layout="column" style={{backgroundColor: '#222'}}>
                        <div className="eb-gallery-media grid-xs middle-xs center-xs">
                            <img src="http://placehold.it/1600x900/555555/ffffff"/>
                        </div>
                        <div className="eb-gallery-description grid-xs-shrink" style={{backgroundColor: '#333', minHeight: '200px'}}>
                        </div>
                        <div className="eb-gallery-slides grid-xs-shrink" style={{backgroundColor: '#444', minHeight: '100px'}}>
                        </div>
                    </div>
                </div>
                <div className="grid-xs-shrink">
                    <div className="eb-gallery-ads middle-xs" style={{display: 'none'}}>
                        <img src="http://placehold.it/160x600"/>
                    </div>
                </div>
                <div className="eb-gallery-controls">
                </div>
            </div>
        )
    }
}

export default MediaGallery;
