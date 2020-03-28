"use strict";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0f47bc643b8c4d3598faaeb4350f174a');

exports.list_all_news = function (req, res) {
    newsapi.articles({
        source: 'associated-press', // required
        sortBy: 'top' // optional
    }).then(articlesResponse => {
        console.log(articlesResponse);
        res.send(articlesResponse);

    });
} 