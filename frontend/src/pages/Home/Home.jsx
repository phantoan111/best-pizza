import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Home'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home = () => {
    const [category, setCategory] = useState("All");
    // const greet = () => {
    //   const hello = React.createElement(
    //     'p',
    //     {
    //       className:"greet"
    //     },
    //     "hello from Viet Nam"
    //   )
    //   const h1greet = React.createElement(
    //     'h1',
    //     {
    //         className: "greet"
    //     },
    //     "hello from Viet Nam"
    //   )
    //   ReactDOM.render(h1greet,document.getElementById('demo'))
    //   console.log(h1greet)
    //   const container = document.getElementById('demo')
    //   const demo = ReactDOM.createRoot(container);
    //   demo.render(hello)
    // }


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      {/* <button onClick={greet} id='demo'>hello</button> */}
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
