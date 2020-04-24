import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN!
})

type Props = {
  lat: string
  long: string
}
const Mapa: React.FC<Props> = ({ lat, long }) => (
  <Map
    // eslint-disable-next-line react/style-prop-object
    style="mapbox://styles/sampaioleal/ck3to6z8w006c1cpgtxme2z23"
    center={[parseFloat(lat), parseFloat(long)]}
    containerStyle={{
      height: 210,
      width: '90%',
      borderRadius: 15,
      marginTop: 10,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }}
  ></Map>
)
// TODO: add marker
export default Mapa
