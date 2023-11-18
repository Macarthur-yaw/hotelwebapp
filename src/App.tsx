import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css';
import { createContext, useState } from "react";

const OverlayContext = createContext<boolean |null>(null);

function App() {
  const [overlay, setOverlay] = useState<boolean |null >(false);

  return (
    <div>
      <OverlayContext.Provider value={ overlay }>
        <Navbar />
        <Body />
        <Footer />
      </OverlayContext.Provider>
    </div>
  );
}

export { OverlayContext };
export default App;
