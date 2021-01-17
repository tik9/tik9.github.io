

user = 'tik9'
gh = 'https://api.github.com'
ghApiUser = `${gh}/users/${user}`

urlFilesGh = `${ghApiUser}/repos/${user}/cv/contents/output`
// urlFilesGh = 'https://api.github.com/repos/tik9/cv/contents/output'
// console.log('data now')

listrepos = document.createElement('ul')
truncate_cut=130
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
    data.forEach(element => {
        description=truncate(element.description)
        // console.log('descr len',description)

        listItemRepo = document.createElement('li')
        listrepos.appendChild(listItemRepo)
        hlink = document.createElement('a')
        listItemRepo.appendChild(hlink)
        hlink.textContent = `${description} | Stars: ${element.watchers}`
        hlink.href = element.html_url
    })
})

document.getElementById('github').appendChild(listrepos)
