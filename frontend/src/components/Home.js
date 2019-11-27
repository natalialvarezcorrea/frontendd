import React, { Fragment } from 'react';
import Carrousel from '../components/Slider/Carrousel';
import CardPrincipal from '../components/cards/CardPrincipal';
import Footer from '../components/Footer/Footer';


function Home() {
    return (
        <Fragment>
            <Carrousel />
            <CardPrincipal />
            <Footer />
        </Fragment>
    );
}

export default Home;








