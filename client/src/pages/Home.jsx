import axios from "axios";
import { useState } from 'react';
//material-ui imports
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//To configure material-ui
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function Home() {
    const [Category, setCategory] = useState([]);
    const [categories, setCategories] = useState({});

    axios.get("/productsbackend").then((res) => {
        console.log(res.data);
        setCategory(res.data);
    }).catch((error) => {
        console.log(error);
    })
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Go to category page");
    }
    const classes = useStyles();

    return (
        <>
            <h4>Your shopping spree starts now.</h4>
            <Button>Shop now</Button>
            <Button>Scroll up</Button>
            {Category.map((categories) => {
                return (
                    <Card className={classes.root}>
                        <CardActionArea onClick={handleClick}>
                            <CardActions>
                                <CardMedia
                                    className={classes.media}
                                    image="https://picsum.photos/500/500"
                                    title={categories.category}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {categories.category}
                                    </Typography>
                                </CardContent>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                );
            })}

        </>
    )
}