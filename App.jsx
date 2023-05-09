
import React, { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import Counter from "./client/features/counter/Counter"
import LoginPage from "./client/features/loginPage/LoginPage"
import MainPage from "./client/features/mainPage/MainPage";
import { pageRender } from "./client/features/loginPage/loginPageSlice"


function App() {
	const dispatch = useDispatch();
	// Going to do useEffect so that, on render, it pulls the information on which page to go to
	useEffect(() => {
		axios.get("http://localhost:3000/original")
			.then((data) => {
        // data.data.location
        dispatch(pageRender(data.data.location))
      })
	}, [])
  const whichComp = useSelector((state) => state.login.componentRender)
  console.log(whichComp)
  const renderComp = [];
  if (whichComp === 'LoginPage') {
    renderComp.push(< LoginPage/>)
  }
  else {
    renderComp.push(< MainPage/>)
  }

	return (
		<>
			<div id='app'>
				<h1>
				GATHER
				</h1>
				{renderComp}
				{/* <LoginPage />
				<MapDisplay /> */}
			</div>
		</>
	);
}

export default App;
