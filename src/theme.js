import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,  // Font for headings
    body: `'Open Sans', sans-serif`,  // Font for body text
  },
});

export default theme;