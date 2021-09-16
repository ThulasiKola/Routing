import React, { useState } from "react";
import { useHistory} from "react-router-dom";


function UserForm() {
	const history = useHistory();
    const [ username, setUsername ] = useState("");
	const [ password, setPassword ] = useState("");
    const [ isLoggedin, setIsLoggedIn ] = useState(localStorage.getItem("loggedin"));
    //const history = useHistory()
	const data = { username,password };


	//const data = { id: "123", value: "Thulasi",username,password };
	const login = (e) => {
		// const history = useHistory()
		e.preventDefault();
		history.push({pathname: "/Dashboard",
		state: data
	
	})
		
		
		// history.push({
		// 	pathname: "/Dashboard",
		// 	state: data
		// });
		// if (username !==null  && password !== null) {
		// 	localStorage.setItem("loggedin", 1);
		// 	setIsLoggedIn(1);
      
		// } else {
		// 	alert("pleasse username/password");
		// }
		
		
	};
	
    return (
        <div>
			
			<center>
           <form onSubmit={login}>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button className ="btn" type="submit">
					Submit
				</button >
				{/* {isLoggedin !== null && <Redirect to="/Dashboard" /> } */}
			</form>
            </center>
        </div>
    )
}

export default UserForm
