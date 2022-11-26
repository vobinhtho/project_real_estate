import { makeStyles } from '@material-ui/core/styles';
import backgroundAccount from '../img/backgroundhome1.jpg'
import backgroundLogin from '../img/background7.jpg'

export default makeStyles((theme)=>({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    flexGrow: 1,
  },
  
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperAccount2: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
    width:1100,
    margin:'auto',
    textAlign:'center',
    color:'#757575',
    marginBottom:50
  },
  paperAccount1: {
    padding: 30,
    textAlign:'center',
    color:'#757575',
    marginBottom:50,
    width:400,
    height:200
  },
  paperLogin: {
    marginTop: 1,
    flexGrow:1,
    paddingTop:60,
    paddingBottom:150,
 //   marginBottom:50,
    backgroundImage: `url(${backgroundAccount})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    
  },
 

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding:15
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  block:{
    backgroundColor:'#5664d2',
    color:'white',
    width:40,
    height:40,
    padding:5,
    borderRadius:50,
    marginBottom:15
  },
  btnSignIn:{
    backgroundColor:'#5664d2', 
    color:'white',
    marginTop:20,
    marginBottom:20
  },
  iconKey:{height:30,width:30},
  styleLink1:{color:'blue',textDecoration:'none'},
  styleLink2:{
    color:'#3f51b5', textDecoration:'none'
  },
  iconLock:{
    backgroundColor:'#5664d2',
    color:'white',
    width:50,
    height:50,
    padding:5,
    borderRadius:50,
    marginBottom:15
  },
  imgAvatar:{
    height:150,
    width:150,
    borderRadius:'100%',
    //margin:30,
    borderColor:'blue'
  },
  welcom:{
    marginTop:45,
    fontSize:60, textAlign:'left',
    fontFamily:'Caveat',
    color:'#4174a6'
  },
  btnUpdateAvatar:{
    marginTop:15,
    marginLeft:-60
  },
  containLogin:{
    backgroundImage: `url(${backgroundLogin})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:920,
    marginBottom:4
  },
  paperLogin1: {
    padding:30,
    flexGrow:1,
    textAlign:'center',
    margin:'auto',
    backgroundColor:'white',
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 35,
    margin:'auto',
    textAlign:'center',
    color:'#757575',
    marginBottom:50,
    backgroundColor:'white',
    
  },
  containLogin2:{
    backgroundColor:'#333333',
    padding:140,
    height:920
  },
  containSignUp:{
    backgroundColor:'#333333',
    height:920,
    padding:50
  }
}));