import React from 'react';
import ReactDOM from 'react-dom';

// How do use "if" in JSX
// Ternary Operator
// function ValidIndicator() {
//     var isValid = true;
//     return (
//         <span>{isValid ? 'valid' : 'not valid'}</span>
//     );
// }

// You can also use boolean operators such as && like this:

// function ValidIndicator() {
//     var isValid = true;
//     return(
//         <span>
//             {isValid && 'valid'}
//             {isValid && 'not valid'}
//         </span>
//     );
// }


// JSX comments
// JS needs to be inside single braces 
// function makingComments() {
//     return(
//         <span>
//             {/*here is a comment*/}
//         </span>
//     )
// }



// ReactDOM.render(
//     <ValidIndicator/>,
//     document.getElementById('root')
// );

// pg 30 exercise 
// function CreateBook(){
//     return(
//         <div className='book'>
//             <div className='title'>
//                 The Title
//             </div>
//             <div className='author'>
//                 The Author
//             </div>
//             <ul className='stats'>
//                 <li className='rating'>
//                     5 stars
//                 </li>
//                 <li className='isbn'>
//                     12-34567-890
//                 </li>
//             </ul>
//             <div>
//             Line1
//             [' ']
//             Line2
//             </div>
//         </div>
//     );
// }

// ReactDOM.render(
//     <CreateBook/>,
//     document.getElementById('root'));


function Greeting() {
    var username = 'root'
    var isValid = false;

    // rest

    return (
        <div>{isValid ? 'valid' : 'not valid'}</div>
    );
}

    ReactDOM.render(
        <Greeting/>,
        document.getElementById('root')
    );




// NOTES AND QUESTIONS 
// NOTES AND QUESTIONS 
// NOTES AND QUESTIONS 
// why does the first function return valid and the second return valid and not valid ?

// What is &nbsp; ?

// F. printed exactly whats in the box. was it supposed to?
