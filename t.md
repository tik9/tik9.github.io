---
---

## {{ page.title }}


<div id=test></div>

{% include date.js %}
<script>

    ul=document.createElement('ul')
    document.getElementById('test').appendChild(ul)
    lip=document.createElement('li')
    lip.textContent='Posts'
    ul.appendChild(lip)

    ulp=document.createElement('ul')
    lip1=document.createElement('li')
    lip2=document.createElement('li')
    lip1.appendChild(document.createTextNode('P1'))
    lip2.appendChild(document.createTextNode('P2'))
    
    lip.appendChild(ulp)
    ulp.appendChild(lip1)
    ulp.appendChild(lip2)


    lic=document.createElement('li')
    lic.textContent='Cos'
    ul.appendChild(lic)

    ulc=document.createElement('ul')
    lic1=document.createElement('li')
    lic2=document.createElement('li')
    lic1.appendChild(document.createTextNode('c1'))
    lic2.appendChild(document.createTextNode('c2'))
    
    lic.appendChild(ulc)
    ulc.appendChild(lic1)
    ulc.appendChild(lic2)

// console.log(1234)

</script>