
const getToken = async (tokenFromAccount) => {
	const res = await fetch(
		`https://login.questrade.com/oauth2/token?grant_type=refresh_token&refresh_token=${tokenFromAccount}`,
		{
			method: "GET",
			// headers: {
			// 	"Content-Type": "application/json",
			// 	Accept: "application/json",
			// 	Authorization: "Bearer Zjv3AeNkpu-QvtopoPF0lVJK6SHbsfGx0",
			// },
			// mode: "cors",
			// credentials: "include",
		}
	);
	console.log("res", res);
	console.log("res.json", res.json());
alert(res)
alert(res.json())

};

const getAccountPositions = async () => {
	const res = await fetch(
		"https://api01.iq.questrade.com/v1/accounts/52130491/positions",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer Zjv3AeNkpu-QvtopoPF0lVJK6SHbsfGx0",
			},
			mode: "cors",
			credentials: "include",
		}
	);

	console.log("position", res.json());
};

const getAccountBalances = async () => {
	const res = await fetch(
		"https://api01.iq.questrade.com/v1/accounts/52130491/balances",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer Zjv3AeNkpu-QvtopoPF0lVJK6SHbsfGx0",
			},
			mode: "cors",
			credentials: "include",
		}
	);

	console.log("balances", res.json());
};
const getAccountOrders = async () => {
	const res = await fetch(
		"https://api07.iq.questrade.com/v1/accounts/52130491/orders",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer Zjv3AeNkpu-QvtopoPF0lVJK6SHbsfGx0",
			},
			mode: "cors",
			credentials: "include",
		}
	);

	console.log("position", res.json());
};

export { getToken, getAccountPositions, getAccountBalances, getAccountOrders };
