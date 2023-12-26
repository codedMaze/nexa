import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { PContainer } from "../page/page.style";
import Quote from "../page/Quote";

const Root = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <PContainer>
        <Quote />
      </PContainer>
    </>
  );
};

export default Root;
