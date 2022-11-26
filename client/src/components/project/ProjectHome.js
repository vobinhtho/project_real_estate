import { Grid, Paper, TextField,Button, Card, CardMedia, CardContent, Typography, TablePagination, CardActionArea } from "@material-ui/core";
import moment from "moment";
import React,{useState} from "react";
import { BsStar } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from './stylesNew';

const ProjectHome = ()=>{

    const classes = useStyles();

    const project = useSelector((state) => state.project);

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


    return(
        <div className={classes.contentProject}>
        <Grid container spacing={5}>

        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
            <TextField fullWidth label="Search" variant="outlined" name="search" 
            onChange={handleSearch}/> 
        </Grid>
        <Grid item xs={4}>
            <Button variant='contained' onClick={handleSearch} color="primary" size='large' className={classes.btns}>Search</Button>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} className={classes.titleChiMuc}>
        <BsStar/> Dự án bất động sản nổi bật
        </Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
        
        <Grid container spacing={5} className={classes.containerTinTuc}>

        {project.filter(item=>{
          return Object.keys(item).some(key=>{
            return item[key].toString().toLowerCase().includes(search.toLowerCase());
          })
        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
          return(
            <Grid item xs={8} sm={6} md={3} key={item._id} className={classes.itemTinTuc}>
            <Card>
            <Link className={classes.linkHome} to={"/projecthomeitem/"+item._id}>
            <CardActionArea>
                <CardMedia
                className={classes.cover}
                image={item.images}
                title={item.image_decription}
                />
               
                <CardContent>
                <Typography className={classes.titleNew} color="primary">
                   {item.name_project}
                  </Typography>
                  <Typography className={classes.titleNew1}>
                  <IoLocation/>  {item.address_project}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                  <IoIosPeople/> {item.investor}
                  </Typography>
                  <Typography className={classes.titleNew} color="primary">
                  <FcMoneyTransfer/> {item.investment_capital}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                   Ngày bắt đầu dự án: {moment(item.date_start).format('DD-MM-YYYY')}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                    {item.abstract}
                  </Typography>
                </CardContent>
            </CardActionArea>
            </Link>            
            </Card>        
            {/*<Card>
            <CardMedia
                className={classes.cover}
                image={item.images}
                title={item.image_decription}
              />
              <div className={classes.details}>
              <CardActionArea>
                <CardContent className={classes.content}>
                  <Typography className={classes.titleNew} color="primary">
                   {item.name_project}
                  </Typography>
                  <Typography className={classes.titleNew1}>
                  <IoLocation/>  {item.address_project}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                  <IoIosPeople/> {item.investor}
                  </Typography>
                  <Typography className={classes.titleNew} color="primary">
                  <FcMoneyTransfer/> {item.investment_capital}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                   Ngày bắt đầu dự án: {moment(item.date_start).format('DD-MM-YYYY')}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                    {item.abstract}
                  </Typography>
                </CardContent>
                </CardActionArea>
              </div>

            </Card>*/}
            </Grid>);
          } 
        )}
        

        <Grid item xs={12}>
          <TablePagination
            rowsPerPageOptions={[8, 10, 20]}
            component="div"
            count={project.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Grid>

        </Grid>
    </Grid>
        <Grid item xs={1}></Grid>

        </Grid>
        </div>
    )
}
export default ProjectHome;