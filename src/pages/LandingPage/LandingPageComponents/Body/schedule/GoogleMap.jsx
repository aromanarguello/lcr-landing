import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'

class GoogleMaps extends Component {

    componentDidMount() {
        new window.google.maps.Map(this.refs.map, {
            zoom: 12, 
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return <div ref="map" />;
    }
}

export default GoogleMaps;