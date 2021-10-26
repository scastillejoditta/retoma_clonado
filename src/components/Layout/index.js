import { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";

import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Layout({children}) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    )
}
