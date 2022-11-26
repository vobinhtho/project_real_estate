import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteTintuc } from '../../../store/actions/tintucsAction';

const New = ({ item, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
 console.log(item);
  return (
    <Card className={classes.root}>
    <CardMedia
        className={classes.cover}
        image={item.cover}
        title={item.image_decription}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.titleNew} color="primary">
            {item.title}
          </Typography>
          <Typography className={classes.date_tintuc}>
            {moment(item.createdAt).format('DD-MM-YYYY, h:mm:ss a')}
          </Typography>
          <Typography className={classes.tomtatNew}>
            {item.abstract}
          </Typography>
        </CardContent>
        <div className={classes.button_tintuc}>
          <Button size="small" color="primary" onClick={()=>(setCurrentId(item._id))}>
            Edit
          </Button>
          <Button size="small" color="secondary" onClick={() => dispatch(deleteTintuc(item._id))}>
            Delete
          </Button>
        </div>
      </div>
      
    </Card>
  );
};

export default New;
