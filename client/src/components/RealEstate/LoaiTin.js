import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from './Styles'
import tin1 from '../img/Tin1.PNG'
import { FcCheckmark } from "react-icons/fc";

const LoaiTin = () =>{
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4} >
                    <Paper className={classes.tin1}>
                        <Typography className={classes.titleTin}><span className={classes.chuin}>TIN ĐẶC BIỆT</span></Typography>
                        <br/>
                        <div className={classes.giagoi}><Typography>Gói <span className={classes.chuin}>7</span> ngày với giá <span className={classes.chuin}>350.000</span>đ/tin</Typography></div>
                        <div className={classes.giagoigrey}><Typography>Gói <span className={classes.chuin}>15</span> ngày với giá <span className={classes.chuin}>750.000</span>đ/tin</Typography></div>
                        <div className={classes.giagoi}><Typography>Gói <span className={classes.chuin}>30</span> ngày với giá <span className={classes.chuin}>1.500.000</span>đ/tin</Typography></div>
                        <Typography className={classes.line}><FcCheckmark/>Giá tin: <span className={classes.chuin}>50.000</span>đ tin/ngày</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Được rất nhiều người tiếp cận nhất</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Đứng đầu danh sách tin đăng</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Tiêu đề <spanc className={classes.chuin}>chữ in màu tím</spanc></Typography>
                        <Typography className={classes.line}><FcCheckmark/>Được đăng tối đa 3 ảnh</Typography>
                        <br/>
                    </Paper>
                    </Grid>


                <Grid item xs={4}>
                    <Paper className={classes.tin1}>
                        <Typography className={classes.titleTin2}><span className={classes.chuin2}>TIN VIP</span></Typography>
                        <br/>
                        <div className={classes.giagoi2}><Typography>Gói <span className={classes.chuin2}>7</span> ngày với giá <span className={classes.chuin2}>210.000</span>đ/tin</Typography></div>
                        <div className={classes.giagoigrey}><Typography>Gói <span className={classes.chuin2}>15</span> ngày với giá <span className={classes.chuin2}>450.000</span>đ/tin</Typography></div>
                        <div className={classes.giagoi2}><Typography>Gói <span className={classes.chuin2}>30</span> ngày với giá <span className={classes.chuin2}>900.000</span>đ/tin</Typography></div>
                        <Typography className={classes.line}><FcCheckmark/>Giá tin: <span className={classes.chuin2}>30.000</span>đ tin/ngày</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Ít người tiếp cận hơn tin đặc biệt</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Đứng thứ 2 danh sách tin đăng</Typography>
                        <Typography className={classes.line}><FcCheckmark/>Tiêu đề <spanc className={classes.chuin2}>chữ in màu cam</spanc></Typography>
                        <Typography className={classes.line}><FcCheckmark/>Được đăng tối đa 3 ảnh</Typography>
                        <br/>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                <Paper className={classes.tin1}>
                    <Typography className={classes.titleTin3}><span className={classes.chuin3}>TIN MIỄN PHÍ</span></Typography>
                    <br/>
                    <div className={classes.giagoi3}><Typography>Gói <span className={classes.chuin3}>7</span> ngày với giá <span className={classes.chuin3}>0</span>đ/tin</Typography></div>
                    <div className={classes.giagoigrey}><Typography>Gói <span className={classes.chuin3}>15</span> ngày với giá <span className={classes.chuin3}>0</span>đ/tin</Typography></div>
                    <div className={classes.giagoi3}><Typography>Gói <span className={classes.chuin3}>30</span> ngày với giá <span className={classes.chuin3}>0</span>đ/tin</Typography></div>
                    <Typography className={classes.line}><FcCheckmark/>Giá tin: <span className={classes.chuin3}>0</span>đ tin/ngày</Typography>
                    <Typography className={classes.line}><FcCheckmark/>Được ít người tiếp cận nhất</Typography>
                    <Typography className={classes.line}><FcCheckmark/>Đứng đầu danh sách tin đăng</Typography>
                    <Typography className={classes.line}><FcCheckmark/>Tiêu đề <spanc className={classes.chuin3}>chữ in màu đen</spanc></Typography>
                    <Typography className={classes.line}><FcCheckmark/>Được đăng tối đa 3 ảnh</Typography>
                    <br/>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default LoaiTin;