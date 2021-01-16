window.onload = function () {

    links_arr = {
        // LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
        Further: 'file.html',

    }
bottom={}

    links = document.createElement('ul')
    links.classList.add('list-unstyled')
    Object.keys(links_arr).forEach(function (key) {
        toplinksitem = document.createElement('li')
        links.appendChild(toplinksitem)
        a = document.createElement('a')
        toplinksitem.appendChild(a)
        a.href = links_arr[key]
        a.textContent = key
    })
    document.getElementById('links').appendChild(links)

    
    about = [
        'CEO of my life', 
        'Javascript Developer',
        'Full Stack Developer'
        ]

    aboutlinks = document.createElement('ul')
    
    for (value of about) {
        // console.log(i, i %3, key)
        aboutlinksitem = document.createElement('li')
        aboutlinksitem.textContent = value
        aboutlinks.appendChild(aboutlinksitem)
    }
    document.getElementById('about').appendChild(aboutlinks)

    listrepos = document.createElement('ul')
    document.getElementById('github').appendChild(listrepos)

    user = 'tik9'
    gh = 'https://api.github.com'
    ghApiUser = `${gh}/users/${user}`

    urlFilesGh = `${ghApiUser}/repos/${user}/cv/contents/output`
    // urlFilesGh = 'https://api.github.com/repos/tik9/cv/contents/output'
    // console.log('data now')

    $.getJSON(`${ghApiUser}/repos`, function (data) {
        // console.log('data now', data)

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
        data.forEach(v => {

            listItemRepo = document.createElement('li')
            listrepos.appendChild(listItemRepo)
            hlink = document.createElement('a')
            listItemRepo.appendChild(hlink)
            hlink.textContent = `${v.description} | Stars: ${v.watchers}`
            hlink.href = v.html_url
        })
    })
}