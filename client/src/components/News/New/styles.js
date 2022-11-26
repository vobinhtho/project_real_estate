import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  root: {
    display: 'flex',
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
   
});