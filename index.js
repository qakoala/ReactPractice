// ReactDOM.render(
// <ul><li>Item1</li><li>Item2</li></ul>, 
// document.getElementById("root")
// )


// const h1 = document.createElement("h1");
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )



// ReactDOM.render(
//     page, 
//     document.getElementById("root")
//     )

// const navBar = (
//     <nav>
//         <h1>Futurama!</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navBar, document.getElementById("root"));


// const page = (
//     <div>
//     <img src="./react-logo.png" width="40px"></img>
//     <h1><strong>Fun facts about React</strong></h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//     </div>
    
// )

// ReactDOM.render(page, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

function MyHeader() {
    return(
    <div>
        <header>
            <nav className="nav">
                <img className="img" src="./react-logo.png" ></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

function MyFooter() {
    return(
    <div>
        <footer className="footer">
            <small>2021 AZ development. All rights reserved</small>
        </footer>
    </div>
    )
}

function MainContent() {
    return (
        <div>
        <h1 className="header">Reasons I'm excited to learn React!</h1>
        <ol className="ol">
            <li>Knowledge</li>
            <li>Money</li>
            <li>Power</li>
        </ol>
        </div>
    )
}


function MyPage() {
    return(
    <div>
        <MyHeader/>
        <MainContent/>
        <MyFooter/>
    </div>
    )
}

ReactDOM.render(<MyPage/>, document.getElementById("root"));

