export const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginRight: '20px',
      width: '170px',
      height: '40px',
      backgroundColor: 'rgba(189,189,189, 0.2)',
      fontFamily: 'roboto',
      fontSize: '18px',
      borderRadius: '3px',
      '&:hover': {
        opacity: '0.5',
        width: '200px',
        height: '60px',
        transitionDuration: '0.3s'
      }
    }),


  });