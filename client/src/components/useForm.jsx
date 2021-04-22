import { makeStyles } from "@material-ui/core";
import { useState } from "react";

// ----------------------------- REUSABLE STATE AND INPUT CONTROL FOR FORMS -----------------------------
const useForm = (initialFormValues, onChangeValidation = false, validate) => {
  const [formValues, setFormValues] = useState(initialFormValues); // state for making the form controlled
  const [errors, setErrors] = useState({}); // state for maintaining errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (onChangeValidation) {
      // while input is changing, pass in an  OBJECT to the validate function which will take the [name]: value of the input that has changed.
      validate({ [name]: value });
    }
  };
  // abstract form reset into useForm reusable component
  const handleReset = () => {
    setFormValues(initialFormValues);
    setErrors({});
  };

  return {
    formValues,
    setFormValues,
    errors,
    setErrors,
    handleInputChange,
    handleReset,
  };
};

// ----------------------------- REUSABLE FORM COMPONENT -----------------------------
const useStyles = makeStyles((theme) => ({
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

const Form = (props) => {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <form
      className={classes.form}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      {props.children}
    </form>
  );
};

export { useForm, Form };
