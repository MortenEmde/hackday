const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/* GET random joke. */
router.get('/', async function(req, res, next) {
  req.headers['accept'] = 'text/plain'
  const unparsedJoke = await fetch( 'https://icanhazdadjoke.com/', { 
    method: 'GET', 
    headers: {
    'Accept': 'text/plain',
    }
  })
  const joke = await unparsedJoke.text()
  res.send(joke)
});

module.exports = router;

// fetch('https://icanhazdadjoke.com/')
//   .then(response => response.json())
//   .then(joke => console.log(joke));

  // const unparsedJoke = await fetch(`https://icanhazdadjoke.com/`)
  // const joke = await unparsedJoke.json()
  // console.log('unparsed:', unparsedJoke)
  // console.log('joke:', unparsedJoke)
  // if (joke) {
  //   res.status(200)
  //   res.send(joke);
  // } else {
  //   res.sendStatus(404)
  // }