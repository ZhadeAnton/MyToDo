import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import {IUser} from '../../redux/user/userInterfaces';
import CustomTooltip from '../UI/customTooltip/CustomTooltip';
import CustomDropMenu from '../UI/customDropMenu/CustomDropMenu';

interface Props {
  user?: IUser | undefined
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

const avatarItems = [
  'allo',
  'priver'
]

const UserAvatar: React.FC<Props> = ({user}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomDropMenu
        items={avatarItems}
      >
        <CustomTooltip title="user">
          <Avatar
            alt="user"
            src={user?.photoURL}
            aria-label="info"
          />
        </CustomTooltip>
      </CustomDropMenu>
    </div>
  );
}

export default UserAvatar
