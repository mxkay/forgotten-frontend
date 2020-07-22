import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const Layout = ({ children, navigation }) => {
    return (
        <>
            <Header navigation={navigation} />
            {children}
            <Footer />
        </>
    )
}

export default Layout;