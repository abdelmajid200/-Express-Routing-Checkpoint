const express = require('express');
const app = express();
const port = 3000;


const checkWorkingHours = (req, res, next) => {
    const currentDateTime = new Date();
    const day = currentDateTime.getDay();
    const hour = currentDateTime.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
        next();
    } else {
        res.send("Sorry, we are closed. Please visit us during working hours (Monday to Friday, from 9 to 17).");
    }
};


app.set('view engine', 'ejs');


app.use(express.static('public'));


app.use(checkWorkingHours);


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
