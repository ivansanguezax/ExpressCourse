const {Router} = require('express');

const router = Router()

router.get('/', (req, res) =>{
    let isActive = true;

    const users = [
        {
            id: 1,
            name: 'Jhon',
            age: 25
        },
        {
            id: 2,
            name: 'Jane',
            age: 30
        },
        {
            id: 3,
            name: 'Mark',
            age: 15
        }
    ];

    res.render('index',{
        title : 'Mundo',
        isActive : isActive,
        users : users
    })
});

router.get('/about', (req, res) =>{
    res.render('about')
});

router.get('/dashboard', (req, res) =>{
    res.render('dashboard')
});

module.exports = router;