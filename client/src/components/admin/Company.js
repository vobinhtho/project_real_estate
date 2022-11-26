import { Button, FormControl, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import useStyle from './styles'
import {useDispatch,useSelector} from 'react-redux'
import * as yup from "yup";
import { Form, Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FileBase from 'react-filebase64';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MapContainer, Marker, useMapEvents, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import MultiImageInput from 'react-multiple-image-input';
import image from '../img/addproject.png'
import img1 from '../img/login.png'
import img2 from '../img/logo2.PNG'
import { addCompany, updateCompany } from "../../store/actions/companyAction";


const CompanySchema = yup.object().shape({
     company_name: yup.string().required("(*) Nhập tên công ty."),
     email: yup.string().email("(*) Email không hợp lệ.").required("(*) Nhập địa chỉ email công ty."),
     hotline: yup.string().required("(*) Nhập hotline công ty."),
    call_center_number: yup.string().required("(*) Nhập số điện thoại trung tâm công ty."),
    address: yup.string().required("(*) Nhập địa chỉ công ty."),
 })
 ;

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
const Company = () =>{

    const classes = useStyle();
    const dispatch = useDispatch();

    const crop= {
      unit: 'px', // default, can be 'px' or '%'
      width: 200,
      height: 200
    }
   
    const currentId ='1';

    const company = useSelector((state) => (state.company.find(u=>u._id === '618aa75c670f02ec6b3f0131')));  

    const [companyData, setCompanyData] = useState(
    {company_name: '',email: '', hotline: '', call_center_number:'', address: '',logo: '',posLng:'',posLat:'', banner_images:[]});
    
    
    //const [banner, setBanerImage]=useState([img1,img2]);

    const [cover, setCover]=useState(companyData.logo);
    
    const [posLat, setPoslat]=useState('');
    const [posLng, setPoslng]=useState('');
    const saveMarkers = (newMarkerCoords) => {
        setPoslat(newMarkerCoords[0]);
        setPoslng(newMarkerCoords[1]);
    };

    const [imgData, setImageData]=useState([]);

    const banner = [];
    useEffect(() => {
          if (company) setCompanyData(company);
    });
    
    // company.banner_images.map(img=>(
    //   Object.keys(img).map(function(key,index){
    //     //banner.push(img[key])
    //      banner.push(img[key])
    //   })
    // ))
    console.log(companyData.banner_images)
    const [images, setImages]=useState(companyData.banner_images);
 
    return(
        <Grid container spacing={5}>

            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={9}>
                <Paper className={classes.paperCompany}>
                    <Typography className={classes.titleCompany}>DREAM HOUSE</Typography> 
                    <Formik
                    enableReinitialize = {true}
                    initialValues={companyData}
                    validationSchema={CompanySchema}
                    onSubmit={async (values, {resetForm}) => {
                        values.logo=cover;
                        values.posLat=posLat;
                        values.posLng=posLng;
                        values.banner_images=images;
                        console.log(values);
                        // values.content=content;
                         dispatch(updateCompany(values,'618aa75c670f02ec6b3f0131')); 
                        // resetForm();
                        // handleClose();
                        //window.location.reload();
                    }}
                  >
                    {({values, errors, handleChange, handleBlur, touched}) => (
                      <Form>
                        <Grid container spacing={3}>        
                        <Grid item xs={12}>
                            <TextField
                              error={errors.company_name && touched.company_name}
                              name="company_name"
                              value={values.company_name}
                              variant="outlined"
                              fullWidth 
                              onChange={handleChange}
                              label="Tên công ty"
                              helperText={
                                errors.company_name && touched.company_name
                                  ? errors.company_name
                                  : null
                              }
                            />
                          </Grid>

                        <Grid item xs={4}>
                            <img height='120' width='345' src={companyData.logo}/>
                        </Grid>

                          <Grid item xs={4}>
                            <FileBase type="file" multiple={false} 
                            onDone={(base64) => setCover(base64.base64)} 
                            />
                          </Grid>

                          <Grid item xs={4}>
                            <TextField
                              error={errors.email && touched.email}
                              name="email"
                              value={values.email}
                              variant="outlined"
                              fullWidth 
                              onChange={handleChange}
                              label="Email công ty"
                              helperText={
                                errors.email && touched.email
                                  ? errors.email
                                  : null
                              }
                            />
                          
                          </Grid>

                          <Grid item xs={4}>
                            <TextField
                              error={errors.hotline && touched.hotline}
                              name="hotline"
                              value={values.hotline}
                              variant="outlined"
                              fullWidth 
                              onChange={handleChange}
                              label="Hotline"
                              helperText={
                                errors.hotline && touched.hotline
                                  ? errors.hotline
                                  : null
                              }
                            />
                          
                          </Grid>

                          <Grid item xs={4}>
                            <TextField
                              error={errors.call_center_number && touched.call_center_number}
                              name="call_center_number"
                              value={values.call_center_number}
                              variant="outlined"
                              fullWidth 
                              onChange={handleChange}
                              label="Số điện thoại trung tâm"
                              helperText={
                                errors.call_center_number && touched.call_center_number
                                  ? errors.call_center_number
                                  : null
                              }
                            />
                          
                          </Grid>

                          <Grid item xs={4}>
                            <TextField
                              error={errors.address && touched.address}
                              name="address"
                              value={values.address}
                              variant="outlined"
                              fullWidth 
                              onChange={handleChange}
                              label="Địa chỉ công ty"
                              helperText={
                                errors.address && touched.address
                                  ? errors.address
                                  : null
                              }
                            />
                          </Grid>
                          
                          <Grid item xs={12}>
                            <Typography gutterBottom>Banner cho công ty</Typography>
                            <Grid item xs={12}>
                            <MultiImageInput
                                images={images}
                                // heigth="300"
                                // width="300"
                                setImages={setImages}
                                allowCrop={false}
                                theme={"light"}
                                max={5}
                                cropConfig={{ crop, ruleOfThirds: true }}
                                />
                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                          <Typography gutterBottom>Chọn vị trí của công ty</Typography>
                          <Paper className={classes.paperMap}>
                          <MapContainer
                              center={{ lat: 10.045162, lng: 105.746857 }}
                              zoom={13}
                              style={{ height: "300px", width: "" }}
                              scrollWheelZoom={true}
                              >
                              <TileLayer
                                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker icon={icon} position={{lat: companyData.posLat, lng: companyData.posLng }}>
                                      <Popup>
                                          Đây là vị trí của công ty.
                                      </Popup>
                                  </Marker>
                              <MyComponent saveMarkers={saveMarkers} />
                          </MapContainer>
                          </Paper>
                          </Grid>

                    
                        <Grid item xs={12} sm={2}>
                          <FormControl variant="outlined"  >
                            <Button size='large' color="primary" variant="contained" fullWidth
                              type="submit">
                              Submit
                            </Button>
                          </FormControl>
                        </Grid>
                        
                      </Grid>
                      </Form>
                    )}
                  </Formik>
                
                    </Paper> 
            </Grid>

            <Grid item xs={12} sm={1}></Grid>

        </Grid>
    )
}
export default Company;