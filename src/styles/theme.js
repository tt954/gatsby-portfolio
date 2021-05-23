import { extendTheme } from "@chakra-ui/react"

const theme = {
  fonts: {
    heading: "Roboto, sans-serif",
    sansserif: "Montserrat, sans-serif",
    body: "Inconsolata, monospace",
  },
  colors: {
    black: "#000",
    white: "#fff",
    dark: "#2b2c34",
    gray: { 300: "#66677A", 500: "#545564", 900: "#383943" },
    light: "#fffffe",
    indigo: "#6246ea",
    pink: "#e45858",
  },
}

export default extendTheme(theme)
