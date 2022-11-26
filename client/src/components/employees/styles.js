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
      width:432
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
  name_employee:{
    marginLeft:10
  }
}));
