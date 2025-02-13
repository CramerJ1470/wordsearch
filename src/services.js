/***********************User section******************* */
// import { playingboards } from "../../server/controllers";
// import BoardsContext from "./context/BoardsContext";
// import { useContext } from "react";
// import Block from "./scripts/Block";
export const login = async (username, password, applyFunc) => {
	const url = "http://localhost:8090/apisnft/users/login";
	const body = JSON.stringify({ username: username, password: password });
	console.log(`body: before LC:`, body);
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	console.log(`res:`, res);
	if (res.ok) {
		const result = await res.json();
		console.log(`result: `, result);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: result.password,
				id: result._id,
				username: result.username,
			})
		);

		console.log(`localStorage: `, localStorage);
		applyFunc(true);
	} else {
		applyFunc(false);
	}
	console.log(`localStorage: `, localStorage);
	console.log("submitted");
};

export const register = async (username, password) => {
	const url = "http://localhost:8090/apisnft/users/register";
	const body = JSON.stringify({ username, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const logout = async () => {
	const url = "http://localhost:8090/apisnft/users/logout";
	const { token } = JSON.parse(localStorage.getItem("userData"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body: "", headers });
	const result = await res.json();
	localStorage.removeItem("userData");

	return result;
};

export const getUser = async (userId) => {
	const userData = JSON.parse(localStorage.getItem("userData"));
	return userData;
};
/************Picked Block To Change ***************** */

// export const getPickedBlocksToChange = async (applyFunc) => {
// 	const res = localStorage.getItem("PickedBlockName");
// 	res.json().then((pickedblockname) => {
// 		applyFunc(pickedblockname);
// 	});
// };

/************Playingboards  Section ***************** */
export const getSavedBoards = async (applyFunc) => {
	const url = "http://localhost:8090/apisnft/wsboards";

	try {
		
	const res = await fetch(url);
	await res.json().then((playingboards) => {
		applyFunc([...playingboards]);
	});
}
	catch (error) {
		throw new Error(
			`Error fetching and posting playingboard: ${error.message}`
		);
	}

	
	
};



export function saveboardHandler(rows, userId) {
	// event.preventDefault();
	// const { username } = JSON.parse(localStorage.getItem("userData"));
	console.log(`save**************************************`, rows, userId);
	addPlayingboard(rows, userId);
}

export function getScore() {}
// export const addPlayingboard = async (username, rows) => {
// 	//console.log(`reviewsSentOver: `, req.reviews);
// 	//console.log(`movieSentOver: `, req);

// 	console.log(`username: `, username, rows);
// 	//console.log(`post reviews: `, reviews);
// 	let savedPlayingboard = [];
// 	rows.forEach(row => {savedPlayingboard.push(row);

// 	});

// 	const { token } = JSON.parse(localStorage.getItem("userData"));
// 	const myHeaders = {
// 	"Content-Type": "application/json",
// 	"Authorization": `Bearer ${token}`,
// 	};
// 	let bodyRaw =  {username,savedPlayingboard} ;
// 	console.log(`body: `, bodyRaw);
// 	var requestOptions = {
// 		method: "POST",
// 		headers: myHeaders,
// 		body: JSON.stringify(bodyRaw),
// 	};

// 	//console.log(`PER movie_id: `, _id);
// 	console.log(`requestOptions:`, requestOptions);
// 	await fetch(`https://localhost:8090/api/playingboards`, requestOptions)
// 		.then((response) => response.json())
// 		.then((result) => console.log(result.text))
// 		.then((answer) => {
// 			const savedPlayingboards = rows;
// 			console.log(`Put; `, savedPlayingboards);
// 			answer.savedPlayingboards = savedPlayingboards;
// 		});
// };

export const addPlayingboard = async (rows, userId) => {
	const { token, id } = JSON.parse(localStorage.getItem("userData"));

	//const url = "http://localhost:8090/api/playingboards";
	//console.log(typeof rows);
	console.log(typeof id);

	const body = JSON.stringify({ rows: rows, userId: userId });
	console.log(body);
	const headers = {
		"Content-Type": "application/json",
	};
	// console.log(headers);
	try {
		const response = await fetch(
			"http://localhost:8090/apisnft/wsboards/post",
			{ method: "POST", headers: headers, body: body }
		);
		const data = await response.json();
		console.log(`id:`, data._id);
		return data;
	} catch (error) {
		throw new Error(
			`Error fetching and posting playingboard: ${error.message}`
		);
	}
	

	/**** add playingboard._id to users savedPlayingBoards */
};

/*******************Games Section ********************* */
export const getGames = async (applyFunc) => {
	const url = "http://localhost:8090/api/games";
	const res = await fetch(url);
	res.json().then((games) => {
		applyFunc([...games]);
	});
};

export const addGames = async (description) => {
	const { id, token } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/games";
	const body = JSON.stringify({ description, author: id });
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const changeboxsize = () => {
	document.getElementById("regorstart").style.height = "20rem";
	document.getElementById("regorstart").style.top = "33rem";
};


export const getListItems = () => {
	// let listItems1 = localStorage.getItem("listitems");
	// return listItems1;

};

