import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    marginTop: '24px',
    paddingTop: '16px',
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
    },
  },
  absoluteOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: '0.25',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity and color as needed
    backgroundImage: `url('C:/Users/heade/OneDrive/Desktop/b2b/desktop/techwind-tailwind-css-multipurpose-landing-template9/Techwind_v1.9.0/HTML/dist/assets/images/consulting/1.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  title: {
    marginBottom: '4px',
    fontSize: '2xl',
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      fontSize: '3xl',
      lineHeight: 'normal',
    },
  },
  description: {
    color: theme.palette.text.secondary,
    maxWidth: 'xl',
    margin: 'auto',
  },
  industryItem: {
    position: 'relative',
    padding: '8px',
    backgroundColor: theme.palette.mode === 'light' ? 'white' : '#2d3748',
    boxShadow: theme.shadows[1],
    borderTop: '3px solid #E5E7EB',
    borderColor: theme.palette.mode === 'light' ? 'gray.100' : 'gray.700',
    transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
    '&:hover': {
      boxShadow: theme.shadows[3],
      borderColor: theme.palette.mode === 'light' ? 'indigo.600' : 'indigo.600',
    },
  },
  icon: {
    fontSize: '3xl',
    color: 'indigo.600',
    marginRight: '8px',
  },
}));
  export default useStyles;