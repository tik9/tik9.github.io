   window.onload=function(){
   console.log(3)
   user = 'tik9'
    gh = 'https://api.github.com'
    ghApiUser = `${gh}/users/${user}`

    listrepos = document.createElement('ul')
    truncate_cut = 130
    // $.getJSON(`${ghApiUser}/repos`, function (data) {
    // console.log('data now', data)
    var request = new XMLHttpRequest();
    request.open('GET', `${ghApiUser}/repos`, true);
    
    table=document.createElement('table');
    table.setAttribute('class','table')
    tr = document.createElement('tr');
    table.appendChild(tr)
    th1=document.createElement('th')
    th1.appendChild(document.createTextNode('Date'))
    th2=document.createElement('th')
    th2.appendChild(document.createTextNode('Stars'))
    th3=document.createElement('th')
    th3.appendChild(document.createTextNode('Link'))
    document.createTextNode('Date')
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    
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
                tr = document.createElement('tr');
                 td1 = document.createElement('td');
                 td2 = document.createElement('td');
                 td3 = document.createElement('td');
                
                
                created_at=element.created_at.split('T')[0]
                yyyy=created_at.split('-')[0]    
                mm=created_at.split('-')[1]    
                dd=created_at.split('-')[2]    

            create_at = dd + "/" + mm + "/" + yyyy;
            create_at=document.createTextNode(create_at)
                td1.appendChild(create_at)
                 //console.log('da',newdate)
                watchers=document.createTextNode(element.watchers)
                td2.appendChild(watchers)
                hlink = document.createElement('a')
                //link=document.createTextNode(hlink)
                description=truncate(element.description)
                td3.appendChild(hlink)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                table.appendChild(tr)
                
                //listItemRepo = document.createElement('li')
                //listrepos.appendChild(listItemRepo)
                //listItemRepo.appendChild(hlink)
                //hlink.textContent = ` ${create_at} - ${description} | Stars: ${element.watchers}`
                hlink.textContent = description

                hlink.href = element.html_url
            })

        }
   }

    request.onerror = function () {
        console.log('connect error')
    };

    request.send();

    // })

    //document.getElementById('github').appendChild(listrepos)
        document.getElementById('github').appendChild(table)

}
