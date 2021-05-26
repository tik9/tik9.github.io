
table = document.createElement('table');
table.setAttribute('class', 'table')
tr = document.createElement('tr');
table.appendChild(tr)
th1 = document.createElement('th')
th1.appendChild(document.createTextNode('Date'))
th2 = document.createElement('th')
th2.appendChild(document.createTextNode('Stars'))
th3 = document.createElement('th')
th3.appendChild(document.createTextNode('Link'))
document.createTextNode('Date')
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

github = 'https://api.github.com/users/tik9/repos'

function compare( a, b ) {
    if ( a.watchers > b.watchers ){
      return -1;
    }
    if ( a.watchers < b.watchers ){
      return 1;
    }
    return 0;
  }

fetch(github)
    .then(response => response.json())
    .then(data => {

        data.sort( compare );
        
        for (element of data) {
            
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td3 = document.createElement('td');

            //another fetch to get a formatted date
            created_at = document.createTextNode(element.created_at)

            td1.appendChild(created_at)
            watchers = document.createTextNode(element.watchers)
            td2.appendChild(watchers)
            hlink = document.createElement('a')
            td3.appendChild(hlink)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            table.appendChild(tr)

            hlink.textContent = element.description

            hlink.href = element.html_url
        }
    });

document.getElementById('github').appendChild(table)
