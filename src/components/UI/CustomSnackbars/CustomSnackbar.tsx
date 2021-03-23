import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {IError} from '../../../redux/user/userInterfaces';

interface Props {
  open: boolean | undefined,
  message: IError | undefined,
  handleClick: () => void,
  handleClose: () => void,
}

const SimpleSnackbar: React.FC<Props> = (props) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        message={props.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default SimpleSnackbar
