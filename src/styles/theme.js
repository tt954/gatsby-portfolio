import { extendTheme } from "@chakra-ui/react"

const theme = {
  fonts: {
    heading: "Roboto",
    body: "Inconsolata, monospace",
  },
  colors: {
    black: "#000",
    white: "#fff",
    dark: "#2b2c34",
    light: "#fffffe",
    indigo: "#6246ea",
    pink: "#e45858",
  },
}

export default extendTheme(theme)
