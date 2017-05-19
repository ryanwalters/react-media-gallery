
import 'britannica-styleguide/src/grid/_grid.scss';
import 'britannica-styleguide/src/layout/_layout.scss';
import './MediaGallery.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const setDisplay = (value) => ({ display: value ? '' : 'none' });

class MediaGallery extends Component {

    render() {

        return (
            <div className="eb-gallery grid no-gutter" style={this.props.style}>
                <div className="grid-xs">
                    <div className="eb-gallery-container grid no-gutter" data-layout="column">
                        <div className="eb-gallery-media grid-xs middle-xs center-xs">
                            <img src="http://placehold.it/1600x900/555555/ffffff"/>
                        </div>
                        <div className="eb-gallery-description grid-xs-shrink">
                        </div>
                        <div className="eb-gallery-slides grid-xs-shrink">
                        </div>
                    </div>
                </div>
                <div className="grid-xs-shrink">
                    <div className="eb-gallery-ads middle-xs" style={setDisplay(this.props.ad)}>
                        <img src="http://placehold.it/300x250"/>
                    </div>
                </div>
                <div className="eb-gallery-controls">
                    <div className="eb-gallery-close" onClick={this.props.onClose} style={setDisplay(this.props.onClose)}>
                        &times;
                    </div>
                </div>
            </div>
        );
    }
}

MediaGallery.propTypes = {
    ad: PropTypes.object,
    onClose: PropTypes.func
};

MediaGallery.defaultProps = {
    ad: null,
    onClose: null
};

export default MediaGallery;
