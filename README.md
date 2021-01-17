---
layout: default
title: Timo Ko
---

<br><br>

### Hi! Welcome to my Github and Stackexchange activities(tik9.github.io)
<br><br>

### What is this site about?

Off the top of my head: 
It is about..

myself:
<div id=about_js></div>

It is also about..

showing my Github(**GH**) and Stackexchange (**SE**) activities.

I think both companies do their job well, each in its way:

GH is complex regarding user interaction and you have several possibilities including a static site for each repo. Although I must admit I never did much on Bitbucket, which should be worthwhile inspecting. But for another day..

SE is an independent company and does a good job regarding social coding. I post and comment here and there where I can.

![img-not-work](assets/se.png)
<br><br>

### Things I learn while making the site
- I still get to know Jekyll in-depth and someday will dive into Ruby. But again, for another day..
- I continue learning the combination of Markdown, JS and Html.
- I improve my VSCode skills - a tool I will not miss
<br><br>

### Things I miss
Python! Python..? Yes, Python. 

But this is the essence: this website is done and based around a static site gen, so be calm, Timo, and go for other (Python) projects if you like Python.


<script>
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

</script>