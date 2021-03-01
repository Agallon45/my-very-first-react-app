import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css'


const useStyles = makeStyles({
  root: {
    minWidth: 800,
    maxWidth: 800,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 5px',
    transform: 'scale(1)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
   const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;
const regex = /(<([^>]+)>)/ig;
const [error, setError] = useState(null)
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
const [fetchLink, setFetchLink] = useState(null);
const defFetch = 'https://brottsplatskartan.se/api/events/?area=uppsala%20l%C3%A4n';


useEffect(() => {
    fetch('https://brottsplatskartan.se/api/events/?area=uppsala%20l%C3%A4n')
    .then(x => x.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setItems(result.data[props.nr]);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
}, [])

  return (
    

    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {items.title_location}
        </Typography>
        <Typography variant="h5" component="h2">
              Brottstyp: {items.title_type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {items.title_style}
        </Typography>
        <Typography variant="body2" component="p">
        {items.content.replace(regex, '')}
        <br/>
        {items.date_human}
        <br/>
        <img src={items.image}></img>
        <br/>
        {items.location_string}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={items.permalink}>Learn More</Button>
      </CardActions>
    </Card>
    
  );
}

