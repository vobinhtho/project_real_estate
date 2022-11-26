import { CardActionArea, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from './stylesNew';
import moment from 'moment'
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker,useMapEvents,Popup } from 'react-leaflet'
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
};
const ProjectHomeItem = ()=>{
    const classes = useStyles();
    const projects = useSelector((state)=>state.project);

    const { id } = useParams();

    const project = useSelector(state=>state.project.filter(u=>u._id === id))
    console.log(project)

    return(
        <div className={classes.containProjectItem}>
        {project.map(item=>(
            <div>
            <Grid container spacing={5}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Typography gutterBottom className={classes.titleProject}>
                {item.name_project}
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={5}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Grid container spacing={3}>
                    <Grid item xs={2}><b>Nhà đầu tư:</b></Grid>
                    <Grid item xs={10}>{item.investor}</Grid>
                    <Grid item xs={2}><b>Địa chỉ:</b></Grid>
                    <Grid item xs={10}>{item.address_project}</Grid>
                    <Grid item xs={2}><b>Ngày bắt đầu:</b></Grid>
                    <Grid item xs={10}> {moment(item.date_start).format('DD/MM/YYYY')}</Grid>

                    <Grid item xs={2}><b>Tổng diện tích:</b></Grid>
                    <Grid item xs={4}>{item.area}</Grid>
                    <Grid item xs={2}><b>Vốn đầu tư:</b></Grid>
                    <Grid item xs={4}>{item.investment_capital}</Grid>

                   
                    
                    <Grid item xs={12}><b>Tổng quan dự án</b></Grid>
                    <Grid item xs={12}>
                    <img src={item.images} height='600' width='100%' />
                    </Grid>
                    <Grid item xs={12}> 
                        {ReactHtmlParser(item.description_project)}
                    </Grid>
                    
                    <Grid item xs={12}> <b>Vị trí của dự án trên bản đồ:</b></Grid>
                    <Grid item xs={12}>
                    <Paper className={classes.paperMap}>
                    <MapContainer center={{ lat: 10.026351755320325, lng: 105.76418581610247 }}
                    zoom={10}
                    style={{ height: "420px", width: "auto" }}
                    scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={customMarker} position={{ lat: item.posLat, lng:item.posLng }}>
                            <Popup>
                                {item.name_project}
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000}>
                        {projects.map(item=>(
                            <Link className={classes.linkHome} to={"/projecthomeitem/"+item._id}>
                            <CardActionArea>
                            <CardMedia className={classes.cardListImg} image={item.images}
                            title={item.name_project} />
                            <br/>
                            <Typography className={classes.bodyCard1} gutterBottom>
                            {item.name_project}
                            </Typography>
                            </CardActionArea>
                            </Link>
                        ))}

                        </Carousel>
                    </Grid>

                </Grid>
                
            </Grid>
            
        </Grid>
            </div>
        ))}
        </div>
    )
}
export default ProjectHomeItem;