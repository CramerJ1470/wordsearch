import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import useInput from "../hooks/useInput";
import { login, register, logout} from "../services";

const RegisterOrStart = () => {
	const navigate = useNavigate();
	const { setIsAuth, isAuth } = useContext(AuthContext);

	function openLogin() {
		//console.log("openLogin activated");
		//console.log(document.getElementById("log").style.display);
		document.getElementById("log").style.display = "inherit";
		document.getElementById("login2").classList.add("hide");
		document.getElementById("regorstart").classList.add("regorstartBigger");
	}
	function closeLogin() {
		document.getElementById("log").style.display = "none";
		document
			.getElementById("regorstart")
			.classList.remove("regorstartBigger");
		document.getElementById("login2").classList.remove("hide");
	}
	function openRegister() {
		document.getElementById("reg").style.display = "inherit";
		document.getElementById("register").classList.add("hide");
		document.getElementById("regorstart").classList.add("regorstartBigger");
	}
	function closeRegister() {
		document.getElementById("reg").style.display = "none";
		document
			.getElementById("regorstart")
			.classList.remove("regorstartBigger");
		document.getElementById("register").classList.remove("hide");
		document.getElementById("register").classList.add("visible");
	}

	const {
		value: username,
		hasError: usernameInvalid,
		valid: usernameValid,
		changeHandler: usernameChangeHandler,
		blurHandler: usernameBlurHandler,
		reset: usernameReset,
	} = useInput((username) => username.trim().length > 5);

	const {
		value: password,
		hasError: passwordInvalid,
		valid: passwordValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: passwordReset,
	} = useInput((password) => password.trim().length > 5);

	const formValid = usernameValid && passwordValid;

	const submitHandler = async (e) => {
		e.preventDefault();
		
		// await login(username, password, setIsAuth);
	alert("submit function not deployed");
		//gotoGame();
		loggedindiv();
	};

	function loggedindiv() {
		// disappearRegister();
		// disappearGuest();
		// disappearLogin();
		// document.getElementById("welcome").classList.remove("hiddenorig");
		// document.getElementById("logout").classList.remove("hiddenorig");
		// document.getElementById("randomboard").classList.remove("hiddenorig");
		// document.getElementById("savedboards").classList.remove("hiddenorig");
		// document.getElementById("buildboard").classList.remove("hiddenorig");
		// document.getElementById("regorstart").style.height = "20rem";
		// document.getElementById("regorstart").style.top = "33rem";
	}

	function disappearRegister() {
		document.getElementById("register").style.display = "none";
	}

	function disappearLogin() {
		document.getElementById("login1").style.display = "none";
	}

	function disappearGuest() {
		document.getElementById("guest").style.display = "none";
	}

	const submitRegister = (e) => {
		e.preventDefault();
		// console.log(username, password);
		// register(username, password, setIsAuth);
		closeRegister();
		disappearRegister();
		alert("submitregister function not deployed");
		
	};

	const logoutHandler = async (e, isAuth) => {
		e.preventDefault();
		// const res = await logout(e, isAuth);

		// setIsAuth(false);
		// window.location.reload(false);
		// navigate("/home");
		alert("logout function not deployed.");
	};

	const playrandomBoard = (e) => {
		e.preventDefault();
		// navigate("/playingboard");
		alert("play random board function not deployed");
	};

	const guestplayHandler = (e) => {
		e.preventDefault();
		document.getElementById("startplay").classList.remove("hiddenorig");
		document.getElementById("regorstart").classList.add("hiddenorig");
		alert("guest play function not deployed");
		};

	const savedboardsview = () => {
		alert("saved boards function not deployed.");
		// navigate(`/savedboards`);
	};

	const buildboard = (e) => {
		e.preventDefault();
		// navigate("/buildboard");
		alert("build a board function not deployed");
	};

	return (
		<div className="regorstart" id="regorstart">
			<div className="register">
				<button className="btn" id="register" onClick={openRegister}>
					Register
				</button>
				<div id="reg">
					<div className="form-outline mb-4 ">
						<button className="closeBtn" onClick={closeRegister}>
						X	
						</button>
						<input
							type="text"
							id="username"
							className="form-control form-control-lg rnd"
							onChange={usernameChangeHandler}
							onBlur={usernameBlurHandler}
							value={username}
						/>

						<label className="form-label" htmlFor="username">
							Username
						</label>
						{usernameInvalid && <p>please enter valid username</p>}
					</div>

					<div className="form-outline mb-4">
						<input
							type="password"
							id="password"
							className="form-control form-control-lg rnd"
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							value={password}
						/>

						<label className="form-label" htmlFor="password">
							Password
						</label>
						{passwordInvalid && <p>please enter valid username</p>}
					</div>
					<div>
						<button
							className="btn submitLogin"
							onClick={submitRegister}
						>
							SUBMIT
						</button>
					</div>

					<div className="pt-1 mb-4"></div>
				</div>
			</div>
			<div className="login1" id="login1">
				<button className="btn" id="login2" onClick={openLogin}>
					Login
				</button>
				<div id="log">
					<div className="form-outline mb-4 ">
						<button className="closeBtn" onClick={closeLogin}>
							X
						</button>
						<input
							type="text"
							id="username"
							className="form-control form-control-lg"
							onChange={usernameChangeHandler}
							onBlur={usernameBlurHandler}
							value={username}
						/>

						<label className="form-label" htmlFor="username">
							Username
						</label>
						{usernameInvalid && <p>please enter valid username</p>}
					</div>

					<div className="form-outline mb-4">
						<input
							type="password"
							id="password"
							className="form-control form-control-lg"
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							value={password}
						/>

						<label className="form-label" htmlFor="password">
							Password
						</label>
						{passwordInvalid && <p>please enter valid username</p>}
					</div>
					<div>
						<button
							className="btn submitLogin"
							onClick={submitHandler}
						>
							SUBMIT
						</button>
					</div>

					<div className="pt-1 mb-4"></div>
				</div>
			</div>
			<div className="guest" id="guest">
				<button className="btn" onClick={guestplayHandler}>
					Guest
				</button>
			</div>

			<div className="hiddenorig" id="welcome">
				<div className="btn">Welcome! {username}</div>
			</div>
			<div className="hiddenorig" id="randomboard">
				<button className="btn" onClick={playrandomBoard}>
					Play a Random Game Board
				</button>
			</div>
			<div className="hiddenorig" id="savedboards">
				<button className="btn" onClick={savedboardsview}>
					Play a Saved Game Board
				</button>
			</div>
			<div className="hiddenorig" id="buildboard">
				<button className="btn" onClick={buildboard}>
					Build a Board
				</button>
			</div>

			<div className="hiddenorig" id="logout">
				<button className="btn" onClick={logoutHandler}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default RegisterOrStart;
