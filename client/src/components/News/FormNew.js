import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, FormControl } from '@material-ui/core';
import FileBase from 'react-filebase64';
import useStyles from './stylesNew';
import { useDispatch, useSelector } from 'react-redux';
import { addTintuc, updateTintuc } from '../../store/actions/tintucsAction';
import { Form, Formik } from 'formik';
import moment from 'moment'
import * as yup from "yup";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from 'react-html-parser';
import imgAdd from '../img/addproject.png'


const TintucSchema = yup.object().shape({
   title: yup.string().required("(*) Nhập tiêu đề bảng tin."),
   abstract: yup.string().required("(*) Nhập tóm tắt bảng tin."),
   creator: yup.string().required("(*) Nhập tác giả của bảng tin.")
})
;


const FormNew = ({ currentId, setCurrentId, handleClose }) => {  

  const classes = useStyles();
  
  
  const dispatch = useDispatch();
  
  const tintucs = useSelector((state) => (currentId ? state.tintucs.find((message) => message._id === currentId) : null));

  console.log(tintucs)
  const [tinTucdata, setTintucdata] = useState(
  {   title: '', abstract: '', content: '',  cover:'', creator: '',  status: 'true'});

  const [cover, setCover]=useState(imgAdd);
  const [content, setContent]=useState('');


  useEffect(() => {
    if(tintucs) setTintucdata(tintucs);
    if(tintucs) setCover(tintucs.cover);
    if(tintucs) setContent("'"+tintucs.content+"'");
  });

//console.log(content);

  return (
    <div>
    <Formik
          enableReinitialize= {true}
          initialValues={tinTucdata}
          validationSchema={TintucSchema}
          onSubmit={async (values, {resetForm}) => {
              values.cover=cover;
              values.content=content;
              
              if(currentId===0){
                dispatch(addTintuc(values)); 
              } else{
                dispatch(updateTintuc(values, currentId)); 
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
                    error={errors.title && touched.title}
                    name="title"
                    value={values.title}
                    variant="outlined"
                    fullWidth autoFocus
                    onChange={handleChange}
                    label="Tiêu đề"
                    helperText={
                      errors.title && touched.title
                        ? errors.title
                        : null
                    }
                  />
                
                </Grid>
                
                <Grid item xs={3}>
                  <img height='140' width='200' src={cover}/>
                </Grid>

                  <Grid item xs={9}>
                  
                  <FileBase type="file" multiple={false} 
                  onDone={(base64) => setCover(base64.base64)} 
                  />
                  {/*
                    <input name="cover" type="file" onChange={handleChange}/>
                  <FileBase type="file" multiple={false} 
                  onDone={({ base64 }) => setTintucdata({ ...tinTucdata, cover: base64 })} 
                  />*/}
                  </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={errors.abstract && touched.abstract}
                    name="abstract" multiline
                    value={values.abstract}
                    rows={2}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    label="Tóm tắt"
                    helperText={
                      errors.abstract && touched.abstract
                        ? errors.abstract
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.creator && touched.creator}
                    name="creator"
                    value={values.creator}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Tác giả"
                    helperText={
                      errors.creator && touched.creator
                        ? errors.creator
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                    
                <CKEditor 
                    editor={ClassicEditor}
                    data={content || ''}
                    onChange={(event, editor) => {
                        setContent(editor.getData());
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

export default FormNew;
