import React from "react"

import { Jumbotron,Button } from "react-bootstrap"

class JumbotronEx extends React.Component {
    render(){
        return(
            <div className="div">
                <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    Acesta a fost Tema mea,dedicata mentorului meu Iulica
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
            </div>
        )
    }
}


export default JumbotronEx