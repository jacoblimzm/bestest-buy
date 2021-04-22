import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import SubmitDialog from "../components/SubmitDialog";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddProduct = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    description: "",
    category: "",
    image: "",
    price: "",
  });
  const [categories, setCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/productsbackend", {
        name: e.target.name.value,
        brand: e.target.brand.value,
        description: e.target.description.value,
        category: e.target.category.value,
        image: e.target.image.value,
        price: e.target.price.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormValues({});
    setDialogOpen(true);
  };

  useEffect(() => {
    axios
      .get("/categoriesbackend")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Grid container direction="row" justify="center">
        <Grid item xs={8} sm={6} md={4}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BusinessIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              We're always expanding. Add new products for sale!
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    required
                    id="name"
                    label="Product Name"
                    autoFocus
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    required
                    id="brand"
                    label="Brand"
                    name="brand"
                    autoComplete="brand"
                    value={formValues.brand}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Short Description"
                    name="description"
                    autoComplete="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="image-url"
                    label="Image URL"
                    name="image"
                    autoComplete="image-url"
                    value={formValues.image}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="number"
                    id="price"
                    autoComplete="price"
                    value={formValues.price}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-select-input"
                      id="category-select-input"
                      name="category"
                      value={formValues.category}
                      onChange={handleInputChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {categories.map((category) => {
                        return (
                          <MenuItem
                            key={category._id}
                            value={category.category}
                          >
                            {category.category}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Product
              </Button>
            </form>
          </div>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © Focused Designs "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Grid>
        <SubmitDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      </Grid>
    </>
  );
};

export default AddProduct;
