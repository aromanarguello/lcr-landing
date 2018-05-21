import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Schedule.styles'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ScheduleData } from './ScheduleData'

class ScheduleCards extends Component {
  constructor(props){
    super(props)
    this.state = {
      spacing: '40',
      elevationNumber: 0,
    }
  this.handleHover = this.handleHover.bind(this)
  this.handleFadeOut = this.handleFadeOut.bind(this)
  }
  handleHover() {
    this.setState({
      elevationNumber: 3
    })
  }
  handleFadeOut() {
    this.setState({
      elevationNumber: 0
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(this.state.spacing)}>
            {ScheduleData.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} 
                       style={styles.typography}
                       elevation={7}>
                <Typography style={styles.text} >
                    <h2>{value.name}</h2>
                </Typography>
                <Typography style={styles.text} >
                    <h3>{value.tel}</h3>
                </Typography>
                <Typography style={styles.text} >
                    <h3>{value.fax}</h3>
                </Typography>
                <Typography style={styles.text} >
                    <p>{value.schedule}</p>
                </Typography>
                <Typography style={styles.text} >
                    <p>{value.location}</p>
                    <div>
                      <iframe frameBorder="0" 
                        src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk">
                     </iframe>
                    </div>
                </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

ScheduleCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleCards);