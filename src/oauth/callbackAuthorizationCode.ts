import axios from "axios";

export async function callbackAuthorizationCode(req: any, res: any) {
	//res.send("Callback code is " + req.query.code);
	axios
		.get("https://pixelfed.social/api/v1/accounts/verify_credentials", {
			headers: {
				Authorization: req.query.code,
			},
		})
		.then((response: any) => {
            res.send(response);
			console.log(`statusCode: ${response.statusCode}`);
			console.log(response);
		})
		.catch((error) => {
            res.send(error);
			console.error(error);
		});
}
