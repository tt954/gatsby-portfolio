import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8ba7",
    },
    secondary: {
      main: "#ffc6c7",
    },
    tertiary: {
      main: "#c3f0ca",
    },
  },
  mediaQueryThreshold: {
    M: 600,
    L: 1024,
  },
})

export default theme
