ghIcon = 'https://github.com/github.png'
liRe = 'http://localhost:35729/livereload.js?snipver=1'

fa = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/'

css = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap',
    fa + 'fontawesome',
    fa + 'solid',
    fa + 'brands',
    '/assets/style',
]

// js = ['links']

// console.log(1)

function insert(refNode, newNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
}

function replaceGlobal(orig, search, replace) {
    regex = new RegExp(search, 'g')
    return orig.replace(regex, replace)
}
whref = window.location.href; whost = window.location.host
urlpathSplit = whref.split(whost)[1]
fileNameTmp = urlpathSplit.split('.')[0];
host = whost.split(':')[0]

if (fileNameTmp != '/' && fileNameTmp != '/public/') { fileName = fileNameTmp.split('public/')[1] }
else { fileName = 'Home_' }

fileName = replaceGlobal(fileName, '_', ' ')

// console.log(whref, whost, urlpathSplit, 'filename', fileName, 'fntmp', fileNameTmp)


head = document.querySelector('head')
if (host == 'localhost') {
    livereload = document.createElement('script')
    livereload.src = liRe
    head.appendChild(livereload)
}


icon = document.createElement('link');
icon.rel = 'icon'
icon.href = ghIcon
head.appendChild(icon)

css.forEach(elem => {
    cssInc = document.createElement('link')
    cssInc.rel = 'stylesheet'
    cssInc.href = elem + '.min.css'
    head.appendChild(cssInc)
})


title = 'Tiko\'s'

document.title = title
body = document.querySelector('body')

container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

h3 = document.createElement('h3')
h3.textContent = title
homeLink = document.createElement('a')
homeLink.href = '/'
home = document.createElement('i')
homeLink.appendChild(home)
h3.appendChild(homeLink)
home.classList.add('fas', 'fa-home')
homeLink.style.marginLeft = '10px'

var position = fileName.length
for (var i = 0; i < fileName.length; i++) {
    if (fileName[i].match(/[A-Z]/) != null) {
        position = i;
    }
}
// console.log('pos', position)

ul = document.createElement('ul')
ul.classList.add('list-unstyled')
linksArr.forEach(elem => {
    toplinksitem = document.createElement('li')
    ul.appendChild(toplinksitem)
    a = document.createElement('a')
    toplinksitem.appendChild(a)
    a.href = '/public/' + elem + '.html'
    var position = elem.length
    for (var i = 0; i < elem.length; i++) {

        if (elem[i].match(/[A-Z]/) != null) {
            position = i;
        }
    }
     fnTmp= elem.substring(0, position) + ' ' + elem.substring(position)
     a.textContent=fnTmp[0].toUpperCase()+ fnTmp.slice(1)
    //  console.log(elem,fileName)
    if (elem == fileName) {
        a.style.fontWeight = 'bold'
    }
})

header = document.createElement('header')

header.appendChild(ul)

h4 = document.createElement('h4')
fileName = fileName.substring(0, position) + ' ' + fileName.substring(position);
fnUpper = fileName[0].toUpperCase() + fileName.slice(1)

h4.textContent = fnUpper

br = document.createElement('br')
header.appendChild(br)


main = document.getElementById('main')
main.style.marginTop = '30px'
ghlink = document.createElement('div')
ghlink.id = 'ghlink'
ghlink.style.marginTop = '30px'

if (urlpathSplit != '/') {
    // console.log('ele', fileName)
    a = document.createElement('a')
    a.textContent = 'Source on Github'
    a.href = 'https://github.com/tik9/tik9.github.io/blob/master' + urlpathSplit
    ghlink.appendChild(a)
}
footer = document.createElement('footer')
container.append(h3, header, h4, main, ghlink, footer)

footer.textContent = title + ' made in 2021'

scripts = document.getElementsByTagName('script')
for (script of scripts) {
    container.parentNode.insertBefore(script, container.nextSibling)
}
