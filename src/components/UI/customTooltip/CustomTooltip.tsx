import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

interface Props{
  children: any,
  title: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'display': 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const CustomTooltip: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip
        title={props.title}
        aria-label="add"
        enterDelay={50}
      >
        {props.children}
      </Tooltip>
    </div>
  );
}

export default CustomTooltip
