window.onload=function(){
fetch("https://wikiapi.p.rapidapi.com/api/v1/wiki/home/pod?lan=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b28672e785mshbab2145a395cedcp195c1ejsn4ef956e29a17",
		"x-rapidapi-host": "wikiapi.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
    document.getElementById('api').textContent=response
})
.catch(err => {
	console.error(err);
});
}
