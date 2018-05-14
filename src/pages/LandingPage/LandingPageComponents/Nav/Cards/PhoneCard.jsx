import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { styles } from './Card.styles'
import 'typeface-roboto'

class PhoneCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elevationNumber: 0
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleFadeOut = this.handleFadeOut.bind(this)
  }
  // handles when mouse moves over card
  handleHover() {
    this.setState({
      elevationNumber: 3
    });
  }
  // handles when mouse moves outside of card thus the fade out
  handleFadeOut() {
    this.setState({
      elevationNumber: 0
    })
  }
 render() {
    return (
      <div>
        <Paper className={this.props.classes.root}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleFadeOut}
              elevation={this.state.elevationNumber}>
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
}


PhoneCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhoneCard);
