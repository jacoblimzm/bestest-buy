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
import Box from '@material-ui/core/Box';

import { Grid, Hidden } from "@material-ui/core";


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
        width: 1200,
        height: 1080,
        justifyContent: 'center',
        display: 'flex',
    },
    homelogocenter: {
        marginTop: 450,

    },
    hometextcenter: {
        marginTop: 500,
        alignItems: 'center',
        marginLeft: -255,
    },
    backgroudImage: {
        width: 1920,
    },
}));

export default function Home() {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        axios.get("/categoriesbackend").then((res) => {
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


            <Grid container spacing={4} justify="center">
                <img src="https://i.imgur.com/AhvmtfB.jpg" className={classes.backgroudImage} edge="start" />
                <Box className={classes.btnDown} textAlign='center' position="absolute"
                    top={870}
                    left="45%"
                    zIndex="tooltip" >
                    <h3>Scroll down to shop</h3>
                    {/* <Button variant="contained" color="primary">
                        Shop now</Button> */}
                </Box>

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
            {/* <Button className={classes.marginAutoItem}>Scroll up</Button> */}
        </>
    )
}
