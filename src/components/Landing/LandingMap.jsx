import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'                         
import mapStyles from '../mapStyles'
import {MobileView, BrowserView} from 'react-device-detect';

class MapContainer extends Component{
state = {myMarkers: [
{latitude: 51.48075866026534, longitude:  -0.1788694502130073},   
]
}
displayMarkers = () => {                                        
    return this.state.myMarkers.map((mark, index) => {                
        return <Marker id={index}  key={`map-marker-${index}`} position={{                            
            lat: mark.latitude,                                              
            lng: mark.longitude                                                
        }} 
        icon={{
            url: '/mapMarker.png',
            anchor: new this.props.google.maps.Point(32,32),
            scaledSize: new this.props.google.maps.Size(64,64)
        }}
    onClick={() => 
        console.log("You clicked me!",{index})} />          
    })
}
render() {
return (
    <>
        <BrowserView>
            <div style={{
                position: "relative",
                width: "100vw",
                height: "80vh"}} 
                className="map">
                <Map google={this.props.google} 
                zoom={16}
                styles={mapStyles.styles}
                initialCenter={{lat: 51.48075866026534, lng: -0.1788694502130073}}
                disableDefaultUI= {true}>
                {this.displayMarkers()}</Map>
            </div>
        </BrowserView>
        <MobileView>
            <div style={{
                position: "relative",
                width: "100vw",
                height: "50vh"}} 
                className="map">
                <Map google={this.props.google} 
                zoom={16}
                styles={mapStyles.styles}
                initialCenter={{lat: 51.48075866026534, lng: -0.1788694502130073}}
                disableDefaultUI= {true}>
                {this.displayMarkers()}</Map>
            </div>
        </MobileView>
    </>
    );
}}

export default GoogleApiWrapper({
    apiKey: process.env.GATSBY_APP_GOOGLE_KEY
    })(MapContainer)