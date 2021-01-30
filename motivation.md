---
---

{% include briefkopf.md %}

To whom it may concern:

&nbsp;
I herewith apply with the following qualification for the job mentioned above:  
&nbsp;

- Bachelor in IT (dual degree)
- 1 year experience creating web applications using backend and frontend like PHP, HTML, Python, JS
- Knowledge of Bash, Git, Powershell
- Willingness to learn in fields of 
- active [developer](https://stackexchange.com/users/1886776/timo?tab=activity)
- very good command of the english language

&nbsp;
&nbsp;

My salary expectation is negotiable, I am also available for part-time or project hours.

I can start as soon as you need me.

<!-- I work at present as <span class=tem>{ job_frei }</span>.   -->
&nbsp;

Kind regards
&nbsp;

Timo Körner


{% include date.html %}
{% include ags.md %}

<script>
document.getElementById('date').innerHTML=datef()

templates = document.getElementsByClassName("tem_ag")

    
comp=ags[0]['comp']

// console.log('comp',comp)

document.getElementById('comp').innerHTML=comp
document.getElementById('job').innerHTML=ags[0]['job']

</script>