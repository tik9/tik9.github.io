whref = window.location.href
whost = window.location.host
host = whost.split(':')[0]
urlpathSplit = whref.split(whost)[1]
var fileName = urlpathSplit.split('.')[0].split('/')[2]

h4 = document.querySelector('h4')
if (typeof fileName == 'undefined' || fileName=='README'){
    h4.textContent = 'README'
}
// console.log('whost:', whost, urlpathSplit, 'filename:', fileName, host)

else if (fileName.includes('convert')) {
    sndPartConvert = fileName.split('convert')[1]
    h4.textContent = 'Convert ' + sndPartConvert
}
else {
    h4.textContent = fileName[0].toUpperCase() + fileName.slice(1)
}

ghlink = document.getElementById('ghlink')
a = document.createElement('a')
a.textContent = 'Source on Github'
a.href = 'https://github.com/tik9/tik9.github.io/blob/master' + urlpathSplit
// if (urlpathSplit != '/') {
ghlink.appendChild(a)

links_arr = {
    Home: '/public/README.html',
    Github: '/public/github.html',
    Stackexchange: '/public/stackoverflow.html',
    'Date Convert': '/public/convertDate.html',
    'Calculate': '/public/calculate.html',
    'Markdown Convert': '/public/convertMarkdown.html',
    Games: 'https://tik9.github.io/game',
}

ul = document.createElement('ul')
ul.classList.add('list-unstyled')
Object.keys(links_arr).forEach(key => {
    toplinksitem = document.createElement('li')
    ul.appendChild(toplinksitem)
    a = document.createElement('a')
    toplinksitem.appendChild(a)
    a.href = links_arr[key]
    a.textContent = key
})
document.querySelector('header').appendChild(ul)


title = 'Tiko\'s'
h3 = document.querySelector('h3')
h3.textContent = title;

document.title = title

head = document.querySelector('head')

if (host == 'localhost') {
    livereload = document.createElement('script')
    livereload.src = 'http://localhost:35729/livereload.js?snipver=1'
    head.appendChild(livereload)
}

icon = document.createElement('link');
icon.rel = 'icon'
icon.href = 'https://github.com/github.png'
head.appendChild(icon)

boots = document.createElement('link')
boots.rel = 'stylesheet'
boots.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"

head.appendChild(boots)

css = document.createElement('link')
css.rel = 'stylesheet'
css.href = '/assets/style.css'
head.appendChild(css)
footer = document.querySelector('footer')
footer.textContent = title + ' made in 2021'