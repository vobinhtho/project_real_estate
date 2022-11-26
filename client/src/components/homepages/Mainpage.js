import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import Content from "./Content";
import Footer from "./Footer.js";
import Header from "./Header";

import useStyle from './styles'

const Mainpage = () =>{
    const classes = useStyle();
    return(
        <div>
        <CssBaseline />
        <Container className={classes.container} maxWidth="xl">
         <Header/>
        </Container>
        <Container className={classes.container} maxWidth="xl">
            <Content/>
        </Container>
        <Container className={classes.container} maxWidth="xl">
            <Footer/>
        </Container>
        </div>
    );
}
export default Mainpage;