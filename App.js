//  // how do we create heading in react?
//  const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello World using React");

//     console.log(heading);  // this line gives you an object not h1 tag .
//  // heading should be inside our div root tag, so how do we create root in React?
//  const root = ReactDOM.createRoot(document.getElementById("root"));   // 

// // root will render the javascript object here and finally 
// //makes the js object into h1 tag and print it on the browser.
//  root.render(heading);   
//  Note:
/*
Here React.createElement() method basically creating an heading object and at the end it is a javascript object , It is not an h1 tag yet which browsr understand

*/

/*
example - 1 
------------------
<div id="parent">
    <div id ="child">
       <h1>Hello h1</h1>
    <div>  
</div>

example - 2
----------------
<div id="parent">
    <div id ="child">
       <h1>Hello h1</h1>
       <h2> Hello h2</h2>
    <div>  
</div>

*/

// const parent = React.createElement("div",
//     {id:"parent"},
//     React.createElement("div",
//         {id:"child"},
//         React.createElement("h1",
//             {},
//             "Hello h1"
//         )
//     )
// );
// console.log(parent);
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(parent);
//--------------------------------------------------------------------------------------------

// // i am adding two siblings in child div - for that i need to create an Array for child div
// const parent = React.createElement("div"
//     ,{id:"parent"},
//         React.createElement("div",
//             {id:"child"},
//             [React.createElement("h1",{}, "Hello h1"),React.createElement("h1",{}, "Hello h2   ")]
//         )
//     )

// document.write(parent);
// console.log(parent);
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(parent);


// example - 3 - two child and their children
// ----------------
// <div id="parent">
//     <div id ="child1">
//        <h1>Hello h1 from child1 </h1>
//        <h2> Hello h2 from child1</h2>
//     <div>  
//   <div id ="child2">
//        <h1>Hello h1 from child2 </h1>
//        <h2> Hello h2 from child2</h2>
//   <div>  
// </div>


const parent = React.createElement("parent",{id:"parent"},[
               React.createElement("div",{id:"child1"},
          React.createElement("h1",{} ,"Hello Mehtab ")
        ),
        React.createElement("div",{id:"child2"},
         React.createElement("h2",{} ,"Hello Khubaib")
            )
            
    ]);
    const root3 = ReactDOM.createRoot(document.getElementById("root"));
    root3.render(parent);