import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SubmitDialog = ( {dialogOpen, setDialogOpen} ) => {

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleProceedToShop = () => {
    setDialogOpen(false);

  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Welcome to Bestest Buy!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Success! The item is now stored in the database and ready to be sold.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add One More Item
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
