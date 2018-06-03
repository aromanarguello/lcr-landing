import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Schedule.styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { ScheduleData } from './ScheduleData'
import GoogleMaps from './GoogleMap'

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
      <div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid 
            container
            className={classes.demo}
            justify="center"
            spacing={Number(this.state.spacing)}>
            {ScheduleData.map(value => (
              <Grid item>
                <Paper className={classes.paper} 
                       style={styles.typography}
                       elevation={7}>
                <h2 style={styles.text} >{value.name}</h2>
                <h3 style={styles.text} >{value.tel}</h3>
                <div style={styles.text}>
                    <h3>{value.fax}</h3>
                </div>
                   <p style={styles.text}>{value.schedule}</p>
                   <div style={styles.text} ><p>{value.location}</p></div> 
                    <div>
                      <iframe frameBorder="0" 
                        src="https://www.google.com/maps/embed/v1/place?q=12.1149926,-86.2361744&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk">
                     </iframe>
                     {/* <GoogleMaps lon={-86.2361744} lat={12.1149926}  /> */}
                    </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
      </div>
    );
  }
}

ScheduleCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleCards);