window.onload = function () {

    ags = [
        {
            a: "Open Xchange",
            j: "Senior Test Automation Engineer"
        },
    
    ]
    
    datei = location.href.split("/").slice(-1)[0]
    // sprache =datei.slice(3,-5)
    // if (datei.includes('anschreiben')){

    sprache = document.getElementById("spr").getAttribute("data-name")
    // }
    // sprache='en'
    // console.log(datei, sprache)

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
            en: 'Template system for cover letters and CV. Including Bash Script for copying and renaming files and converting them with Pandoc to html. Giving support as a full stack developer with focus on Frontend.',
            de: 'Einsatz von Git auf verschiedenen Systemen, u. a. Linux und Android. Javascript und Html Templating für Bewerbungsanschreiben und Lebenslauf'
        },

        erfahrung_win: {
            de: 'Benutzerbetreuung im Team für 100 Benutzer. Softwareverteilung, Umstellung von Windows 7 auf Windows 10. Erstellen von Skripten. Erweiterung einer MS Access und Excel VBA Anwendung zur Prüfung und Berechnung von Bodenwerten.',
            en: 'Fileserver automation. Software deployment. Working with a client focused team, contributing to new features in the distributed system of a german public service (Virtualization). Extension of existing client machines. Involved in designing and implementing new features for a web-based platform. Moving server data from outside to the HQ including folder permissions in NTFS. Automating the whole process and copying data over the wire with multithreading.'
        },


        h_studium: {
            de: 'Diplom-Verwaltungsinformatiker (dual)',
            en: 'Bachelor IT dual degree'
        },

        h_studium_ausf: {
            de: 'Vergleichbar mit einem Informatik Bachelor an einer Hochschule',
            en: 'Bachelor in IT with focus on the public sector including public law and public controlling (administration for cities and villages)'
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
            en: 'tik9.github.io/cv'
        },

        job_frei: {
            en: 'Freelancer and software developer',
            de: 'Freelancer und Software Entwickler'

        },

        job_sys: {
            en: 'System-Administrator'
        },

        tools_job_web: {
            en: 'CSS, Javascript, Mysql, Php, Python'
        },

        tools_job_sys: {
            en: 'Bash, Docker, Git, Markdown, Python, Powershell'
        },
    }


    Array.prototype.forEach.call(templates, function (template) {

        innen = template.innerHTML

        template_ohne_kla = innen.slice(3, -3)
        wert = werte[template_ohne_kla]

        // de= wert['de']
        if (wert['de']) {
            spr = wert[sprache]
        } else {
            spr = wert['en']
        }
        // console.log(innen + ' -> '+spr)

        template.innerHTML = innen.replace(innen, spr)
    })
}
