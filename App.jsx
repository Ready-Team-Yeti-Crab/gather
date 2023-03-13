import React from "react";
import MapDisplay from "./client/features/MapDisplay";
import Counter from "./client/features/counter/Counter"
import LoginPage from "./client/features/loginPage/LoginPage"

function App() {
	return (
    <>
		<div id='app'>
			REACT APP LOADED
			<Counter />
			<LoginPage />
    <MapDisplay />
		</div>
    </>
  )
}

export default App;
