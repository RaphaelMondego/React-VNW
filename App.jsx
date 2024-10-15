// App.jsx -> Arquivo principal, onde vamos juntar os componentes.
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./global.scss"

//  <> </> --> se chama fragmento. Tag invisível.

function App(){
  return(
    <>
     <Header/>
     <Main/>
    </>
  ) 
}
export default App 