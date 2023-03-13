
import React, { useEffect } from "react";
import MapDisplay from "./client/features/MapDisplay";
import axios from 'axios'
// import Counter from "./client/features/counter/Counter"
import LoginPage from "./client/features/loginPage/LoginPage"


function App() {
	// Going to do useEffect so that, on render, it pulls the information on which page to go to
	useEffect(() => {
		axios.get('http://localhost:3000/original')
			.then((data) => {
				if (data.data.location === 'signup') {
					return (
						<>
							<div id='app'>
								SIGNUP APP LOADED
								{/* <Counter /> */}
								{/* <LoginPage /> */}
								<MapDisplay />
							</div>
						</>
					)
				}
				else {
					return (
            <>
              <div id='app'>
                MAIN APP LOADED
                {/* <Counter /> */}
                {/* <LoginPage /> */}
              <MapDisplay />
              </div>
            </>
          )
				}
			})
	}, [])
	return (

		<>
			<div id='app'>
				REACT APP LOADED
				<LoginPage />
				<MapDisplay />
			</div>
		</>
	);
}

export default App;
