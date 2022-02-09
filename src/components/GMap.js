import React from "react";
import GoogleMap from 'google-map-react';

class GMap extends React.Component{

    
    render(){
        let lt = this.props.latitude;
        let lon = this.props.longitude;
        
        let sett = {
            center: {
                lat: lt,
                lng: lon,
            },
            zoom:11,
        };
        console.log(sett.center);
        return(
            <div>
                <GoogleMap
                    
                    center={sett.center}
                    zoom={sett.zoom}
                />
            </div>
        );
    }
}

export default GMap;