
import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React,{useEffect} from 'react';
import useStyles from './styles'
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker,useMapEvents,Popup } from 'react-leaflet'
import img from '../img/img2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getRealEstates } from '../../store/actions/realEstateAction';
import { Link } from 'react-router-dom';

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

const Real_Estate_Map = () =>{
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRealEstates());
       }, [dispatch]);
       
    const realEstate = useSelector((state)=>state.realestate);
    console.log(realEstate);


    return(
        <div>
        <Grid container>
            <Grid item xs={12} sm={2} className={classes.list_map}>
                {realEstate.map( re => (
                    <div className={classes.card_item}>
                    <Link className={classes.linkHome} to={"/homeitem/"+re._id}>
                    <CardContent>      
                    <Typography className={classes.title_item_map} gutterBottom variant="h6" component="h2">
                            {re.real_estate_title}
                    </Typography>
                    <div><span className={classes.text_item_content}>Diện tích</span> {re.area} </div>
                    <div><span className={classes.text_item_content}>Giá tiền:</span> {re.price.price_number} {re.price.unit_price} </div>
                    <div><span className={classes.text_item_content}>Địa chỉ:</span> {re.address.ward}, {re.address.district}, {re.address.province} </div>
                    <hr/>
                    </CardContent>
                    </Link>
                    </div>
    
                ))}
            </Grid>
            <Grid item xs={12} sm={10} className={classes.list_map}>
                
            <MapContainer center={{ lat: 10.026351755320325, lng: 105.76418581610247 }}
            zoom={10}
            style={{ height: "900px", width: "auto" }}
            scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {realEstate.map((item)=>
                    <Marker icon={customMarker} position={{ lat: item.location.lat, lng: item.location.lng }}>
                    <Popup>
                    <div className={classes.card_map}>
                    {item.image_realestate.map(hinh=>(<img src={hinh[0]} className={classes.item_map}/>))}
                    <Link className={classes.linkHome} to={"/homeitem/"+item._id}>
                    <CardContent>      
                    <Typography className={classes.title_item_map} gutterBottom variant="h6" component="h2">
                                {item.real_estate_title}
                    </Typography>
                    <div><span className={classes.text_item_content}>Diện tích:</span> {item.area} </div>
                    <div><span className={classes.text_item_content}>Giá tiền:</span> {item.price.price_number} {item.price.unit_price} </div>
                    <div><span className={classes.text_item_content}>Địa chỉ:</span> {item.address.street} {item.address.ward}, {item.address.district}, {item.address.province} </div>
                    </CardContent>
                    </Link>
                    </div>
                    </Popup>
                </Marker>   
                )}
                </MapContainer>

            </Grid>
        </Grid>

        </div>
        
    );
}
export default Real_Estate_Map;