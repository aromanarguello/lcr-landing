import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { style } from './Button.styles'

function SendButton(props) {
    const { classes } = props;
    return (
    <Button className={classes.button} variant="raised" color="primary" >
        Enviar
    </Button>
    )
}

SendButton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(SendButton)