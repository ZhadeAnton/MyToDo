import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {makeStyles, Theme} from '@material-ui/core';

interface Props {
  open: boolean | undefined,
  message: string | null | undefined,
  success?: boolean,
  handleClick: () => void,
  handleClose: () => void,
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    'width': '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomSnackbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar
        disableWindowBlurListener={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
      >
        <Alert onClose={props.handleClose} severity="error">
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar
