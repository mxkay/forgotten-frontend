import React from "react";
import Header from "../../Header/Header";

const Layout = ({ children, navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      {children}
    </>
  );
};

export default Layout;
