import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import BlogHome from "./Components/Blog/BlogHome";
import Blog from "./Components/Blog/Blog";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Central Door Services</title>
        <meta
          name="description"
          content="Central Door Services offers top-notch commercial and residential garage door installations and repairs in Austin, Texas. Contact us today for reliable and professional service."
        />
        <meta
          name="keywords"
          content="garage door repair, commercial, commercial installation, garage door installation, Austin, TX, commercial garage doors, residential garage doors, Central Door Services"
        />
        <meta
          property="og:title"
          content="Central Door Services | Commercial Door Installations & Repairs in Austin, TX"
        />
        <meta
          property="og:description"
          content="Central Door Services is your trusted provider for commercial and residential garage door installations and repairs in Austin, Texas."
        />
        <meta property="og:image" content="https://imgur.com/zdXJVgy" />
        <meta property="og:url" content="https://www.centraldoorservices.com" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Central Door Services | Commercial Door Installations & Repairs in Austin, TX"
        />
        <meta
          name="twitter:description"
          content="Central Door Services offers reliable commercial door installations and repairs for both commercial and residential clients in Austin, Texas."
        />
        <meta name="twitter:image" content="https://imgur.com/zdXJVgy" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.centraldoorservices.com" />
      </Helmet>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<BlogHome />} />
          <Route exact path="/blog/:title" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
