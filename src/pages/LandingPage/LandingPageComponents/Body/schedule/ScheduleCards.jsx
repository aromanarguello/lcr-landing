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
        location: 'Crt. a Masaya'
    },
    {
        name: 'Crt. Sur',
        tel: '1(800)-333-333',
        fax: '+505-2254-3099',
        location: 'Crt. a Masaya'
    },
    {
        name: 'Bolonia',
        tel: '1(800)-333-333',
        fax: '+505-2254-3099',
        location: 'Crt. a Masaya'
    }
]

class ScheduleCards extends Component {
  state = {
    spacing: '40',
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {scheduleData.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} style={styles.typography}>
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
                    {value.location}
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