import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    courseContainer: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        transition: 'box-shadow 0.5s ease-in-out',
        '&:hover': {
          boxShadow: theme.palette.mode === 'dark' ? theme.shadows[8] : 'none',
        },
      },
      image: {
        width: '100%',
        height:'300 !important',
        transition: 'transform 0.5s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
      swiperRoot: {
        paddingBottom: "40px",
     
        "& .swiper-button-next": {
          color: `${theme.palette.primary.main} !important`,
        },
        "& .swiper-button-prev": {
          color: `${theme.palette.primary.main} !important`,
        },
        "& .swiper-pagination-bullet": {
          opacity: "1",
          backgroundColor: "#bcbcbc !important",
          width: "10px !important",
          height: "10px !important",
          color: "inherit !important",
        },
        "& .swiper-pagination-bullet-active": {
          opacity: "1",
          color: `${theme.palette.primary.main} !important`,
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
      },
      eventDateTitle: {
        paddingTop: '5px', // Use camelCase for property names
        paddingBottom: '5px', // Use camelCase for property names
        width: '50%', // Use camelCase for property names
        position: 'absolute',
        bottom: '-15px', // Use quotes for values with unit (e.g., '-15px')
        transform: 'translateX(50%)', // Use quotes for values with unit (e.g., 'translateX(50%)')
        textAlign: 'center', // Use camelCase for property names
      },
      overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: theme.palette.primary.dark,
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out',
        '&:hover': {
          opacity: 0.5,
        },
      },
      userInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out',
        '&:hover': {
          opacity: 1,
        },
      },
      avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2),
      },
      priceContainer: {
        position: 'absolute',
        top: theme.spacing(-7),
        right: theme.spacing(6),
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out',
        '&:hover': {
          opacity: 1,
        },
      },
      price: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50%',
        boxShadow: theme.shadows[8],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
      },
}));
  export default useStyles;