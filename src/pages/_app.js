// 1. import `NextUIProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme} from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import PageContextProvider from "../contexts/PageContext";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
     
  }
})

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app

    <PageContextProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
        enableSystem={true}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </PageContextProvider>
  );
}

export default MyApp;
