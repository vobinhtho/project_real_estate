import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState,useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/actions/authActions";
import { addBook } from "../../store/actions/bookAction";
import emailjs from 'emailjs-com';

const useStyles = makeStyles({
    content:{
        padding:30
    },
    gio:{
        paddingTop:12
    }
})
const BookRealEstate = ({id, handleClose}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    const [hinhThuc, setHinhThuc] =useState('Xem trực tiếp');
    const [date,setDate]=useState(moment().add(3, 'days').format('YYYY-MM-DD'));
    const userLogin = useSelector(state=>state.auth)

    const realestate = useSelector(state=>state.realestate.filter(u=>u._id === id))
    const userchu = useSelector(state=>state.user.filter( u => {
        return realestate.find( r => r.user_id === u._id );
    }));

    const user = useSelector(state=>state.user.filter( u => {
        return realestate.find( r => r.user_id === u._id );
    }));
    

    const [book,setBook]=useState({
        book_form:hinhThuc,
        appointment_date:date,
        appointment_time:'',
        name_contact:'',
        sdt_contact:'',
        email_contact:'',
        note:'',
        user_id:userLogin._id,
        uidbook:realestate[0].user_id,
        idrealestate:id,
        status:'create'
    })

    //console.log(userchu);

    const sendEmail = (book) => {
    //e.preventDefault();

    //console.log(template_params)
    // emailjs.send('service_d8cv2vq', 'template_q6j7exh', template_params, 'user_BwvmwsZTmoiCmAL8Q5lBE')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    };

    const handleSubmit=(data) =>{
        data.preventDefault();
        //console.log(book)
        dispatch(addBook(book));
        var template_params = {
            to_email:userchu[0].email,
            nguoinhan:userchu[0].fullname,
            nguoigui:book.name_contact,
            tenbatdongsan:realestate[0].real_estate_title,
            dientich:realestate[0].area,
            giatien:realestate[0].price.price_number,
            donvi:realestate[0].price.unit_price,
            diachi:realestate[0].address.street+' '+realestate[0].address.ward+' '+realestate[0].address.district+' '+realestate[0].address.province,
            giohen:book.appointment_time,
            to_me:book.email_contact,
            ghichu:book.note,
            sodienthoai:book.sdt_contact
        };

        emailjs.send('service_d8cv2vq', 'template_q6j7exh', template_params, 'user_BwvmwsZTmoiCmAL8Q5lBE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        handleClose()
    }

    return(
        <div className={classes.content}>
        <form  onSubmit = { handleSubmit }>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth >
                            <InputLabel className={classes.textMadatory}>Chọn đối tượng</InputLabel>
                                <Select
                                    value={hinhThuc}
                                    label="Chọn hình thức xem"
                                    onClick={(e)=>setHinhThuc(e.target.value)}
                                    >
                                    <MenuItem value="Xem trực tiếp">Xem trực tiếp</MenuItem>
                                    <MenuItem value="Xem qua live video">Xem qua live video</MenuItem>
                                
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Nhập thông tin để đặt lịch hẹn</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography><b>Họ và tên:</b></Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <TextField required
                            variant="outlined"
                            fullWidth 
                            //onChange={handleChange}
                            onChange={(e)=>setBook({...book,name_contact:e.target.value})}
                            label="Họ tên"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography><b>Số điện thoại:</b></Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <TextField required
                            variant="outlined"
                            fullWidth 
                            onChange={(e)=>setBook({...book,sdt_contact :e.target.value})}
                            label="Số điện thoại"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography><b>Email:</b></Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <TextField required
                            variant="outlined"
                            fullWidth 
                            type='email'
                            name="user_email"
                            onChange={(e)=>setBook({...book,email_contact :e.target.value})}
                            label="Email"
                            />
                        </Grid>


                    </Grid>
                </Grid> 


                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <TextField required
                            variant="outlined" fullWidth
                            value={moment().add(3, 'days').format('YYYY-MM-DD')}               
                            label="Ngày hẹn"
                            type="date"                          
                            onChange={(e)=>setBook({...book,appointment_date :e.target.value})}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </Grid>

                        <Grid item xs={3}>
                            <Typography className={classes.gio}><b>Giờ hẹn:</b></Typography>
                        </Grid>
                        <Grid  item xs={9}>
                           <TextField required
                            variant="outlined"
                            fullWidth 
                            onChange={(e)=>setBook({...book, appointment_time :e.target.value})}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography><b>Ghi chú:</b></Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                            variant="outlined"
                            fullWidth multiline
                            onChange={(e)=>setBook({...book,note :e.target.value})}
                            rows={9}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} >
                    <Button value="Send" type="submit" fullWidth size='large' variant='contained' color='primary'> Đặt lịch hẹn</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            </form>
        </div>
    )
}
export default BookRealEstate;