import { makeStyles } from "@mui/styles";

// Custom Aniamtion for Hero section
const useStyles = makeStyles((theme) => ({
 
  "@keyframes leftUpfirst": {
    "0%": {
      transform: "translate(0px, 100vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes leftUpSecond": {
    "0%": {
      transform: "translate(0px, 110vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes leftUpThird": {
    "0%": {
      transform: "translate(0px, 120vh)",
    },

    "100%": {
      transform: "translate(0px, 0vh)",
    },
  },

  "@keyframes animateBackground": {
    "0%": {
      transform: "translate(0px, 130vh)",
      opacity: 0,
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      transform: "translate(0px, 0vh)",
      opacity: 1,
    },
  },
}));

export default useStyles;
