// console.log('start se');


    // arr = ['comments', 'posts', 'questions', 'answers']
    copo = ['comments', 'posts']
    max_posts = 3
    truncate_cut = 130
    listpost = document.createElement('ul')

    copo.forEach(function (cp_elem) {
        // console.log('cp_elem', cp_elem)

        // cp_elem=document.createElement('li')
        // ul_temp=document.createElement('ul')

        se = 'https://api.stackexchange.com/2.2'
        user = se + '/users/1705829'
        so = 'site=stackoverflow'
        so = so+'&filter=withbody'
        // so = 'order=desc&sort=activity&site=stackoverflow&filter=withbody'

        url = user + '/' + cp_elem + '?' + so
        // console.log('url', url)
        // $.getJSON(url, function (data) {
        //     console.log('data now', data)
        // })

        responseData = fetch(url).then(response => response.json())

        responseData.then(({
            items,
        }) => {
            counter_posts = 1
            for ({
                creation_date,
                link,
                body,
                title
            }
                of items) {
                if (counter_posts == max_posts) {
                    break
                }
                console.log(title)

                counter_posts++

                dateString = datef(creation_date)

                listItemPost = document.createElement('li')
                listpost.appendChild(listItemPost)
                body = truncate(body)

                body = body.replace(/<\/?[^>]+(>|$)/g, '')
                body = body.replace(/&quot;/g, '')
                body = body.replace(/&#39;/g, '')
                body = body.replace(/&gt;/g, '')
// rege()
                a = document.createElement('a')
                listItemPost.appendChild(a)
                if (link == undefined) {
                    a.href = 'https://stackexchange.com/users/1886776/timo?tab=activity'

                } else {
                    a.href = link
                }
                if (title== undefined){
                    body_new=body
                }
                else {
                    body_new=title
                }
                a.textContent = `${dateString} | ${body_new}`
                // | ${score}
            }
        })

        document.getElementById('stackexch').appendChild(listpost)
        // document.getElementById(cp_elem).appendChild(listpost)

    })