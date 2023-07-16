const express = require('express');
const PORT = "443";
const app = express();
app.set('view engine', 'ejs');
app.listen(PORT)

app.get('/', (req, res) => {
    res.render('index.ejs', {web: "https://maps.amkrish.com/"});
});