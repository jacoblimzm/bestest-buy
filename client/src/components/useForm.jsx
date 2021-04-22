import { useState } from "react";

const useForm = (initialFormValues) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // while input is changing, pass in an  OBJECT to the validate function which will take the [name]: value of the input that has changed.
    // validate({ [name]: value });
  };
  return {
    formValues,
    setFormValues,
    handleInputChange
  };
};

export { useForm };

