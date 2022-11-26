import React from "react";
import useStyles from './styles'
import "react-multi-carousel/lib/styles.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { MdMail } from "react-icons/md";
import { FaFacebook, FaFacebookMessenger, FaHeadphones, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { ImGooglePlus3 } from "react-icons/im";
import { useSelector,useDispatch } from 'react-redux';
import image1 from "../img/logo2.PNG"


const Footer = () =>{
    const classes = useStyles();
    const company = useSelector((state)=>state.company.filter(x=>x._id === '618aa75c670f02ec6b3f0131'));
    return(
        
        <div>
        <Grid container xs={12} className={classes.containFooter} spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={4} >
                <Typography gutterBottom>
                <img src={image1} height='90' width='350'/>
                </Typography>
                {company.map(x=>(
                    <Typography gutterBottom  variant="h6" style={{textTransform:'uppercase', marginBottom:15, marginTop:10, color:'#c3a357',fontSize:25, fontFamily:'Helvetica'}}>
                    {x.company_name}
                    </Typography>
                ))}

                <Typography gutterBottom className={classes.textGioiThieu}>
                Là kênh thông tin hàng đầu về bất động sản trong nước, uy tín về chất lượng thông tin được cập nhật.
                </Typography>
                <Typography gutterBottom className={classes.textGioiThieu}>
                Đây là website chiếm tỉ suất lớn về lượng người dùng nhiều nhất, không một nhà đầu tư, nhà môi giới hay người mua – bán nào không tìm đến trang này.
                </Typography>
                <Typography gutterBottom className={classes.textGioiThieu}>
                Cung cấp thông tin toàn diện về thị trường bất động sản, website còn cung cấp các thông tin cần thiết khác.
                </Typography>
            </Grid>

            {company.map(x=>(
            <Grid item xs={3} className={classes.cot1}>
                <Typography gutterBottom  variant="h6" style={{textTransform:'uppercase',color:'#c3a357'}}>
                    Thông tin liên hệ
                </Typography>
                
                <Typography gutterBottom className={classes.textGioiThieu}>
                    Chủ sở hữu: The Dream House
                </Typography>
               
                    <Typography gutterBottom className={classes.textGioiThieu}>
                     <MdMail className={classes.iconFooter} /> Email: {x.email}
                    </Typography>
                    <Typography gutterBottom className={classes.textGioiThieu}>
                    <FaPhoneAlt className={classes.iconFooter}/>  Hotline: {x.call_center_number}
                    </Typography>
                    <Typography gutterBottom className={classes.textGioiThieu}>
                    <FaHeadphones className={classes.iconFooter}/>  CSKH: {x.hotline}
                    </Typography>
                    <Typography gutterBottom className={classes.textGioiThieu}>
                    <IoLocation className={classes.iconFooter}/> Địa chỉ: {x.address}
                    </Typography>
               
                
                <Typography gutterBottom className={classes.textGioiThieu}>
                    Chức năng: Chuyên đăng các tin tức liên quan đến mua bán, cho thuê nhà đất và bất động sản có liên quan.
                </Typography>
            </Grid>
            ))}

            <Grid item xs={2}>
            <Typography gutterBottom  variant="h6" style={{textTransform:'uppercase',color:'#c3a357'}}>
                Hỗ trợ
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Gọi điện thoại tư vấn
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Liên hệ báo giá
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Tư vấn tài chính
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Hỗ trợ quy định đăng tin
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Giải quyết thắc mắc
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Câu hỏi thường gặp
            </Typography>
            </Grid>

            <Grid item xs={2}>
            <Typography gutterBottom variant="h6" style={{textTransform:'uppercase',color:'#c3a357'}}>
                Liên hệ
            </Typography>
            
            <Typography gutterBottom className={classes.textGioiThieu}>
                <FaFacebook style={{height:'30', width:'30', marginRight:'20', color:'#c3a357'}} />
                <FaFacebookMessenger style={{height:'30', width:'30',marginRight:'20', color:'#c3a357'}} />
                <ImGooglePlus3 style={{height:'30', width:'30',marginRight:'20', color:'#c3a357'}} />
            </Typography>
            <Typography gutterBottom='20' className={classes.textGioiThieu}>
                Thông tin khác:
            </Typography>
            <Typography gutterBottom='20' className={classes.textGioiThieu}>
                Quốc gia: Việt Nam
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Ngôn ngữ: Việt Nam
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                Phạm vi: Toàn quốc
            </Typography>
            <Typography gutterBottom className={classes.textGioiThieu}>
                <img src={image1} style={{height:80,width:150}}/>
            </Typography>

            </Grid>

            </Grid>
            </div>
    );
};
export default Footer;