import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
import { useHistory } from "react-router";
import { useForm } from "../components/useForm";

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

const initialFormValues = {
  name: "",
  brand: "",
  description: "",
  category: "",
  image: "",
  price: "",
};

const AddProduct = () => {
  const classes = useStyles();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const {formValues, setFormValues, handleInputChange} = useForm(initialFormValues);

  // Step 1: Define form validate function which will check if the formValues state is empty or not
  const validate = (fieldValues = formValues) => {
    // pass in the formValues state as a default argument and assign to "fieldValues" parameter as an intermediate object variable to use.
    // this is necessary to prevent user from submitting and empty form which will crash the if statements as fieldValues will be an empty object.
    // if (... in ) does not work on undefined
    // in order to make sure the existing errors in state don't get overwritten, have to spread the error state
    const tempError = { ...errors };

    // while the inputs are changing, fieldValues object parameter only has one property, in the form of [name]: value. these checks do single input validation.
    if ("name" in fieldValues) {
      tempError.name = fieldValues.name ? "" : "This field is required.";
    }
    if ("brand" in fieldValues) {
      tempError.brand = fieldValues.brand ? "" : "This field is required.";
    }
    if ("description" in fieldValues) {
      tempError.description =
        fieldValues.description.length > 5 ? "" : "Minimum 5 characters.";
    }
    if ("category" in fieldValues) {
      tempError.category = fieldValues.category
        ? ""
        : "This field is required.";
    }
    if ("image" in fieldValues) {
      tempError.image = fieldValues.image ? "" : "This field is required.";
    }
    if ("price" in fieldValues) {
      tempError.price = fieldValues.price > 0.1 ? "" : "Minimum $0.1.";
    }
    setErrors({
      ...tempError,
    });

    // Object.values returns an array with the values of an object. Check to see if every error message is blank. Only if all blank, return true
    return Object.values(tempError).every((errorString) => errorString === "");
  };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });

//     // while input is changing, pass in an  OBJECT to the validate function which will take the [name]: value of the input that has changed.
//     validate({ [name]: value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 2: upon submission, validate function will check and return a boolean depending on if there are any error messages
    // because
    if (validate()) { // returns a Boolean based on the validate functionality
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
      setFormValues(initialFormValues);
      setDialogOpen(true);
    }
  };

  const handleReset = () => {
    setFormValues(initialFormValues);
    setErrors({});
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
                    // Step 3: In ALL the input fields, conditionally render the "error" property and the "helperText" property with the error message
                    {...(errors.name && {
                      error: true,
                      helperText: errors.name,
                    })}
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
                    {...(errors.brand && {
                      error: true,
                      helperText: errors.brand,
                    })}
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
                    {...(errors.description && {
                      error: true,
                      helperText: errors.description,
                    })}
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
                    {...(errors.image && {
                      error: true,
                      helperText: errors.image,
                    })}
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
                    {...(errors.price && {
                      error: true,
                      helperText: errors.price,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    {...(errors.category && {
                      error: true,
                      helperText: errors.category,
                    })} // for DropDown the error and the error message is in FormControl
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
                    <FormHelperText>
                      {errors.category ? errors.category : "Required"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Add Product
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Grid>
                <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
                    onClick={() => { history.push("/")}}
                  >
                    Back to Shop
                  </Button>
              </Grid>
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
