import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import SubmitDialog from "../components/SubmitDialog";
import { useHistory, useParams } from "react-router";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";

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
  formControl: {
    width: "100%",
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

const EditProduct = () => {
  const classes = useStyles();
  const history = useHistory();
  const { productId } = useParams();
  const [categories, setCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const validate = (fieldValues = formValues) => {
    // pass in the formValues state as a default argument and assign to "fieldValues" parameter as an intermediate object variable to use.
    // this is necessary to prevent user from submitting an empty form which will crash the if statements as fieldValues will be an empty object.
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

  const {
    formValues,
    setFormValues,
    errors,
    setErrors,
    handleInputChange,
    handleReset,
  } = useForm(initialFormValues, true, validate); // abstracting the state, state update, and input change handler into a separate function.

  // Step 1: Define form validate function which will check if the formValues state is empty or not

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 2: upon submission, validate function will check and return a boolean depending on if there are any error messages
    // because
    if (validate()) {
      // returns a Boolean based on the validate functionality
      axios
        .put(`/productsbackend/${productId}`, {
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
      setDialogOpen(true);
    }
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

    axios
      .get(`/productsbackend/findproduct/${productId}`)
      .then((res) => {
        console.log(res.data);
        setFormValues(res.data);
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
              We know things change. Your products should too!
            </Typography>
            <Form handleSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    type="text"
                    name="name"
                    label="Product Name"
                    value={formValues.name}
                    handleInputChange={handleInputChange}
                    errorMessage={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    type="text"
                    name="brand"
                    label="Brand"
                    value={formValues.brand}
                    handleInputChange={handleInputChange}
                    errorMessage={errors.brand}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Input
                    type="text"
                    name="description"
                    label="Description"
                    value={formValues.description}
                    handleInputChange={handleInputChange}
                    errorMessage={errors.description}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Input
                    type="text"
                    name="image"
                    label="Image URL"
                    value={formValues.image}
                    handleInputChange={handleInputChange}
                    errorMessage={errors.image}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    type="number"
                    name="price"
                    label="Price"
                    value={formValues.price}
                    handleInputChange={handleInputChange}
                    errorMessage={errors.price}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.DropDown
                    name="category"
                    label="Category"
                    value={formValues.category}
                    handleInputChange={handleInputChange}
                    options={categories}
                    errorMessage={errors.category}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.CustomButtom
                    buttonText="Edit Product"
                    type="submit"
                    variant="contained"
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.CustomButtom
                    buttonText="Reset"
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={handleReset}
                  />
                </Grid>
                <Controls.CustomButtom
                  buttonText="Back To Shop"
                  type="button"
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </Grid>
            </Form>
          </div>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright ?? Focused Designs "}
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

export default EditProduct;
