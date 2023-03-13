import React from "react";
import MapDisplay from "./client/features/MapDisplay";
import LoginPage from "./client/features/loginPage/LoginPage"
import { UserIcon } from "./client/features/userIcon/UserIcon";

function App() {
	return (
    <>
		<div id='app'>
			Gather
			<LoginPage />
			<MapDisplay />
			<UserIcon />
		</div>
    </>
  )
}

export default App;
