import "./assets/css/App.css";
  
import NavBar from "./components/NavBar";
import Weather from "./components/Weather";
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <div className="App">

      <NextUIProvider>
      <NavBar />
      <Weather /> 
     </NextUIProvider>
     
    </div>
  );
}

export default App;