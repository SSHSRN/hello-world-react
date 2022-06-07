import React from 'react'


// Normal function representation:
// function Greet() {
//       return (
//         <h1>Hey SSHSRN!</h1>
//       )
// }

// Es6 Arrow function representation:
// export const Greet = () => <h1>Hey SSHSRN!</h1>;

// Using props
const Greet = (props) => {
    console.log(props);
    // Printing the props will give an object with the properties given for the component in the place where it's called.
    // Props is just an object containing the attributes and their values which have been passed
    // return <h1>Hello {props.name} a.k.a {props.heroName}</h1>

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}


// export default Greet
// In default export, the name of the component can be changed in the file where it is imported.

// The same is not possible in named export.

export default Greet
