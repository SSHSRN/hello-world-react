import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        // return <h1>This is a message returned from a class component.</h1>
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                <h1>This is a message returned from a class component.</h1>
            </div>
        )
    }
}

export default Welcome