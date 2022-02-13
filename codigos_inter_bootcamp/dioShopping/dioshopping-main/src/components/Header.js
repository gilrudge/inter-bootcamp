import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import './index.css'

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className="menu-faixa">
            <Typography variant='h3' id='title'>
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button color="" id='btn'>Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="" id='btn'>Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
