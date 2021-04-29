import React from "react"
import NavbarEx from "./components/NavbarEx"
import JumbotronEx from "./components/JumbotronEx"

class App extends React.Component {
  render(){
    return(
      <div className="div">
        <NavbarEx/>
        <JumbotronEx/>
      </div>
    )
  }
}


export default App