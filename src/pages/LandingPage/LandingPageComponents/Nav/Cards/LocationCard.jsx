import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { styles } from './Card.styles'
import 'typeface-roboto'

function PaperSheet(props) {
    const { classes } = props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Oficina Central:
          </Typography>
          <Typography component="p">
            1(800) - 333 - 3333
          </Typography>
        </Paper>
      </div>
    );
  }
  
  PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PaperSheet);
  