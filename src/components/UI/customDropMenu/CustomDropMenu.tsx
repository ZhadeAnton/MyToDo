import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  children: React.ReactNode,
  items: any,
}

const CustomDropMenu: React.FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        {
          props.children
        }
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.items.map((item: any, index: number) => {
          return <MenuItem
            key={index}
            onClick={handleClose}
          >{item}</MenuItem>
        })
        }
      </Menu>
    </div>
  );
}

export default CustomDropMenu

{/* <MenuItem onClick={handleClose}>a{console.log('am live')}</MenuItem>
<MenuItem onClick={handleClose}>My account</MenuItem>
<MenuItem onClick={handleClose}>Logout</MenuItem> */}
