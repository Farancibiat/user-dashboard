import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { ContactList } from "./pages/contactList";
import { MainUser } from "./pages/mainUser";
import { WebDesign } from "./components/webdesign";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop>
        <WebDesign>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<MainUser />} />
            <Route path="/contactList" element={<ContactList />} />
          </Routes>
        </WebDesign>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
