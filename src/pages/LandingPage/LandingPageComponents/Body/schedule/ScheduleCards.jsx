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


const scheduleData = [
    {
        name: 'Central',
        tel: '1(800)-333-333',
        fax: '+505-2254-3099',
        location: 'Crt. a Masaya',
        schedule: '6:30 AM - 5:00 PM'
    },
    {
        name: 'Crt. Sur',
        tel: '1(800)-333-333',
        fax: '+505-2254-3099',
        location: 'Crt. a Masaya',
        schedule: '6:30 AM - 5:00 PM'
    },
    {
        name: 'Bolonia',
        tel: '1(800)-333-333',
        fax: '+505-2254-3099',
        location: 'Crt. a Masaya',
        schedule: '6:30 AM - 5:00 PM'
    }
]

class ScheduleCards extends Component {
  constructor(props){
    super(props)
    this.state = {
      spacing: '40',
      elevationNumber: 0,
    }
  this.handleHover = this.handleHover.bind(this)
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
            {scheduleData.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} 
                       style={styles.typography} 
                       elevation={6}>
                <Typography style={styles.text} >
                    <h1>{value.name}</h1>
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
                    {value.location}
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