
// console.log('se js')
// func = document.createElement('script')
// func.src = 'assets/funct.js'
// head = document.querySelector('head')
// head.appendChild(func)

max_posts = 8
truncate_cut = 200

table = document.createElement('table');

document.getElementById('stack').appendChild(table)

table.setAttribute('class', 'table')
th1 = document.createElement('th')
th1.appendChild(document.createTextNode('Date'))
th2 = document.createElement('th')
th2.appendChild(document.createTextNode('Link'))
th3 = document.createElement('th')
th3.appendChild(document.createTextNode('Score'))
tr = document.createElement('tr')
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
table.appendChild(tr)

copo = ['Comments', 'Posts']
copo.forEach(function (cp_elem) {

    activity = 'https://stackexchange.com/users/1886776/timo?tab=activity'
    // so = 'order=desc&sort=activity'

    url = 'https://api.stackexchange.com/2.2/users/1705829/' + cp_elem + '?site=stackoverflow&filter=withbody&order=desc'

    fetch(url).then(response => response.json()).then(({
        items
    }) => {
        counter_posts = 0
        for ({
            creation_date,
            link,
            body,
            score
        }
            of items) {
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td3 = document.createElement('td');

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            table.appendChild(tr)

            if (counter_posts == max_posts) {
                break
            }

            if (counter_posts == max_posts / 2 || counter_posts == 0) {
                counter_posts++
                bold = document.createElement('strong'),
                    td1.appendChild(bold)
                text = document.createTextNode(cp_elem)
                bold.appendChild(text)
                continue
            }

            body = truncate(body)

            body = rege(body)

            a = document.createElement('a')
            if (link == undefined) {
                a.href = activity

            } else {
                a.href = link
            }

            dat = new Date(creation_date * 1000)

            dd = dat.getDate()
            mm = dat.getMonth() + 1
            yyyy = dat.getFullYear()

            if (dd < 10) { dd = '0' + dd }

            if (mm < 10) { mm = '0' + mm }

            dat = dd + '/' + mm + '/' + yyyy

            a.textContent = body

            td1.appendChild(document.createTextNode(dat))
            td2.appendChild(a)
            // if (cp_elem != 'Comments') {
                td3.appendChild(document.createTextNode(score))
            // }
            counter_posts++

        }
    })

})
