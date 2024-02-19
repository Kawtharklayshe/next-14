import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container:  (props) => ({
        position: 'relative',
        background: `url(${props.backgroundImage})`,
        marginTop: theme.spacing(24), // Equivalent to md:mt-24 in Tailwind
        [theme.breakpoints.up('md')]: {
          marginTop: theme.spacing(16), // Equivalent to mt-16 in Tailwind
        },
      
      }),
      grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(8), // Equivalent to gap-[30px] in Tailwind
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        marginTop: theme.spacing(8), // Equivalent to mt-8 in Tailwind
      },
      card: {
        position: 'relative',
        overflow: 'hidden',
        height: 300,
        boxShadow: theme.palette.mode === 'dark' ? theme.shadows[8] : 'none',
        backgroundColor: 'transparent !important' , // Making the card background transparent
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.5s ease-in-out',
        },
      },
      contentContainer: {
        position: 'relative',
        overflow: 'hidden',
      },
      titleContainer: {
      
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom:20,
        textAlign: 'center',
        padding: theme.spacing(2),
      },
      media: {
        height: 200, // Specify the height of the image
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
      
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
      },
  }));

  export default useStyles;