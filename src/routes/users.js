const {Router} = require('express');

const router = Router()

router.get('/username' , (req, res) =>{ 
    res.send('Username Route');
} );

router.get('/profile', (req, res) =>{
    console.log(req.body);
    res.send('Profile');
});

module.exports = router;