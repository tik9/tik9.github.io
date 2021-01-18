
    links_arr = {
        // LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
        Imprint:'imprint.html',
    'Buy me a coffee':'https://www.buymeacoffee.com/tik1',
    Source:'https://github.com/tik9/tik9.github.io'
    }

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