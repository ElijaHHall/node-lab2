
const express = require('express'); 
const app = express();


const videos = [
	{id: 1, title: "Lion King", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
	{id: 2, title: "The Chappelle Show", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
	{id: 3, title: "The Walking Dead", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
];


app.get('/videos', (request, response) => {
    response.send(videos);
});

app.get('/videos/:id', (request, response) => {
	console.log(request.params.id);
    let id = request.params.id;
    let video = videos[id - 1];
    response.send(video);

});


app.post ('/videos/:id', (request, response) => {
	let id = request.videos.id;
	response.redirect('/videos/' + id);
});

app.get('/videos/:id', (request, response) => {
    response.send('videos by id');
});
app.get('/comedians', (request, response) => {
	response.send('comedians');
});
app.get('/comedians/:id', (request, response)=> {
	response.send('comedians by id');
});

app.listen(3000, () => {
    console.log("I am listening");
});