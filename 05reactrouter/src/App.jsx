// no use we have iplemented routing
import { useState } from "react";
import { BrowserRouter } from "react-router";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* Your application components */}
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
