
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

whref = window.location.href
whost = window.location.host
host = whost.split(':')[0]
urlpathSplit = whref.split(whost)[1]
fileNameHtml = urlpathSplit.split('/')[2]
var fileName = fileNameHtml.split('.')[0]

// console.log('whref', whref, 'whost:', whost, urlpathSplit, fileNameHtml, 'filename:', fileName, host)


title = 'Tiko\'s'
document.title = title + ' '+fileName
h3 = document.querySelector('h3')
h3.textContent = title
if (fileName == '' || fileName == 'index') {
    h3.textContent += ''
}

else if (fileName.includes('convert')) {
    sndPartConvert = fileName.split('convert')[1]
    h3.textContent += ' - Convert ' + sndPartConvert
}
else {
    h3.textContent += ' - '+fileName[0].toUpperCase() + fileName.slice(1)
}

ghlink = document.getElementById('ghlink')
a = document.createElement('a')
a.textContent = 'Source on Github'
a.href = 'https://github.com/tik9/tik9.github.io/blob/master' + urlpathSplit
ghlink.appendChild(a)

links_top = [
    'index',
    'github',
    'stackoverflow',
    'convertDate',
    'calculate',
    'convertMarkdown',
    'contact'
]

ul = document.createElement('ul')
ul.classList.add('list-unstyled')
links_top.forEach(elem => {
    li = document.createElement('li')
    ul.appendChild(li)
    a = document.createElement('a')
    li.appendChild(a)
    a.href = '/public/' + elem + '.html'
    a.textContent = elem.capitalize()
    if (elem == fileName) {
        a.style.fontWeight = 'bold'
        // console.log(urlpathSplit)
    }
})
document.querySelector('header').appendChild(ul)

head = document.querySelector('head')

if (host == 'localhost') {
    livereload = document.createElement('script')
    livereload.src = 'http://localhost:35729/livereload.js?snipver=1'
    head.appendChild(livereload)
}

functions = document.createTextNode('script')
functions.src = '/assets/func.js'
head.appendChild(functions)

icon = document.createElement('link');
icon.rel = 'icon'
icon.href = 'https://github.com/github.png'
head.appendChild(icon)

links_css = ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', '/assets/style.css']
links_css.forEach(elem => {
    css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = elem
    head.appendChild(css)
})

footer = document.querySelector('footer')

// footer_head = document.createTextNode('span')
// footer_head.textContent = title + ' made in 2021'
// footer.appendChild(footer_head)
ul = document.createElement('ul')
ul.classList.add('list-unstyled')

links_bottom = ['imprint', 'README',]
links_bottom.forEach(elem => {

    li = document.createElement('li')
    aTag = document.createElement('a')
    aTag.textContent = elem.capitalize()
    aTag.href = '/public/' + elem + '.html'
    li.appendChild(aTag)
    ul.appendChild(li)
})

footer.appendChild(ul)
