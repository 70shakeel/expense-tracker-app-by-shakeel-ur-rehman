import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <History />
        <NewTransaction />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
