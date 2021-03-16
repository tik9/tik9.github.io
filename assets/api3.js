//window.onload=function(){
    console.log(3)


fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?format=html&words=30&paragraphs=30", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b28672e785mshbab2145a395cedcp195c1ejsn4ef956e29a17",
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	}
}).then(response => response.text())
        .then((response) => {
            //console.log(response)
            //document.getElementById('api').textContent=response

            	//console.log('lore',response.text());

        })
        
.catch(err => {
	console.error(err);
});
//}

fetch("https://stackoverflowstefan-skliarovv1.p.rapidapi.com/getMyReputation", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "b28672e785mshbab2145a395cedcp195c1ejsn4ef956e29a17",
		"x-rapidapi-host": "StackOverflowstefan-skliarovV1.p.rapidapi.com"
	},
	
})
.then(response => {
	console.log('r',response);
})
.catch(err => {
	console.error(err);
});
