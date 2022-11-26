import { Button, Card, CardContent, CardMedia, Grid, makeStyles, TablePagination, TextField, Typography } from "@material-ui/core";
import moment from "moment";
import React,{useState} from "react";
import { BsStar } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    button: {
      margin: 5,
    },
    itemTinTuc:{
      marginBottom:10
    },
    btnsearch:{
      marginTop:9,marginBottom:30
    },
    containerTinTuc:{
      paddingRight:30,
      marginTop:20
    },
    iconAdd:{
      color:'#3f51b5',
      height:50,width:50,
      paddingLeft:10,
      paddingTop:10
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    root: {
      display: 'flex',
    },
    cover: {
      width: 240,
      minWidth:220,
      minHeight:200,
      height:200
    },
    content_abstract:{
      fontSize:16
    },
    date_tintuc:{
      fontSize:16,
      color:'grey',
      marginBottom:5
    },
    titleNew: {
      fontSize:20,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical"
    },
    tomtatNew: {
      fontSize:17,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical"
    },
    button_tintuc:{
      marginTop:-15
    },
    containerTinTuc:{
        backgroundColor:'white',
        marginTop:1,
        paddingBottom:80,
        marginBottom:10,
        paddingTop:50
    },
    contentTintuc:{
        
        paddingLeft:150
    },
    titleChiMuc:{
      fontSize:25, color:'#ac7b40', textTransform:'uppercase'
  },
   
  linkHome:{
    textDecoration:'none',
    color:'#666666'
  },
    
  });
const NewHome = ()=>{
    const [search, setSearch] = useState("");
    const handleSearch=(e)=>{
       console.log(e.target.value);
       setSearch(e.target.value);
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const tintucs = useSelector((state) => state.tintucs);
    const project = useSelector(state=>state.project)
    const classes =useStyles();
    return(
        <div className={classes.containerTinTuc}>
        <Grid container spacing={3}>
          <Grid item xs={9}>  
          <Grid container spacing={3} className={classes.contentTintuc}>
          <Grid item xs={4}>
          </Grid>
  
          <Grid item xs={6}>
             <TextField fullWidth label="Search" variant="outlined" name="search" 
              onChange={handleSearch} value={search}/> 
          </Grid>
          <Grid item xs={2} fullWidth className={classes.btnsearch}>
            <Button variant='contained' color="primary">Search</Button>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} className={classes.titleChiMuc}>
              <BsStar/> Tin tức bất động sản
            </Grid>
          </Grid>
        
          {tintucs.filter(item=>{
            return Object.keys(item).some(key=>{
              return item[key].toString().toLowerCase().includes(search.toLowerCase());
            })
          })
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
            return(
              <Grid item xs={12} sm={6} key={item._id} className={classes.itemTinTuc}>
            
              <Link className={classes.linkHome} to={"/tintuchomeitem/"+item._id}>
              <Card className={classes.root}>
              <CardMedia
                  className={classes.cover}
                  image={item.cover}
                  title={item.image_decription}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.titleNew} color="primary">
                      {item.title}
                    </Typography>
                    <Typography className={classes.date_tintuc}>
                      {moment(item.createdAt).format('DD-MM-YYYY, h:mm:ss a')}
                    </Typography>
                    <Typography className={classes.tomtatNew}>
                      {item.abstract}
                    </Typography>
                    <Typography className={classes.tomtatNew}>
                    <b>Tác giả:</b> {item.creator}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
              </Link>
              </Grid>);
            } 
          )}
          
  
          <Grid item xs={12}>
            <TablePagination
              rowsPerPageOptions={[8, 10, 20]}
              component="div"
              count={tintucs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              />
          </Grid>
  
      </Grid>
          </Grid>
          <Grid item xs={2}>
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
                            tintucs.slice(0,5).map(item=>(
                                <Typography gutterBottom className={classes.titleDiachi2}>
                                {item.title}
                                </Typography>
                            ))
                        }
                        
        
                    </CardContent>
                </Card>
          </Grid>
        </Grid>
        {/*
        <Grid container spacing={3} className={classes.contentTintuc}>
        <Grid item xs={4}>
        </Grid>

        <Grid item xs={6}>
           <TextField fullWidth label="Search" variant="outlined" name="search" 
            onChange={handleSearch} value={search}/> 
        </Grid>
        <Grid item xs={2} fullWidth className={classes.btnsearch}>
          <Button variant='contained' color="primary">Search</Button>
        </Grid>
      
        {tintucs.filter(item=>{
          return Object.keys(item).some(key=>{
            return item[key].toString().toLowerCase().includes(search.toLowerCase());
          })
        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
          return(
            <Grid item xs={12} sm={4} key={item._id} className={classes.itemTinTuc}>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={item.cover}
                title={item.image_decription}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.titleNew} color="primary">
                    {item.title}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                    {moment(item.createdAt).format('DD-MM-YYYY, h:mm:ss a')}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                    {item.abstract}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                  <b>Tác giả:</b> {item.creator}
                  </Typography>
                </CardContent>
              </div>

            </Card>
            </Grid>);
          } 
        )}
        

        <Grid item xs={12}>
          <TablePagination
            rowsPerPageOptions={[6, 10, 20]}
            component="div"
            count={tintucs.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Grid>

    </Grid>*/}
        </div>
    )
}
export default NewHome;