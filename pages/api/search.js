import googleIt from 'google-it';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function googleSearch(req, res) {

	await googleIt({ query: req.query.s }).then(async (results) => {
		res.status(200).json( results )
	}).catch(async (e) => {
		// any possible errors that might have occurred (like no Internet connection)
		res.status(505).json({ msg: 'google error', e })
	})
}
