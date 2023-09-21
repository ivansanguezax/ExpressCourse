const {Router} = require('express');

const router = Router()

router.all('/about', (req, res) =>{
    const title = 'mi pagina creada con express 2';


    res.render('index.ejs', {title})
});

router.get('/dashboard', (req, res) =>{
    res.send('Dashboard');
});

module.exports = router;