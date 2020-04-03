const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/* GET DT quote. */
router.get('/', async function(req, res, next) {
  try {
    const unparsedquote = await fetch( 'https://api.tronalddump.io/random/quote', { 
      method: 'GET', 
    })
    const quote = await unparsedquote.json();
    res.send(quote);
  } catch (err) {
    res.sendStatus(400)
  }
});

module.exports = router;