import React, { useState } from 'react'
import SearchForm from "../Search"
import Search from '../Search'
import { TopbarDiv } from './styles'
import {FaBars} from 'react-icons/fa'
import {FaExpand} from 'react-icons/fa'
import { MenuItem, Menu, IconButton} from '@mui/material/'
import AccountCircle from '@mui/icons-material/AccountCircle'

const Topbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TopbarDiv>
            <FaBars/>
            <SearchForm>
                <Search>Pesquise d8</Search>
            </SearchForm>
            <FaExpand/>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </TopbarDiv>
    );
}

export default Topbar;