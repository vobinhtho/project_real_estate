import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import img from '../img/img1.jpg'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const useStyles = makeStyles({
    TitleNew: {
      fontWeight:500,
      fontSize:45,
      paddingTop:60,
    },
    contentNew:{
        marginBottom:100, backgroundColor:'white',marginTop:12
    },
    date:{
        color:'grey'
    },
    NewNoidung:{
        backgroundColor:'white',marginTop:12
    },
    RealinNew:{
        paddingTop:70,
    },
    titleNew:{
        fontSize:22
    },
    marginIn:{
        marginTop:70,
        marginBottom:100
    },
    
  });
const NewHomeItem = ()=>{
    const classes = useStyles();
    const realEstate = useSelector((state)=>state.realestate);
    const tintucs = useSelector((state) => state.tintucs);
    const project = useSelector(state=>state.project)
    const { id } = useParams();
    const tintucsId = useSelector(state=>state.tintucs.filter(u=>u._id === id))

    return(
        <div className={classes.NewNoidung}>
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
                <Grid item xs={6} className={classes.contentNew}>
                    {tintucsId.map(item=>(
                        <div>
                        <Typography gutterBottom className={classes.TitleNew}>
                            {item.title}
                        </Typography>
                        <Typography gutterBottom className={classes.date}>
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                        </Typography>
                        <Typography gutterBottom><b>{item.abstract}</b></Typography>
                        <Typography gutterBottom className={classes.content}>{ReactHtmlParser(item.content)}</Typography>
                        <br/>
                        <Typography gutterBottom><b>{item.creator}</b></Typography>
                        </div>
                    ))}
                </Grid>

                <Grid item xs={2} className={classes.marginIn}>
                <Card>              
                <CardContent>          
                    <Typography gutterBottom className={classes.titleTen}>
                        Dự án bất động sản
                    </Typography>
                    <hr/>
                    {
                        project.slice(0, 10).map(item=>(
                            <Typography gutterBottom className={classes.titleDiachi2}>
                                {item.name_project}
                            </Typography>
                        ))
                    }   
                </CardContent>
              </Card>
              <br/>
              <Card>              
              <CardContent>          
                  <Typography gutterBottom className={classes.titleTen}>
                      Tin tức bất động sản
                  </Typography>
                  <hr/>
                  {
                      tintucs.slice(0, 10).map(item=>(
                          <Typography gutterBottom className={classes.titleDiachi2}>
                              {item.title}
                          </Typography>
                      ))
                  }   
              </CardContent>
            </Card>
              <br/>      
                <Card>              
                <CardContent>          
                    <Typography gutterBottom className={classes.titleTen}>
                    Bất động sản
                    </Typography>
                    <hr/>
                    {
                        realEstate.slice(0, 10).map(item=>(
                            <Typography gutterBottom className={classes.titleDiachi2}>
                                {item.real_estate_title}
                            </Typography>
                        ))
                    }   
                </CardContent>
              </Card>

             
              
  
                </Grid>
                
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
}
export default NewHomeItem;