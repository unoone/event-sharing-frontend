import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Background from '../Assets/LogoHD.png';


const styles = theme => ({
    Logo: {
        background: `url(${Background})`,
        width: '100px',
        height: '398px',
        backgroundSize: 'cover',
        margin: '0 auto',
        marginTop: '20px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        flexWrap: 'wrap',
        marginTop: '60px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button0: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #e5e531 80%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        marginTop: '10px',
        marginRight: '15px'
    },
    button1: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: '10px',
        marginLeft: '15px'
    },
    buttons:{
        display:'flex',
        flexDirection:'row'
    }
});

const TextFieldMargins = props => {
    const {classes} = props;


    return (
        <div className={classes.container}>
           <div className={classes.Logo}>

           </div>
            <TextField
                label="Login"
                id="margin-login"
                className={classes.textField}
                helperText=""
            />
            <TextField
                label="Password"
                type='password'
                id="margin-password"
                className={classes.textField}
                helperText="min.8 characters"
                margin="dense"
            />
             <div className={classes.buttons}>
            <Button className={classes.button0}>
                {'sign in'}
            </Button>
            <Button className={classes.button1}>
                {'sign up'}
            </Button>
        </div>



        </div>

    );
};

TextFieldMargins.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins)