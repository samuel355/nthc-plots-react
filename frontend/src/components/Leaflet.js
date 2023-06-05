import React, { useEffect} from 'react'
import { MapContainer, TileLayer, Popup, Polygon, Polyline, } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getPlots, getPlotName } from '../redux/features/PlotSlice';
import PlotInner from './PlotInner';

const Leaflet = () => {
    const dispatch = useDispatch()
    const {plots} = useSelector((state) => ({...state.plot}))

    const center = [6.7588644098723805, -1.4987540245056152]
    const zoom = 17

    useEffect(() => {
        dispatch(getPlots())
    }, [dispatch])

    const handleGetPlotName = (name) => {
        dispatch(getPlotName(name))

        const position = document.getElementById('message-form')
        position.scrollIntoView({ behavior: 'smooth' });
    }

    const renderColor= (status) => {
        if(status === 'AVAILABLE'){
            return 'green'
        }
        if(status === 'SOLD'){
            return'red'
        }
        if(status === 'RESERVED'){
            return 'black'
        }
    }
    const coordinates = [
        {
            "type":"Feature",
            "geometry":{
                "type":"Polygon",
                "coordinates":[[[647997.207211314,737055.4880713167],[648003.3614507148,737050.1192358844],[648013.7290850013,737052.5657813088],[648028.8056894339,737089.2422215334],[648028.3228023611,737091.2886899993],[648015.2034646983,737076.1939906068],[647997.207211314,737055.4880713167]]]
            },
            "properties":{
                "ObjectID":1,"Plot_number":"33","Plot_Status":"AVAILABLE","Size":"4314.92 SQ FT","Plot_Detail":"Plot No 33, Republic Street"
            }
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Polygon",
                "coordinates":[[[647996.8278215041,737092.2243986643],[648015.2034646983,737076.1939906068],[648028.3228023611,737091.2886899993],[648025.391556917,737103.7115528864],[648014.8240706918,737112.9303215332],[647996.8278215041,737092.2243986643]]]
            },
            "properties":{"ObjectID":2,"Plot_number":"30","Plot_Status":"AVAILABLE","Size":"6778.804 SQ FT","Plot_Detail":"Plot No 30, Independence Street"}
        },
        {
            "type":"Feature",
            "geometry":{
                "type":"Polygon",
                "coordinates":[[[647978.4520481438,737108.2548959921],[647996.8278215041,737092.2243986643],[648014.8240706918,737112.9303215332],[647996.4483681952,737128.9608000584],[647978.4520481438,737108.2548959921]]]
            },
            "properties":{"ObjectID":3,"Plot_number":"28","Plot_Status":"AVAILABLE","Size":"7189.915 SQ FT","Plot_Detail":"Plot No 28, Independence Street"}
        },
    ]

    //console.log(plots[0].geometry)
    return (
        <MapContainer center={center} zoom={zoom} style={{height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                plots && plots.map((plot) => (
                    <Polygon key={plot._id} positions={plot.geometry.coordinates} fillOpacity={0.9}  pathOptions={{color: `${renderColor(plot.properties.Plot_Status)}`}}>
                        <PlotInner coord={plot.geometry.coordinates} plot_number={plot.properties.Plot_number} />   
                        <Popup style={{width: '100%'}}>
                            <p>{`Plot Number: ${plot.properties?.Plot_number} ${plot.properties?.Plot_number}`}</p>
                            <div style={{padding: '15px'}}>
                                <button onClick={() => handleGetPlotName(plot._id)} className='btn fancy-btn fancy-dark bg-transparent'>
                                    BUY OR RESERVE
                                </button> <br />
                                {
                                    // user && (
                                    //     <Link to={`/edit/${plot._id}`} className='btn fancy-btn fancy-dark bg-transparent mt-3'>
                                    //         Edit Plot
                                    //     </Link>
                                    // )
                                }
                            </div>
                        </Popup>
                    </Polygon>
                ))
            }

            {
                plots?.length > 0  && (
                    <Polyline weight={5} color='white' positions={plots[0]?.geometry?.coordinates} />
                )
            }

        </MapContainer>
    )
}

export default Leaflet