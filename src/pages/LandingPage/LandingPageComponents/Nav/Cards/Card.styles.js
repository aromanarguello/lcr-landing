// rgba gray: rgba(189,189,189, 0.2)

export const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginRight: 20,
      width: 170,
      height: 40,
      backgroundColor: 'white',
      fontFamily: 'roboto',
      fontSize: 18,
      borderRadius: 3,
      textAlign: 'center',
      '&:hover': {
        transitionDuration: '0.3s',
      }
    }),


  });