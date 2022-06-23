import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import { useHistory } from 'react-router-dom';

const useStyles = styled((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Room({room}){
  console.log(room);
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
  return (
    <Card style={{margin:"10px"}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {room.avatar}
          </Avatar>
        }
        title={room.title}
      />

      <CardMedia
        className={classes.media}
        style={{height:"200px"}}
        image={room.imgUrl}
        title="Paella dish"
      />
      <img src={`/images/${room.bedType}.png`} alt=""/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LocalHotelIcon />: {room.bed} 
        </IconButton>
        <IconButton aria-label="share">
          <WcSharpIcon />: {room.capacity} 
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneySharpIcon />: {room.price} 
        </IconButton>
        <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
            Book
        </Button>
      </CardActions>
    </Card>
  );
}
