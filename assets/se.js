window.onload=function(){

    copo = ['Comments', 'Posts']
    max_posts = 5
    truncate_cut = 130
    ul = document.createElement('ul')
    document.getElementById('stack').appendChild(ul)

    copo.forEach(function (cp_elem) {

        se = 'https://api.stackexchange.com/2.2'
        user = se + '/users/1705829'
        so = 'site=stackoverflow'
        so = so+'&filter=withbody'
        // so = 'order=desc&sort=activity&site=stackoverflow&filter=withbody'

        url = user + '/' + cp_elem + '?' + so

        responseData = fetch(url).then(response => response.json())

        responseData.then(({
            items,
        }) => {
            counter_posts = 0
            for ({
                creation_date,
                link,
                body,
            }
                of items) {

                if (counter_posts == max_posts) {
                    break
                }

                list_item = document.createElement('li')

                ul.appendChild(list_item)

                if (counter_posts== max_posts/2 ||counter_posts== 0){
                    counter_posts++
                    list_item.textContent=cp_elem
                    list_item.classList.add('list-unstyled');
                    continue
                }

                body = truncate(body)

                body = body.replace(/<\/?[^>]+(>|$)/g, '')
                body = body.replace(/&quot;/g, '')
                body = body.replace(/&#39;/g, '')
                body = body.replace(/&gt;/g, '')
                // rege()
                // console.log('title',title)

                a = document.createElement('a')
                list_item.appendChild(a)
                if (link == undefined) {
                    a.href = 'https://stackexchange.com/users/1886776/timo?tab=activity'

                } else {
                    a.href = link
                }
                
                dat = new Date(creation_date*1000)

                dd = dat.getDate()
                mm = dat.getMonth() + 1
                yyyy = dat.getFullYear()

                if (dd < 10) { dd = '0' + dd }

                if (mm < 10) { mm = '0' + mm }

                dat = dd + '/' + mm + '/' + yyyy

                a.textContent = `${dat} | ${body}`
                // | ${score}
                counter_posts++

            }
        })


    })
}
