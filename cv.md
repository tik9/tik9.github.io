---
title: Timo Körner CV
---
## {{ page.title }}

> <span class=tem>{ ich_adresse }</span>
<!-- > <span class=tem>{ ich_alter }</span> years old  -->
&emsp;&emsp;&emsp;&emsp; 
<i class="fas fa-play-circle"></i> &emsp;<span class=tem>{ ich_website }</span>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
<link rel="stylesheet" href='assets/style_cv.css'>
---------------------------------

Working Experience
--------------------
Unix knowledge
:   Apple, Linux  
    <span class=tem>{ erfahrung_lin }</span>

Windows
:   Automation  
    <span class=tem>{ erfahrung_win }</span>


Further experience
:   Web, Git  
    <span class=tem>{ erfahrung_web }</span>

Open Source
--------------------
Commitment
:     
    [Github](https://github.com/tik9)  
    [Stackoverflow](https://stackexchange.com/users/1886776/timo?tab=activity)  
    [Website](https://tik9.github.io)

Education
----------

Information Technology
:   *<span class=tem>{ h_studium }</span>, [Website](https://www.verwaltungsinformatiker.de)*
    (Hof, Germany)

    <span class=tem>{ h_studium_ausf }</span>. The studies include working in different IT departments (client operation, server Linux, storage) in an organisation (comparable to a dual degree).

Business
:   <span class=tem>{ b_studium }</span>, [Website](https://www.uni-bamberg.de) (Bamberg, Germany)


Tools
--------------------

Tool | Usage (years)
-|- 
Django |1         
Javascript |1           
Postgresql |1          
Php |2           
Powershell |1           
Python  |1           


<script>

    ags = [
        {
            a: 'Odoo',
            j: 'Remote Odoo Developer / Technical Consultant'
        },
    
    ]
    

    templates = document.getElementsByClassName("tem")
    templates_ag = document.getElementsByClassName("tem_ag")

    Array.prototype.forEach.call(templates_ag, function (template) {
        innen = template.innerHTML
        template_ohne_kla = innen.slice(3, -3)
        wert = ags[0][template_ohne_kla]
        if (wert) {
            template.innerHTML = innen.replace(innen, wert)
        } else {
            template.innerHTML = ''
        }
    })
    fileName = location.href.split("/").slice(-1)
    first2char = fileName[0].substr(0, 2)

    heute = new Date()

    if (first2char != 'cv') {
        console.log('no matches with cv');
        heute = datef()
    }

    // console.log('datei, first 2 char, heute', fileName, first2char, heute)

    heute_ms = Date.now()
    geburtstag = Date.parse("1978-10-02")
    alter = heute_ms - geburtstag
    msProJahr = 31536000000
    alter = Math.floor(alter / msProJahr)

    werte = {

        b_studium: {
            de: 'Diplom-Kaufmann',
            en: 'Master in Management Studies'
        },

        erfahrung_lin: {
            de: 'Konfiguration von Apache, Nginx und Lighttpd. Benutzer- und Gruppenverwaltung. Konfiguration von IPhones',
            en: 'Configuration of Apache, Nginx and Lighttpd, User and Groups. Configuration of Apple IPhones per remote'
        },

        erfahrung_web: {
            en: 'Template system for cover letters and CV. Including Python Script for renaming files and converting them with Pandoc and Jekyll to html. Support as a full stack developer.',
            de: 'Einsatz von Git auf verschiedenen Systemen, u. a. Linux und Android. Javascript und Html Templating für Bewerbungsanschreiben und Lebenslauf'
        },

        erfahrung_win: {
            de: 'Benutzerbetreuung im Team für 100 Benutzer. Softwareverteilung, Umstellung von Windows 7 auf Windows 10.',
            en: 'Software deployment. Working with a client focused team, contributing to new features in the distributed system of a german public service (Virtualization). Moving server data from outside to the HQ including folder permissions in NTFS. Automating the whole process and copying data over the wire with multithreading.'
        },


        h_studium: {
            de: 'Diplom-Verwaltungsinformatiker (dual)',
            en: 'Bachelor IT dual degree'
        },

        h_studium_ausf: {
            de: 'Vergleichbar mit einem Informatik Bachelor an einer Hochschule',
            en: 'Bachelor in IT with focus on the public sector including controlling (administration for cities)'
        },

        heute: {
            en: heute,
        },

        ich_adresse: {
            en: 'Bergstrasse 15, 85120 Hepberg, Deutschland, Tel.: +49(0)1573 9598 220'
        },

        ich_alter: {
            en: alter,
        },

        ich_name: {
            en: 'Timo Körner',
        },

        ich_website: {
            en: 'tik9.github.io'
        },

        job_frei: {
            en: 'Freelancer and software developer',
            de: 'Freelancer und Software Entwickler'

        },

        job_sys: {
            en: 'System-Administrator'
        },

        tools_job_web: {
            en: 'CSS, Javascript, Postgresql, Php'
        },

        tools_job_sys: {
            en: 'Bash, Git, Python, Powershell'
        },
    }

sprache='en'
    Array.prototype.forEach.call(templates, function (template) {

        innen = template.innerHTML

        template_ohne_kla = innen.slice(2, -2)
        wert = werte[template_ohne_kla]
        // console.log('wert',wert)

        // de= wert['de']
        if (wert['de']) {
            spr = wert[sprache]
        } else {
            spr = wert['en']
        }

        template.innerHTML = innen.replace(innen, spr)
    })
</script>