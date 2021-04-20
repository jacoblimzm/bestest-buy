import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//material-ui imports
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
//To configure material-ui
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 200,
    },
    marginAutoItem: {
        margin: 'auto'
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginAutoContainer: {
        width: 1920,
        height: 1080,
        justifyContent: 'center',
        display: 'flex',
    },
    homelogocenter: {
        marginTop: 500,
        marginLeft: 100,

    },
    hometextcenter: {
        marginTop: 550,
        alignItems: 'center',
        marginLeft: -255,
    },
    homeshopbtncenter: {
        marginTop: 900,
        alignItems: 'center',
        marginLeft: -200,
    },
}));

export default function Home() {
    const [Category, setCategory] = useState([]);
    const [categories, setCategories] = useState({});
    useEffect(() => {
        axios.get("/productsbackend").then((res) => {
            console.log(res.data);
            setCategory(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Go to category page");
    }
    const classes = useStyles();

    return (
        <>
            <div className={classes.marginAutoContainer}>

                <h1 className={classes.homelogocenter}>BESTEST BUY</h1>

                <h3 className={classes.hometextcenter}>Your shopping spree starts now.</h3>

                <Button className={classes.homeshopbtncenter}>Shop now</Button>
            </div>
            <Grid container spacing={4} justify="center">
                {Category.map((categories) => {
                    return (
                        <Grid item sm={4} md={3} >
                            <Card className={classes.root}>
                                <CardActionArea onClick={handleClick}>
                                    <Link to={`/products/${categories.category}`} >
                                        <CardMedia
                                            className={classes.media}
                                            image={categories.image}
                                            title={categories.category}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {categories.category}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                    <CardActions>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <Button className={classes.marginAutoItem}>Scroll up</Button>
        </>
    )
}
