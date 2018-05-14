// rgba gray: rgba(189,189,189, 0.2)

export const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginRight: '20px',
      width: '170px',
      height: '40px',
      backgroundColor: 'white',
      fontFamily: 'roboto',
      fontSize: '18px',
      borderRadius: '3px',
      textAlign: 'center',
      '&:hover': {
        // width: '200px',
        // height: '60px',
        transitionDuration: '0.3s',
      }
    }),


  });