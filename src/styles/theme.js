import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Also check `gatsby-config.js`
export const PRIMARY_COLOR = "#666";
export const SECONDARY_COLOR = "#0094FF";
export const DEFAULT_COLOR = "#222";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    default: {
      main: DEFAULT_COLOR,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    subtitle: {
      fontFamily: '"Helvetica Neue"',
    }
  }
});
