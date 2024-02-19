import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    marginTop: theme.spacing(24),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(16),
    },
    marginBottom:10
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    marginTop: theme.spacing(8),
  },
  card: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    boxShadow: theme.palette.mode === 'dark' ? theme.shadows[8] : theme.shadows[2],
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.palette.mode === 'dark' ? theme.shadows[12] : theme.shadows[8],
    },
  },
  media: {
   
    // paddingTop: '56.25%', // 16:9 aspect ratio
  },
  content: {
    padding: theme.spacing(6),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'medium',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  description: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
  btnLink: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
  export default useStyles;