import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';

const SubmitDialog = ( {dialogOpen, setDialogOpen} ) => {
  const history = useHistory();


  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleProceedToShop = () => {
    setDialogOpen(false);
    history.push("/products/All");
  }

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="submit-success"
        aria-describedby="submit-success"
      >
        <DialogTitle id="welcome-message">{"Welcome to Bestest Buy!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-message">
            Success! The item is now stored in the database and ready to be sold.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Add One More Item/Edit Item
          </Button>
          <Button onClick={handleProceedToShop} variant="outlined" color="primary" autoFocus>
            Proceed to Shop
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubmitDialog
