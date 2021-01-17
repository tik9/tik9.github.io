window.onload = function () {
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
    document.getElementById('about_js').appendChild(aboutlinks)

}