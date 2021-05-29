import axios from "axios";

export async function callbackAuthorizationCode(req: any, res: any) {
	axios
		.get("https://pixelfed.social/api/v1/accounts/verify_credentials", {
			headers: {
				Authorization: `Bearer ${req.query.code}`,
			},
		})
		.then((response: any) => {
            res.send(`<p>Code : ${req.query.code}</p><p>Response : </p><pre>${response}</pre>`);
		})
		.catch((error) => {
            res.send(`<p>Code : ${req.query.code}</p><p>Error : </p><pre>${error}</pre>`);
		});
}
