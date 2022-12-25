import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { useRef } from "react";

const containerStyle = {
  width: " 90%",
  height: "430px",
  display: "block",
  margin: "0 auto",
};

const center = {
  lat: 40.585,
  lng: 49.5959,
};

function GoogleMaps(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtgCIWLSEqC3E_zhp7P2hxMeeqJ8ROhI8",
  });

  const [map, setMap] = React.useState(null);

  const circleRef = useRef();
  const mapRef = useRef();
  const loadHandler = (map) => {
    mapRef.current = map;
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={loadHandler}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
        <Circle
          ref={circleRef}
          center={center}
          radius={1000}
          options={{ fillColor: "#EE80AE33", strokeColor: "#EE80AE66" }}
          draggable={true}
        />
      </>
    </GoogleMap>
  ) : (
    <>{map}</>
  );
}

export default React.memo(GoogleMaps);
