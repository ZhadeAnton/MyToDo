import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'width': '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  error: string
}

const CustomAlert: React.FC<Props> = ({error}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        {error}
      </Alert>
    </div>
  );
}

export default CustomAlert
