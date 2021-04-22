import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, type, label, value, handleInputChange, errorMessage=null } = props;
  return (
    <TextField
      fullWidth
      type={type}
      autoComplete="fname"
      name={name}
      variant="outlined"
      required
      id={name}
      label={label}
      autoFocus
      value={value}
      onChange={handleInputChange}
      // Step 3: In ALL the input fields, conditionally render the "error" property and the "helperText" property with the error message if an error message exists
      {...(errorMessage && {
        error: true,
        helperText: errorMessage,
      })}
    />
  );
};

export default Input;
