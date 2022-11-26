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
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  content: {
    
  },
  // cover: {
  //   width: '100%',
  //   minWidth:220,
  //   maxWidth:220,
  //   minHeight:200,
  //   height:200
  // },
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
  },
  paperMap:{padding:10},
  btns:{
    marginTop:5
  },
  contentProject:{
    paddingTop:55,
    backgroundColor:'white'
  },
  cover: {
    width: 375,
    minWidth:375,
    minHeight:220,
    height:220,
    objectFit:"cover"
  },
  content_abstract:{
    fontSize:14
  },
  date_tintuc:{
    fontSize:17,
    color:'grey',
    marginBottom:5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  
  titleNew1: {
    fontSize:17,
    color:'black', fontWeight:500,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
 
  linkHome:{
    textDecoration:'none',
    color:'#666666'
  },
  containProjectItem:{
    backgroundColor:'white',
    marginTop:1,
    paddingTop:60,
    paddingBottom:100
  },
  paperMap:{
    padding:10
  },
  titleProject:{
    fontWeight:'500',
    fontSize:35,
  },
  cardListImg:{ 
    marginRight:8, 
    height:240,
  },
  titleChiMuc:{
    fontSize:25, color:'#ac7b40', textTransform:'uppercase'
  },
}));
