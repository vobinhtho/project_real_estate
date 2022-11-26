import React, { useState, useEffect } from 'react';
import { TextField, Button,  Grid, FormControl, Paper } from '@material-ui/core';
import FileBase from 'react-filebase64';
import useStyles from './stylesNew';
import { useDispatch, useSelector} from 'react-redux';
import { Form, Formik } from 'formik';
import moment from 'moment'
import * as yup from "yup";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import imgAdd from '../img/addproject.png'
import { addProject, updateProject } from '../../store/actions/projectAction';
import { MapContainer, Marker, useMapEvents, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import { updateCompany } from '../../store/actions/companyAction';
import { updateTintuc } from '../../store/actions/tintucsAction';


const ProjectSchema = yup.object().shape({
    name_project: yup.string().required("(*) Nhập tên dự án."),
    address_project: yup.string().required("(*) Nhập địa chỉ dự án."),
    investor: yup.string().required("(*) Nhập chủ đầu tư cho dự án."),
    investment_capital:yup.string().required("(*) Nhập vốn đầu tư của dự án."),
    area:yup.string().required("(*) Nhập vốn diện tích."),
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

const ProjectForm = ({ currentId, setCurrentId, handleClose }) => {  

  const classes = useStyles();
  
  const dispatch = useDispatch();

  const ngay = moment().format('YYYY-MM-DD');

  const project = useSelector((state) => (currentId ? state.project.find((message) => message._id === currentId) : null));

  const [Projectdata, setProjectdata] = useState(
  {name_project: '', description_project: '', address_project: '',  investor:'', images: '',  investment_capital: '', date_start:ngay, status:'true'});

  const [images, setImages]=useState(imgAdd);
  const [description_project, setDescription_project]=useState('');

  const [posLat, setPoslat]=useState('');
  const [posLng, setPoslng]=useState('');
  const saveMarkers = (newMarkerCoords) => {
      setPoslat(newMarkerCoords[0]);
      setPoslng(newMarkerCoords[1]);
  };

  //console.log(posLat+" "+posLng);
  
  useEffect(() => {
    if (project) setProjectdata(project);
    if (project) setDescription_project(project.description_project);
    if (project) setImages(project.images);
    if (project) setPoslat(project.posLat);
    if (project) setPoslng(project.posLng);
  });


  return (
    <div>
    <Formik
          enableReinitialize= {true}
          initialValues={Projectdata}
          validationSchema={ProjectSchema}
          onSubmit={async (values, {resetForm}) => {
              values.images=images;
              values.description_project=description_project;
              values.posLat=posLat;
              values.posLng=posLng;
              console.log(values)
              //dispatch(updateCompany(values)); 
              if(currentId===0){
                dispatch(addProject(values)); 
              } else{
                dispatch(updateProject(values, currentId)); 
              }
              resetForm();
              handleClose();
          }}
        >
          {({values, errors, handleChange, handleBlur, touched}) => (
            <Form>
              <Grid container spacing={3}>        
              <Grid item xs={12}>
                  <TextField
                    error={errors.name_project && touched.name_project}
                    name="name_project"
                    value={values.name_project}
                    variant="outlined"
                    fullWidth autoFocus
                    onChange={handleChange}
                    label="Tên dự án"
                    helperText={
                      errors.name_project && touched.name_project
                        ? errors.name_project
                        : null
                    }
                  />
                
                </Grid>


                <Grid item xs={6}>
                  <TextField
                    error={errors.address_project && touched.address_project}
                    name="address_project"
                    value={values.address_project}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Địa chỉ dự án"
                    helperText={
                      errors.address_project && touched.address_project
                        ? errors.address_project
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                <TextField
                  variant="outlined" fullWidth
                  value={moment(values.date_start).format('YYYY-MM-DD')}
                  label="Ngày bắt đầu"
                  type="date"
                  name="date_start"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Grid>

                <Grid item xs={12}>
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
                    <Marker icon={icon} position={{ lat: posLat, lng: posLng }}>
                            <Popup>
                                Đây là vị trí của dự án.
                            </Popup>
                        </Marker>
                    <MyComponent saveMarkers={saveMarkers} />
                </MapContainer>
                </Paper>
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    error={errors.investment_capital && touched.investment_capital}
                    name="investment_capital"
                    value={values.investment_capital}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Tiền vốn đầu tư"
                    helperText={
                      errors.investment_capital && touched.investment_capital
                        ? errors.investment_capital
                        : null
                    }
                  />
                
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.investor && touched.investor}
                    name="investor"
                    value={values.investor}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Chủ đầu tư"
                    helperText={
                      errors.investor && touched.investor
                        ? errors.investor
                        : null
                    }
                  />
                
                </Grid>
                
                <Grid item xs={3}>
                  <img height='140' width='200' src={images}/>
                </Grid>

                  <Grid item xs={5}>
                  
                  <FileBase type="file" multiple={false} 
                  onDone={(base64) => setImages(base64.base64)} 
                  />
                  {/*
                    <input name="cover" type="file" onChange={handleChange}/>
                  <FileBase type="file" multiple={false} 
                  onDone={({ base64 }) => setTintucdata({ ...tinTucdata, cover: base64 })} 
                  />*/}
                  </Grid>

                  <Grid item xs={4}>
                  <TextField
                    error={errors.area && touched.area}
                    name="area"
                    value={values.area}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Diện tích"
                    helperText={
                      errors.area && touched.area
                        ? errors.area
                        : null
                    }
                  />
                </Grid>


                <Grid item xs={12}>
                    
                <CKEditor 
                    editor={ClassicEditor}
                    data={description_project || ''}
                    onChange={(event, editor) => {
                        setDescription_project(editor.getData());
                        // //(editor.getData())
                        // setTintucdata((e)=>setTintucdata({...tinTucdata,content:}))
                        // //console.log(editor.getData())
                    }}
                    // onBlur={ editor => {
                    //   //console.log( 'Blur.', editor );
                    // }}
                    // onFocus={ editor => {
                    //   //console.log( 'Focus.', editor );
                    // }}
                    config={
                        {
                            ckfinder: {
                                uploadUrl:'http://localhost:7000/upload'
                            }
                        }
                    }
                  />
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

    </div>
  );
};

export default ProjectForm;
