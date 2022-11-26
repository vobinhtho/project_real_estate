import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fileInput: {
//     width: '97%',
//     margin: '10px 0',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width:600
    },
  },
  formSelected: {
    margin: theme.spacing(1),
    minWidth: 432,
  },
  paper: {
    padding: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'center',
  },
  fileInput: {
    width: '90%',
    margin: '10px',
  },
  buttonSubmit: {
    margin: 10,
  },
  buttonright: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  resize: {
    fontSize: 11
  },
  cookieAlert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    
  },
  cover: {
    width: 220,
    minWidth:220,
    minHeight:180,
    height:180
  },
  content_abstract:{
    fontSize:14
  },
  date_tintuc:{
    fontSize:14,
    color:'grey',
    marginBottom:5
  },
  titleNew: {
    fontSize:17,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  tomtatNew: {
    fontSize:15,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
  button_tintuc:{
    marginTop:-15
  }
}));
