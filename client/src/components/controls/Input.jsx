import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, label, value, handleInputChange } = props;
  return (
    <TextField
      fullWidth
      type="text"
      autoComplete="fname"
      name={name}
      variant="outlined"
      required
      id={name}
      label={label}
      autoFocus
      value={value}
      onChange={handleInputChange}
      // Step 3: In ALL the input fields, conditionally render the "error" property and the "helperText" property with the error message
    //   {...(errors.name && {
    //     error: true,
    //     helperText: errors.name,
    //   })}
    />
  );
};

export default Input;
