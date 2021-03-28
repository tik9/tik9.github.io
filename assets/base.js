whref = window.location.href
whost = window.location.host
urlpathSplit = whref.split(whost)[1]
fileName = urlpathSplit.split('.')[0]

sndPart = fileName.split('convert')[1]
// h4 = document.querySelector('h4')
// h4.textContent = fileName[1].toUpperCase() + fileName.slice(2)
// if (sndPart) {
//     h4.textContent = 'Convert ' + sndPart
// }
// console.log(whref, whost, urlpathSplit, sndPart)

ghlink = document.getElementById('ghlink')
a = document.createElement('a')
a.textContent = 'Source on Github'
a.href = 'https://github.com/tik9/tik9.github.io/blob/master' + urlpathSplit
// if (urlpathSplit != '/') {
ghlink.appendChild(a)

links_arr = {
    Home: 'README.html',
    Github: 'gh.html',
    Stackexchange: 'se.html',
    'Github Rest Api': 'https://github.com/tik9/rest-test',
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
header = document.querySelector('h3')
header.textContent = title;

document.title = title

head = document.querySelector('head')

livereload = document.createElement('script')
livereload.src = 'http://localhost:35729/livereload.js?snipver=1'
head.appendChild(livereload)

icon = document.createElement('link');
icon.rel = 'icon'
icon.href = 'https://github.com/github.png'
head.appendChild(icon)

boots = document.createElement('link')
boots.rel = 'stylesheet'
boots.href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"

head.appendChild(boots)

css = document.createElement('link')
css.rel = 'stylesheet'
css.href = 'style.css'
head.appendChild(css)
footer=document.querySelector('footer')
footer.textContent=title+' made in 2021'