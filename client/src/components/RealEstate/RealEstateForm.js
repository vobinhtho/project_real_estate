import { FormControl, Grid, InputLabel, Paper, Select, Typography,MenuItem, TextField, Button, Dialog, DialogTitle, Box, IconButton, DialogContent, DialogActions } from "@material-ui/core";
import React,{useState} from "react";
import usestyles from "./Styles"
import {FcApproval, FcHome} from 'react-icons/fc'
import {ImLocation} from 'react-icons/im'
import { MapContainer, Marker, useMapEvents, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import MultiImageInput from 'react-multiple-image-input';
import LoaiTin from "./LoaiTin";
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import { addRealEstate } from "../../store/actions/realEstateAction";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PaymentPost from "../customer/PaymentPost";
import PaymentForm from "../customer/PaymentForm";
import PaymentCheckout from "./PaymentCheckout";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noimg from '../img/no_image_placeholder.jpg'


toast.configure();

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const MyComponent =({ saveMarkers }) =>{    
    const [pos, setPos] = useState(null)
    const map = useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPos(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            saveMarkers([lat, lng]);
        }
    })
    
    return pos === null ? null : (
        <Marker position={pos} icon={icon}  removable editable>
            <Popup>This is your real estate location! </Popup>
        </Marker>
    )
}

const RealEstateForm = () =>{

    const crop= {
        unit: 'px', // default, can be 'px' or '%'
        width: 200,
        height: 200
    }

    const [images, setImages] = useState([]);
    console.log(images.length);

    const classes = usestyles();

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    };

    // thanhtoan
    const [open1, setOpen1] = useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);

    };

    // get user
    const userLogin = useSelector((state)=>state.auth)

    console.log(userLogin);

    const projects = useSelector((state)=>state.project);
    //console.log(projects);
    
    const address = useSelector((state)=> state.address);
    //console.log(address);
    const [tinhThanh,setTinhthanh]=useState('');
    const [quanHuyen,setQuanhuyen]=useState('');

    const handleProvince = (data) =>{
        setTinhthanh(data.target.value);
    }

    const handleDistrict = (data) =>{setQuanhuyen(data.target.value);}

    const district = address.filter(dt => dt.province_name === tinhThanh);
    const ward = district.filter(dt => dt.district_name === quanHuyen);

    // đon vi tien
    const [donVi, setDonvi] = useState('Tỷ');

    //map
    const [posLat, setPoslat]=useState('');
    const [posLng, setPoslng]=useState('');
    const saveMarkers = (newMarkerCoords) => {
        setPoslat(newMarkerCoords[0]);
        setPoslng(newMarkerCoords[1]);
    };

    //doi tuong
    const [doiTuong, setDoituong]= useState('Tôi là Chủ sở hữu');

    //huong nha
    const [huongNha, setHuongnha]= useState('Đông - Nam');

    //loaiNhadat
    const [loaiNhaDat, setLoainhadat] = useState('Nhà ở');

    //nhu cầu
    const [nhuCau, setNhucau] = useState('Cần Bán');

    //soNgayDangTin
    const[soNgayDangTin, setSongaydangtin]=useState(7);

    //goiTindang
    const [goiTindang, setGoitindang]=useState('GÓI TIN MIỄN PHÍ')
    const [giaTien, setGiaTien]=useState(0)

    const handleGoitindang = (e) => {
        //console.log(e.target.value)
        setGoitindang(e.target.value);
        if(e.target.value==="GÓI TIN MIỄN PHÍ") setGiaTien(0);
        if(e.target.value==="GÓI TIN VIP") setGiaTien(parseInt(soNgayDangTin)*30000);
        if(e.target.value==="GÓI TIN ĐẶC BIỆT") setGiaTien(parseInt(soNgayDangTin)*50000);
        
    }
    //console.log(giaTien);

    //Ngay dang tin
    const [ngayDangTin,setNgaydangtin] = useState(moment().format("YYYY-MM-DD"));
    
    const handleSongaydang = (e)=>{
        setSongaydangtin(e.target.value);
        if(goiTindang==="GÓI TIN VIP") setGiaTien(parseInt(e.target.value)*30000);
        if(goiTindang==="GÓI TIN ĐẶC BIỆT") setGiaTien(parseInt(e.target.value)*50000);
    }
    const handleNgaydangtin = (e) =>{
        setNgaydangtin(e.target.value);
    }
    //default image
    const [noImage, setNoImage]=useState([{0:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7gAOQWRvYmUAZMAAAAAB/9sAQwAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBA/9sAQwERDw8RExEVEhIVFBEUERQaFBYWFBomGhocGhomMCMeHh4eIzArLicnJy4rNTUwMDU1QEA/QEBAQEBAQEBAQEBA/8AAEQgB8QOEAwEiAAIRAQMRAf/EABkAAQEBAQEBAAAAAAAAAAAAAAAEAwIBBv/EACsQAQABAgQEBgMBAQEAAAAAAAABAgMREzFRBDJhcRIUIUFSgSIzkUKhsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHk1UxrMQD0cTetx74uZ4in2iZBqJ54ir2iIczduT7/wFQjmZnWcVcTjETuD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAczXRGtUOZv0RvINBjPEbU/1zN+udMIBQ8mYjX0SzcrnWqXgKZu24/05m/R7RMpwG08RPtDmb1yffBm9B7NdU6zLl1FuudKZdxYrnXCAZDeOH3q/jqLFEdQTPVUUURpEOL8fhjtIJ1VqcbcJVHDz+MxtINQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZTfiPSIcTfq9oiHNyMK6o6uAdzduT7/wAczMzrOJETOkYuotXJ9v6Dgaxw9XvMQ6jh6feZkGAqizbj2x7uoppjSIgEsU1TpEy6izcn2w7qQGEcPPvLqLFHvMy1AcRatx/l1ERGno9AAAAAHNyMaKo6OifWMARNuHn1mGU+k4O7M4XI6+gKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT34wrx3hk34iOWfpgCymcaYneHrizONuOno7AeYxu9SXOeruCrxU7weKneEYCzxU7weKneEYCzxU7weKneEYCzxU7weKneEYCzxU7weKneEYCzxU7weKneEYCzxU7weKneEYDq56Vz3KZwqidpcgLPFTvB4qd4RgLPFTvB4qd4RgLImJ0eseH0nu2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnfjG32TK64xomOiQG/Dz+MxtLZPYn8pjeFACS5z1d1aS5z1dweRGM4bu8i50c080d4VgmyLnQyLnRvmUfJ5m2/lAMci50Mi50bZtv5QZtv5QDHIudDIudG2bb+UGbb+UAxyLnQyLnRtm2/lBm2/lAMci50Mi50bZtv5QZtv5QDHIudDIudG2bb+UGbb+UAxyLnQyLnRtm2/lBm2/lAMci50Mi50bZtv5Q6pqpq0nEE1VqqmMZ0cKb/6/tMDfh9J7tmPD6T3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI5jCZjZYluxhckC1OFyP4qRxOExOywBJc56u6tJc56u4FPNHeFaSnmjvCsEc6vHs6vAHXhq1wnDs3tW4piJnmn/jQEQpu24qiao5o/wCpgAAAAAAAAG3D61MW3D61A7v/AK/tMpv/AK/tMDfh9J7tmPD6T3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ+Ij8oneFDLiI/GJ2kE6uicaInokU2Jxo7SDRJc56u6tJc56u4FPNHeFaSnmjvCsEc6hOrwFoxtXYiPDV9S18VOuMA9Rtrt2Jjw0/csAAAAegREzOEatfLzhr6+8O7VvwxjPN/40BHMTE4TrDxTdt+OMY5oTg8bcPrUxbcPrUDu/8Ar+0ym/8Ar+0wN+H0nu2Y8PpPdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4vRjbnp6u3lUY0zG8Ajb8PPNH2waWJwrw3gFKS5z1d1aS5z1dwKeaO8K0lPNHeFYI51ePZ1eAAAAAAAKLVrD8qtfaHNm1/qr6huAAAyvW8fyp194agIm3D61F63h+VOnvBw+tQO7/6/tMpv/r+0wN+H0nu2Y8PpPdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSqMKpjqW5wrpnq6vRhcnq4BYkuc9XdVE4xE7pbnPV3Ap5o7wrSU80d4VgjnV49nV4ANKLVVfrpG7em3TTGER3BINq7HvR/GUxMekg8a2rXi/KrT2jd5at+KcZ5Y/6pAAAAAAAcUW/BVMxpLsBnf/AF/aZTf/AF/aYG/D6T3bMeH0nu2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhxEesSxUX4/CJ2lOCq1ONuE9znq7trE/hMbSxuc9XcCnmjvCtJTzR3hWCPCZnCPWW9FmI9avWdndNNNOkOgAAHNVFNesfboB5EREYRo9AAAAAAAAAGd/9f2mU3/1/aYG/D6T3bMeH0nu2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxdjG3UlWTGMTG6QCJmNJweOooqnSJeTExOE6g9p5o7wrRxOExOzbzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDYY+YjaTzEbSDq/wDr+0zW5diunDDBkDfh9J7tmPD6T3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIiI0jB6AJLnPV3VuJtUTOMx6yCUU5NvYybewJhTk29jJt7AmFOTb2Mm3sCYU5NvYybewJhTk29jJt7AmFOTb2Mm3sCYU5NvYybewJhTk29jJt7AmFOTb2Mm3sCYU5NvYybewOeH0nu2c00U08vu6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="}]);
    
    // ngayketthuc
    
    var date_ketthuc = moment(ngayDangTin).add(soNgayDangTin,'day').format("YYYY-MM-DD");

    const [content, setContent]= useState();
    // submit
    const dispatch = useDispatch();

    const [realEstate, setRealEstate]= useState({
        project_category: '',
        address : {
            province : tinhThanh,
            district : quanHuyen,
            ward: "",
            street: ""
        },
        location: {lat: posLat, lng: posLng},
        price: {price_number: "", unit_price: ''},
        area: "",
        facade: "",
        length : "",
        orientation: "",
        number_of_floors: "",
        bedroom: "",
        toilet: "",
        legal_papers: "",
        furniture: "",
        object: "",
        real_estate_form: "",
        real_estate_category: "",
        real_estate_title: "",
        description_information: content,
        image_realestate:[],
        name_contact:'',
        address_contact:'',
        phone_contact:'',
        email_contact:'',
        news_category: "",
        post_date: '',
        expiration_date: '',
        price_news:'',
        user_id: '',
        status: 'create'
    })
   
    console.log(images)
    
    const [dataBds, setDataBds]=useState();
    const handleSubmit=(data) =>{
        data.preventDefault();
       
        const bds = {
        project_category: realEstate.project_category,
        address : {
            province : tinhThanh,
            district : quanHuyen,
            ward: realEstate.address.ward,
            street: realEstate.address.street
        },
        location: {lat: posLat, lng: posLng},
        price: {price_number: realEstate.price.price_number, unit_price: donVi},
        area: realEstate.area,
        facade: realEstate.facade,
        length : realEstate.length,
        orientation: huongNha,
        number_of_floors: realEstate.number_of_floors,
        bedroom: realEstate.bedroom,
        toilet: realEstate.toilet,
        legal_papers: realEstate.legal_papers,
        furniture: realEstate.furniture,
        object: doiTuong,
        real_estate_form: nhuCau,
        real_estate_category: loaiNhaDat,
        real_estate_title:realEstate.real_estate_title,
        description_information: content,
        image_realestate:images,
        name_contact:realEstate.name_contact,
        address_contact:realEstate.address_contact,
        phone_contact:realEstate.phone_contact,
        email_contact:userLogin.email,
        news_category: goiTindang,
        post_date: ngayDangTin,
        expiration_date: date_ketthuc,
        price_news:giaTien,
        user_id: userLogin._id,
        status: 'create'
        }

        bds.user_id=userLogin._id;

        if(images.length===0){ bds.image_realestate=noImage}
        
        dispatch(addRealEstate(bds));

        if(bds.news_category==="GÓI TIN MIỄN PHÍ"){
            toast.success('A Real Estate added.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
        
        console.log(bds);
        
    }

    return(
        <div className={classes.paperContainerFormRE}>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.chimuc}>CHỌN VỊ TRÍ</Typography>
                <div className={classes.thanhNgang}>
                <Typography><FcApproval className={classes.iconSafe}/> Để tăng độ tin cậy và thu hút của tin đăng , hãy thêm vị trí <ImLocation className={classes.iconLocation}/> cho bất động sản của bạn trên bản đồ.</Typography> 
                <Typography> Lưu ý: Chữ <span className={classes.textMadatory}>màu vàng có dấu *</span> là những trường bắt buộc.</Typography>
                </div>
                
            </Grid>
        
            <Grid item xs={12} sm={4} >     
                <Grid item xs={6} sm={12}>
                    <FormControl  variant="outlined" fullWidth >
                    <InputLabel>Chọn dự án</InputLabel>
                    <Select
                    value={realEstate.project_category}
                    onChange={(e)=>setRealEstate({...realEstate,project_category:e.target.value})}
                    label="Dự án"
                    >
                    {projects.map(items=>(<MenuItem value={items.name_project}>{items.name_project}</MenuItem>))}
                    </Select>
                    </FormControl>
                </Grid>
                <br/>
              

                <Grid item xs={12} sm={12}>
                    <FormControl required variant="outlined" fullWidth >
                    <InputLabel className={classes.textMadatory}>Tỉnh/TP</InputLabel>
                    <Select
                    //onChange={(e)=>setRealEstate({...realEstate,address:{province:e.target.value}})}
                    onClick={handleProvince}
                    label="Tỉnh/Thành"
                    >
                    {Array.from(new Set(address.map((j) => j.province_name))).map((pn) => (
                    <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                    ))}
                    
                    </Select>
                    </FormControl>
                </Grid>
                <br/>
              

                        <Grid item xs={12} sm={12}>
                        <FormControl required variant="outlined" fullWidth>
                        <InputLabel className={classes.textMadatory}>Quận/Huyện</InputLabel>
                        <Select
                          name="address.district"
                          //value={values.address.district}
                         //onChange={handleChange}
                         label="Quận/Huyện"
                          onClick={handleDistrict}>
                          {Array.from(new Set(district.map((j) => j.district_name))).map((pn) => (
                            <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                          ))}
                          </Select>
                        </FormControl>
                        </Grid>
                        <br/>
                       

                        <Grid item xs={12} sm={12}>
                        <FormControl required variant="outlined" fullWidth>
                        <InputLabel className={classes.textMadatory}>Phường/Xã</InputLabel>
                        <Select
                          name="address.ward"
                          //value={values.address.ward_name}
                          //onChange={handleChange}
                          label="Phường/Xã"
                          onClick={(e)=>setRealEstate({...realEstate,address: { ...realEstate.address, ward: e.target.value }})}
                          >
                          {Array.from(new Set(ward.map((j) => j.ward_name))).map((pn) => (
                            <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                          ))}
                        </Select>
                       
                      </FormControl>
                        </Grid>
                        <br/>
                        

                        <Typography>Địa chỉ cụ thể </Typography>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                 onChange={(e)=>setRealEstate({...realEstate,address:{...realEstate.address,street:e.target.value}})}
                                 variant="outlined"
                                 fullWidth 
                                 placeholder="Số 80, Hẻm 76, Đường 3/2"
                                
                            />
                        </Grid>

                </Grid>

            <Grid item xs={12} sm={8}>
            

            <Grid item xs={12} sm={12}>
                            
                        </Grid>

                        <Paper className={classes.paperMap}>
                        <MapContainer
                            center={{ lat: 10.045162, lng: 105.746857 }}
                            zoom={13}
                            style={{ height: "400px", width: "" }}
                            scrollWheelZoom={true}
                            >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MyComponent saveMarkers={saveMarkers} />
                        </MapContainer>
                        </Paper>
            </Grid>

            

                     
      </Grid>

      <Grid item xs={12}>
            <br/>
            <br/>
                <Typography variant="h6" className={classes.chimuc}>THÔNG TIN BẤT ĐỘNG SẢN</Typography>
            <br/>
            <br/>
            </Grid>

            <Grid container spacing={4}>
   
                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Giá tiền *</span>  </Typography>
                </Grid>
                <Grid item xs={2}>
                    <TextField size="small" required
                        onChange={(e)=>setRealEstate({...realEstate,price:{...realEstate.price,price_number:e.target.value}})}
                         variant="outlined"
                         fullWidth 
                />
                </Grid>

                <Grid item xs={2}>
                <FormControl variant="outlined" fullWidth size="small">
                <InputLabel>Đơn vị</InputLabel>
                <Select
                  name="address.district"
                  value={donVi}
                  onClick={(e)=>setDonvi(e.target.value)}
                  label="Đơn vị"
                  >
                  <MenuItem value='Tỷ' >Tỷ</MenuItem>
                  <MenuItem value="Triệu" >Triệu</MenuItem>
                  </Select>
                </FormControl>
                </Grid>


                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Diện tích *</span> </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" required
                         variant="outlined" onChange={(e)=>setRealEstate({...realEstate,area:e.target.value})}
                         fullWidth 
                    />
            
                </Grid>

                <Grid item xs={1}></Grid>

                
                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Mặt tiền </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField size="small"
                         variant="outlined"
                         onChange={(e)=>setRealEstate({...realEstate,facade:e.target.value})}
                         fullWidth 
                    />
            
                </Grid>

                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Chiều sâu </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small"
                         variant="outlined"
                         fullWidth onChange={(e)=>setRealEstate({...realEstate,length:e.target.value})}
                    />
            
                </Grid>

                <Grid item xs={1}></Grid>

                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Hướng nhà</Typography>
                </Grid>
                <Grid item xs={4}>
                    <FormControl size="small" variant="outlined" fullWidth >
                    <InputLabel>Hướng nhà</InputLabel>
                        <Select
                            value={huongNha}
                            label="Hướng nhà"
                            onClick={(e)=>setLoainhadat(e.target.value)}>
                            <MenuItem value="Đông - Nam">Đông - Nam</MenuItem>
                            <MenuItem value="Tây - Bắc">Tây - Bắc</MenuItem>
                            <MenuItem value="Tây - Nam">Tây - Nam</MenuItem>
                            <MenuItem value="Đông - Bắc">Đông - Bắc</MenuItem>
                            <MenuItem value="Bắc - Nam">Bắc - Nam</MenuItem>
                            <MenuItem value="Khác">Khác</MenuItem>
                        </Select>
                    </FormControl>
            
                </Grid>

                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Số tầng  </Typography>
                </Grid>
                
                <Grid item xs={3}>
                    <TextField size="small"
                         variant="outlined"
                         fullWidth type="number" inputProps={{ min: 0, max: 10 }}
                         onChange={(e)=>setRealEstate({...realEstate,number_of_floors:e.target.value})}
                    />
                </Grid>

                <Grid item xs={1}></Grid>


                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Số phòng ngủ  </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField size="small"
                         variant="outlined"
                         fullWidth type="number" inputProps={{ min: 0, max: 10 }}
                         onChange={(e)=>setRealEstate({...realEstate,bedroom:e.target.value})}
                    />
            
                </Grid>

                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Số toilet  </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small"
                         variant="outlined"
                         fullWidth type="number" inputProps={{ min: 0, max: 10 }}
                         onChange={(e)=>setRealEstate({...realEstate,toilet:e.target.value})}
                    />
            
                </Grid>
                <Grid item xs={1}></Grid>


                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Giấy tờ pháp lý *</span> </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField size="small" required
                         variant="outlined"
                         fullWidth onChange={(e)=>setRealEstate({...realEstate, legal_papers:e.target.value})}
                    />
            
                </Grid>

                <Grid item xs={2}>
                <Typography className={classes.titlelienhe}>Nội thất</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small"
                         variant="outlined"
                         fullWidth onChange={(e)=>setRealEstate({...realEstate,furniture:e.target.value})}
                    />
            
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={1}>
                            <div className={classes.thanhNgang}>
                            <FcHome className={classes.iconNhaDat}/>
                            </div>
                        </Grid>
                        
                    <Grid items xs={11} className={classes.thanhNgang}>
                        <div className={classes.thanhNgang}>
                        <Typography>Hãy mô tả bất động sản của bạn để giúp bài đăng được chú ý hơn.</Typography>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>

           
                <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth >
                    <InputLabel className={classes.textMadatory}>Chọn đối tượng</InputLabel>
                        <Select
                            value={doiTuong}
                            label="Chọn đối tượng *"
                            onClick={(e)=>setDoituong(e.target.value)}
                            >
                            <MenuItem value="Tôi là Chủ sở hữu">Tôi là Chủ sở hữu</MenuItem>
                            <MenuItem value="Tôi là Nhà mô giới">Tôi là Nhà mô giới</MenuItem>
                            <MenuItem value="Khác">Khác</MenuItem>
                        </Select>
                </FormControl>
                </Grid>
                <Grid item xs={5}></Grid>

                

           
                <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth >
                    <InputLabel className={classes.textMadatory}>Chọn loại nhà đất</InputLabel>
                        <Select
                            value={loaiNhaDat}
                            label="Chọn loại nhà đất *"
                            onClick={(e)=>setLoainhadat(e.target.value)}
                            >
                            <MenuItem value="Nhà ở">Nhà ở</MenuItem>
                            <MenuItem value="Nhà riêng">Nhà riêng</MenuItem>
                            <MenuItem value="Nhà chung cư">Nhà chung cư</MenuItem>
                            <MenuItem value="Nhà biệt thự">Nhà biệt thự</MenuItem>
                            <MenuItem value="Nhà mặt phố">Nhà mặt phố</MenuItem>
                            <MenuItem value="Đất nền dự án">Đất nền dự án</MenuItem>
                            <MenuItem value="Khác">Khác</MenuItem>
                        </Select>
                </FormControl>
                </Grid>

                
                
                <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth >
                    <InputLabel className={classes.textMadatory}>Chọn nhu cầu</InputLabel>
                        <Select
                            value={nhuCau}
                            label='Chọn nhu cầu *'
                            onClick={(e)=>setNhucau(e.target.value)}>
                            <MenuItem value="Cần Bán" >Cần Bán</MenuItem>
                            <MenuItem value="Cần Mua" >Cần Mua</MenuItem>
                            <MenuItem value="Cho Thuê" >Cho Thuê</MenuItem>
                            <MenuItem value="Cần Thuê" >Cần Thuê</MenuItem>
                        </Select>
                </FormControl>
                </Grid>


                <Grid item xs={12}>
                <Typography><span className={classes.textMadatory}>Tiêu đề *</span></Typography>
                <Grid item xs={12}>
                    <TextField required
                         variant="outlined"
                         fullWidth onChange={(e)=>setRealEstate({...realEstate,real_estate_title:e.target.value})}
                    />
                </Grid>
                </Grid>


                <Grid item xs={12}>
                <Typography><span className={classes.textMadatory}>Nhập mô tả</span></Typography>
                    <Grid item xs={12}>
                    <CKEditor
                        editor={ClassicEditor}
                        //data={content || ''}
                        onChange={(event, editor) => {
                            setContent(editor.getData());
                            // //(editor.getData())
                            // setTintucdata((e)=>setTintucdata({...tinTucdata,content:}))
                            // //console.log(editor.getData())
                        }}
                    />
                    </Grid>
                </Grid>
                

                <Grid item xs={12}>
                <Typography>Thêm ảnh cho bất động sản</Typography>
                <Grid item xs={12}>
                <MultiImageInput
                    images={images}
                    heigth="300"
                    width="300"
                    setImages={setImages}
                    allowCrop={false}
                    theme={"light"}
                    max={6}
                    cropConfig={{ crop, ruleOfThirds: true }}
                    />
                </Grid>
                </Grid>
                        {/*

                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.chimuc}>THÔNG TIN LIÊN HỆ</Typography>
                </Grid>

                
                <Grid item xs={12} sm={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Tên người liên hệ *</span> </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField 
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setRealEstate({...realEstate,name_contact:e.target.value})}
                    />  
                </Grid>

                <Grid item xs={12} sm={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Địa chỉ *</span> </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField 
                    variant="outlined"
                    fullWidth 
                    onChange={(e)=>setRealEstate({...realEstate,address_contact:e.target.value})}
                    />  
                </Grid>

                <Grid item xs={12} sm={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Điện thoại *</span> </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField 
                    variant="outlined"
                    fullWidth 
                    onChange={(e)=>setRealEstate({...realEstate,phone_contact:e.target.value})}
                    />  
                </Grid>

                <Grid item xs={12} sm={2}>
                <Typography className={classes.titlelienhe}><span className={classes.textMadatory}>Địa chỉ Email *</span> </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField 
                    variant="outlined"
                    fullWidth onChange={(e)=>setRealEstate({...realEstate,email_contact:e.target.value})}
                    />  
                    
                    </Grid> */}


                <Grid item xs={12}>
                
                    <Typography variant="h6" className={classes.chimuc}>CHỌN GÓI TIN ĐĂNG</Typography>
                </Grid>

                <Grid item xs={6}>
                    
                    <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth >   
                    <InputLabel className={classes.textMadatory}>Chọn loại gói tin đăng</InputLabel>
                    <Select
                    value={goiTindang} label="Chọn loại gói tin đăng *"
                    onClick={(e)=>handleGoitindang(e)}
                    >
                    <MenuItem value="GÓI TIN MIỄN PHÍ">GÓI TIN MIỄN PHÍ</MenuItem>
                    <MenuItem value="GÓI TIN VIP">GÓI TIN VIP</MenuItem>
                    <MenuItem value="GÓI TIN ĐẶC BIỆT">GÓI TIN ĐẶC BIỆT</MenuItem>
                    </Select>
                    </FormControl>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                
                <Grid item xs={12}>
                    <Button variant="outlined" color="primary" size="large" onClick={handleClickOpen}>Tham khảo các gói tin</Button>
                </Grid>
                    
                </Grid>

                <Grid item xs={4}>
                <Typography className={classes.textMadatory}>Số ngày đăng tin</Typography>
                <Grid item xs={12}>
                    <TextField 
                         variant="outlined"
                         type="number" inputProps={{ min: 7, max: 90 }}
                         value={soNgayDangTin}
                         onChange={(e)=>handleSongaydang(e)}
                         fullWidth 
                    />
                </Grid>
                </Grid>

                <Grid item xs={4}>
                <Typography>Ngày đăng bài</Typography>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined" fullWidth
                    value={ngayDangTin}
                    onChange={(e)=>handleNgaydangtin(e)}
                    type="date"
                    name="dob"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </Grid>
                </Grid>

                <Grid item xs={4}>
                <Typography>Ngày kết thúc</Typography>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined" fullWidth
                    value={date_ketthuc}
                    disabled
                    type="date"
                    name="dob"
                    //defaultValue={moment(employeeData.dob).format('YYYY MM DD')}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </Grid>
                </Grid>

                <Grid item xs={12}>
                <Typography className={classes.thanhNgang1}>Bạn chọn <span className={classes.goitin}>{goiTindang}</span>, tổng số tiền là <span className={classes.tien}>{giaTien}</span> nghìn đồng.</Typography>
               
                </Grid>

                <Grid item xs={4}></Grid>
                {goiTindang==='GÓI TIN MIỄN PHÍ' ? <Grid item xs={4}>
                <br/>
                    <Button type='submit' variant="contained" size="large" color="primary" fullWidth>Đăng tin Miễn Phí</Button>
                </Grid> : <Grid item xs={4}>
                <br/>
                    <Button type='submit' onClick={handleClickOpen1} variant="contained" size="large" color="secondary" fullWidth>Đăng tin có phí</Button>
                </Grid>
                }
                
               
                <Grid item xs={4}></Grid>
                
            </Grid>
                 
                <Dialog  onClose={handleClose} fullWidth  maxWidth='lg' open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Box display="flex" alignItems="center">
                <Box flexGrow={1} ></Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                        <CloseIcon/>
                        </IconButton>
                    </Box>
                </Box>
                </DialogTitle>
                <DialogContent dividers>
                    <LoaiTin/>
                </DialogContent>
               
                </Dialog>

               
        </form>
           
     {/*thanhtoan*/}
    
     <Dialog onClose={handleClose1} fullWidth maxWidth={"sm"} open={open1}>
     <DialogTitle onClose={handleClose1}>
       <Box display="flex" alignItems="center">
       <Box flexGrow={1}>THANH TOÁN PHÍ ĐĂNG TIN</Box>
         <Box>
             <IconButton onClick={handleClose1}>
                <CloseIcon/>    
             </IconButton>
         </Box>
       </Box>
     </DialogTitle>
     <DialogContent dividers>
      <PaymentCheckout giaTien={giaTien} dataBds={dataBds} handleClose={handleClose1}/>
     </DialogContent>
     
   </Dialog>
   
    </div>
      
    );
}
export default RealEstateForm;