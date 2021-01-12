import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={LandingScreen} exact />
        <Route path="/products" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
