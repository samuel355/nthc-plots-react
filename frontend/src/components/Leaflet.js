import React, { useEffect} from 'react'
import { MapContainer, TileLayer, Popup, Polygon, Polyline, Pane, Rectangle, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getPlots, getPlotName } from '../redux/features/PlotSlice';
import PlotInner from './PlotInner';
import L from 'leaflet'
import RoadInner from './RoadInner';
import roads from '../Roads_Project'

const Leaflet = () => {
    const dispatch = useDispatch()
    const {plots} = useSelector((state) => ({...state.plot}))
    const {user} = useSelector((state) => ({...state.user}))

    const center = [6.667371, -1.662522]
    const zoom = 17.5

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

    //convert polygon coordinates
    function convertCoordinates(array){
        return array.map(innerCoordinates => {
            return innerCoordinates.map(subCoordinates => {
                return [subCoordinates [1], subCoordinates [0]];
            })
        })
    }

    //convert roads coordinates
    function roadsCoordinates(array){
        return array.map(innerCoordinates => {
            return [innerCoordinates [1], innerCoordinates [0]];
        })  
    }

    return (
        <MapContainer center={center} zoom={zoom} style={{height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                roads.map((road) => (
                    <Polyline pathOptions={{ color: 'gray', weight: 12, lineCap: 'round'}} positions={roadsCoordinates(road.geometry.coordinates)}>
                        <RoadInner coord={roadsCoordinates(road.geometry.coordinates)} details=""  />
                    </Polyline>
                ))
            }
            

            {
                plots && plots.map((plot) => (
                    <Polygon key={plot._id} positions={convertCoordinates(plot.geometry.coordinates)} fillOpacity={0.9}  pathOptions={{color: `${renderColor(plot.properties.Plot_Status)}`}}>
                        <PlotInner coord={convertCoordinates(plot.geometry.coordinates)} plot_number={parseInt(plot.properties.Plot_Number)} />   
                        <Popup style={{width: '100%'}}>
                            <h6>Plot Details - <span style={{color: `${renderColor(plot.properties.Plot_Status)}`, fontSize: 12, fontWeight: 700}}>{plot.properties.Plot_Status}</span></h6> <hr />
                            <p style={{fontSize: 15, fontWeight: 500}}>{`${plot.properties?.Plot_Detail}`}</p>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Link style={{backgroundColor: 'orange', color: 'white', padding: 5, }} onClick={() => handleGetPlotName(plot._id)}>
                                    PURCHASE
                                </Link> 
                                {
                                    user && (
                                        <Link to={`/edit/${plot._id}`} style={{backgroundColor: 'orange', color: 'white', padding: 5}} >
                                        EDIT PLOT
                                    </Link>
                                    )
                                }
                            </div>
                        </Popup>
                    </Polygon>
                ))
            }

            {
                plots && plots.map((plot) => (
                     <Polyline weight={2} color='white' positions={convertCoordinates(plot.geometry.coordinates)} />
                ))
            }

        </MapContainer>
    )
}

export default Leaflet