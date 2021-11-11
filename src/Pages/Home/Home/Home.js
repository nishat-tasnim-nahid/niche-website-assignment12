import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <SecondBanner></SecondBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;