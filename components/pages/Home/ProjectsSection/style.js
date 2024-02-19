import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    padding: "8px 0px",
    backgroundImage: `url(${props.backgroundImage})`,
   
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop:'50px'
  }),
  container: {
    position: 'relative',
    marginTop: theme.spacing(24),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(16),
    },
    marginBottom:10
  },
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
  },
  // Title class
  title: {
    color: theme.palette.onBackground.light,
    margin: "8px 0px !important",
  },
  // SubTitle class
  subTitle: {
    color: theme.palette.onBackground.main,
    margin: "8px 0px !important",
    fontWeight: "600 !important",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  buttonClass: {

    position: 'absolute',
    color: theme.palette.primary.main,
    bottom: 0,
    right: 0,
    padding: 16, /* Assuming theme.spacing(2) equals 16px */
    marginTop: 72, /* Assuming theme.spacing(4) equals 32px */
  },
}));

export default useStyles;
