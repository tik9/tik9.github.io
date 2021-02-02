   window.onload=function(){
   
   user = 'tik9'
    gh = 'https://api.github.com'
    ghApiUser = `${gh}/users/${user}`

    listrepos = document.createElement('ul')
    truncate_cut = 130
    // $.getJSON(`${ghApiUser}/repos`, function (data) {
    // console.log('data now', data)
    var request = new XMLHttpRequest();
    request.open('GET', `${ghApiUser}/repos`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);


            function compare(a, b) {
                if (a.watchers > b.watchers) {
                    return -1
                }
                if (a.watchers < b.watchers) {
                    return 1
                }
                return 0
            }

            data.sort(compare)
            data.forEach(element => {
                description = truncate(element.description)
                // console.log('descr len',description)

                listItemRepo = document.createElement('li')
                listrepos.appendChild(listItemRepo)
                hlink = document.createElement('a')
                listItemRepo.appendChild(hlink)
                hlink.textContent = `${description} | Stars: ${element.watchers}`
                hlink.href = element.html_url
            })

        } else {
            console.log('return error from server')
        }
    }

    request.onerror = function () {
        console.log('connect error')
    };

    request.send();

    // })

    document.getElementById('github').appendChild(listrepos)
}
