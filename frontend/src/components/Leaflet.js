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

    //convert coordinates
    function convertCoordinates(array){
        return array.map(innerCoordinates => {
            return innerCoordinates.map(subCoordinates => {
                return [subCoordinates [1], subCoordinates [0]];
            })
        })
    }


    return (
        <MapContainer center={center} zoom={zoom} style={{height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                plots && plots.map((plot) => (
                    <Polygon key={plot._id} positions={convertCoordinates(plot.geometry.coordinates)} fillOpacity={0.9}  pathOptions={{color: `${renderColor(plot.properties.Plot_Status)}`}}>
                        <PlotInner coord={convertCoordinates(plot.geometry.coordinates)} plot_number={parseInt(plot.properties.Plot_Number)} />   
                        <Popup style={{width: '100%'}}>
                            <h4>Plot Details</h4>
                            <p>{`${plot.properties?.Plot_Detail}`}</p>
                            <div style={{padding: '15px'}}>
                                <button onClick={() => handleGetPlotName(plot._id)} className='btn btn-yellow'>
                                    PURCHASE
                                </button> <br />
                                {
                                    // user && (
                                    //     <Link to={`/edit/${plot._id}`} className='btn btn-yellow mt-3'>
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
                plots && plots.map((plot) => (
                     <Polyline weight={2} color='white' positions={convertCoordinates(plot.geometry.coordinates)} />
                ))
            }

        </MapContainer>
    )
}

export default Leaflet