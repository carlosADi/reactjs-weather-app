import React from "react";
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

function Map() {
    let lt = this.props.latitude;
    let lon = this.props.longitude;
    
    let sett = {
        center: {
            lat: lt,
            lng: lon,
        },
        zoom:11,
    };
    return(
            <GoogleMap
                center={sett.center}
                zoom={sett.zoom}
            />
        
    );
}

class SimpleMap extends React.Component{

    
    render(){
        const WrappedMap = withScriptjs(withGoogleMap(Map));
        return(
            <div>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap`}/>
            </div>
        );
    }
}

export default SimpleMap;
