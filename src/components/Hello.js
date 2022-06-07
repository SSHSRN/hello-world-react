import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hey there!</h1>
    //     </div>
    // )

    // return React.createElement('div', null, React.createElement('h1', null, 'Hey there!'))
    return React.createElement('div', {id: 'hello', className: 'hello'}, React.createElement('h1', null, 'Hey there!'))
    // The second value in the React.createElement() method is an object of key-value pairs that will be applied to the element.
}

export default Hello;