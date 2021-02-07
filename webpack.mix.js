
const mix = require('laravel-mix');
mix.sass('src/scss/app.scss', 'assets');
mix.js('src/js/app.js', 'assets').vue();