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
import { useForm, Form } from "../components/useForm";
import Input from "../components/controls/Input";
import DropDown from "../components/controls/DropDown";

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

  const { formValues, setFormValues, handleInputChange } = useForm(
    initialFormValues
  ); // abstracting the state, state update, and input change handler into a separate function.

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 2: upon submission, validate function will check and return a boolean depending on if there are any error messages
    // because
    if (validate()) {
      // returns a Boolean based on the validate functionality
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
            <Form handleSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input
                    type="text"
                    name="name"
                    label="Product Name"
                    value={formValues.name}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    type="text"
                    name="brand"
                    label="Brand"
                    value={formValues.brand}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    type="text"
                    name="description"
                    label="Description"
                    value={formValues.description}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    type="text"
                    name="image"
                    label="Image URL"
                    value={formValues.image}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    type="number"
                    name="price"
                    label="Price"
                    value={formValues.price}
                    handleInputChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DropDown
                    name="category"
                    label="Category"
                    value={formValues.category}
                    handleInputChange={handleInputChange}
                    menuItemArray={categories}
                  />
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
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Back to Shop
                </Button>
              </Grid>
            </Form>
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
