

// import React,{useState,useEffect} from 'react';

import './App.css';
// import Student from './component/Student';
import './demo.css';
// import {Header,Footer} from './Header';
  // ----------------------------------------------------
  // import DemoHeader from './component/DemoHeader';
  // import './movieStyle/movie.css'
  // import Movie from './component/Movie';
  // import data from './data.json'
// import Fields from './component/Fields';


  // ----------------------------------------------------
  // REACT Routers
//   import Header from './component/Header';
//   import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from './component/Contact';
// import About from './component/About';
// import Home from './component/Home';
// import Error from './component/Error';
// import AboutEx from './component/AboutEx';
// import AboutEx2 from './component/AboutEx2';

  // ----------------------------------------------------
  // 7)

  // import React, {useState} from 'react'
  // import CompA from './component/CompA';

  // ----------------------------------------------------
// 8)

import  { createContext,  useState } from 'react';
const AppState = createContext()


function App() {
  // 1)
  // ----------------------------------------------------
  // let name = "san"
  // let lname = "man"
  // return (
  //   <>
  //   <div className="App">
  //         <Header age = {90}/>
  //         <h1 id='man'>{name}</h1>
  //         <h1 className='bro'>{lname}</h1>

  //      <Footer 
  //       name = "sanjay"
        
  //      />
  //   <hr/>
  //   <Student 
  //     name = "shiv"
  //     age = {98}
  //   />
  //   </div>
  //   </>
  // );

  // ----------------------------------------------------
  // 2)
  // let footer = 'Thank you!'

  // return (
  //   <div className='App'>
  //   <DemoHeader/>
  //   <div className='parent'>

    
  //   {
  //     data.map ((e, index) => {
  //         return (
  //           <Movie key = {index} img = {e.Poster} title = {e.Title} year = {e.Year}  />
  //         )
  //     })
  //   }
  //   </div>
  //   <p>  {footer} </p>
  //   </div>
  // )

//   // ----------------------------------------------------
// 3)
//  const [ num, setNum ] = useState(0);

//  function inc (){
//     setNum(num+1);
//  }

//  function dec (){
//   setNum (num - 1)
//  }

//   return (
//       <div className='App'>
//         <h1>{num}</h1>
//       <div className='btn'>
//       <button onClick={inc} >inc</button>
//       <button onClick={dec} >dec</button>

//       </div>
// </div>

//   )
//   // ----------------------------------------------------
  // 4)
  // const [name, funNam] = useState("");
  // const [email, funEmail] = useState("");
  // const [ data, funData] = useState([])


  // ----
  // function setData () {
  //   funData([...data, {
  //     // name : name,
  //     // email:email
  //     // destructuring

  //     name,email
  //   }])
  //   funNam("")
  //   funEmail("")

  // }
  // ----


  // function remove (i){
  //   const arr = data;
  //   arr.splice(i,1);
  //   funData([...arr])
  // }

  // ----


  // return (
    // <div className='App'>
    //     <input type="text" value={name} onChange={(e)=> funNam(e.target.value)} name="" id="" />
    //     <input type="text" value={email}  onChange={(e)=> funEmail(e.target.value)} name="" id="" />
    //     <button onClick={setData}>add</button>

    //     <div>

    //       {
    //         data.map ((e, i) => {
    //           return(
    //             <div className='div' key={i}>
    //           <div>{e.name}</div>
    //           <div>{e.email}</div>
    //           <button onClick={ () => remove(i)}>rem</button>

// </div>

  //             )
  //           })
  //         }

  //       </div>

  //   </div>
  // )
// ---------------
// 4)
//   const [name, myName] = useState("")
//   const [email, myEmail] = useState("")
//   const [details, myDtails] = useState([])

//   function add () {
//     myDtails([...details, {name,email}])
//     myName("")
//     myEmail("")

//   }

//   function rem (index){
//     const arr = details;
//     arr.splice(index,1);
//     myDtails([...arr])
//   }

// return(
//   <div className='App'>

//     <input type="text" value={name} onChange={(e)=> myName(e.target.value)} name="" id="" />
//     <input type="text" value={email} onChange={(e)=> myEmail(e.target.value)} name="" id="" />
  //   <button onClick={add}>add me</button>

  // {
  //   details.map((e,index)=>{
  //     return(
  //       <div key={index} className='div'>

  //       <div >{e.name}</div>
  //       <div >{e.email}</div>
  //       <button onClick={()=> rem(index)}>remove</button>

  //       </div>

  //     )
  //   })
  // }

  // </div>
  

// )

// ----------------------
// 5)
// //  useState hOOK

  // ----------------------
  //  // USEsTATE hOOK

// const [like, myLike] = useState(0);

// function funLike(){
//   myLike(like+1)
// }

// // const dislike = () =>{
////   myLike(like-1)
////  }

  // ----------------------
  //  // useState Hook 
// return (
//   <div  className='App'>


        

//       <Fields/>

//   </div>
// )
// }
  // --------------------------------------------
// const [d, setData] = useState(1);
// //// const [data2, setData2] = useState(0);

// const [data, myData] = useState([])


//   useEffect (()=>{
//       // window.alert("hello world")
// async function myFun () {
//   const get = await fetch(`https://hub.dummyapis.com/employee?noofrecords=${d}&idStarts=1001`);
//   const res = await get.json();

//   myData(res)
//   console.log(res);
// }
// myFun()


//// chat show on top of the domain -------------------------------


// document.title = `(${d}) online`
//   },[d])

// return (
//   <div>
//     <button onClick={()=> setData(d+1)}>{d}</button>
//     {/* <button onClick={()=> setData2(data2+1)}>{data2}</button> */}
//     {
//       data.map((e,i)=>{
//         return(
//           <div key={i}>{e.firstName}</div>
//         )
//       })
//     }

//   </div>
// )


// }
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


  // --------------------------------------------
// 6)

// REACT Router dom ---------

// return (
//   <Router>
//   <div>
//   <Header/>
//   <Routes>
//           {/* Home route */}
//         <Route path='/home' element={<Home/>} />

//         {/* contach route */}
//         <Route path='/contact' element={<Contact/>} />

//         {/* aboute route  */}
//         <Route path='/about' element={<About/>}  >

//           <Route path='aboutEx' element={<AboutEx/>} />
//           <Route path='aboutEx2' element={<AboutEx2/>} />


//         </Route>

//         {/* Error Route */}
//         <Route path='*' element={<Error/>} />


//   </Routes>


//   </div>
//   </Router>

// )
// }

  // --------------------------------------------
  // 7)

  // // PROPS DRILLING Context API
  // const [data, setData] = useState("san")

  // return (
  //   <>
  //     <CompA data = {data} />
  //   </>
  // )
  // ----------------------------------------------------
    // 8)

    // create Conetext & useContext
  const [data, setData] = useState("san")
  return(
    <>
      <AppState.Provider value={data}>
          hello
      </AppState.Provider>
    </>
  ) 


}


export default App;
export  {AppState}
