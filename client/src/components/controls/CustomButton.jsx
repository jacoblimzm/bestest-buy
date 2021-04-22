import { Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const CustomButtom = (props) => {

    const classes = useStyles();
  const { buttonText, type, variant, size, color, onClick } = props;
  return (
    <Button
      type={type}
      size={size || "medium"}
      fullWidth
      variant={variant || "outlined"}
      color={color || "primary"}
      className={classes.submit}
      onClick={onClick}
    >
    {buttonText}
    </Button>
  );
};

export default CustomButtom;
