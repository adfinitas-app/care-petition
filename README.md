# base-refonte-sites
Template used to recreate websites

You can see the result here : http://adfinitas-app.github.io/base-refonte-sites (doesn't work because of relative directory link)

####Layouts
* Default create the sidebar
* Pages use default and add the header (with the name of the page)
* Docs use default and add the header (with the name of the page, the subsection, and with a Previous and Next button)

####Modules
- [x] Image
- [x] Video
- [x] Slideshow (Will use [Slick](http://kenwheeler.github.io/slick/) in the future)
- [x] Map (use [Leaflet](http://leafletjs.com/))
- [x] Annonces / Etablissements / News / Document (!! to finish)
- [X] Bloc campagne / financer un projet / Progressbar
- [X] Links
- [X] Zone de boutons personalisée
- [X] Print
- [X] Module texte avec tailles, gras, italique, liste à puces, citations
- [X] Equivalence de don personalisée
- [X] Calculette fiscale
- [X] Pour plus d'informations / Formulaire
- [X] Search box using Swiftype
- [X] Module footer

#### V2 :
- [ ] Module Woopra
- [ ] Module dyngrid
- [ ] Replace Orbit Slider with [Slick](http://kenwheeler.github.io/slick/) (because Orbit bug in mobile view when deploying the menu)
- [ ] Lighter version of Foundation
- [ ] Improve configuration of Swiftype module
- [ ] Search box with [Lunrjs](http://lunrjs.com/), ruby module to parse pages (to index only text, not code)

Every modules are in the ```_includes``` directory  
To see the needed variables, check index.html

####To do :
* Utiliser Block grid for etablissements / annonces
* Reconfigure Swiftype (with valid URL)
* Add alt attribute on every img and <a> tag
* logo et bouton donner oeuvre falret
* http://jekyllrb.com/docs/datafiles/ _data for map module (markers position)
* Module Annonces => Utilisation des articles de collection

* Passer tous pictogram + titre dans un seul include
* Bouton next / preview header
* Update good color left bar
* div de fond pour article selectionné (barre sur le coté)
* Séparer le JS dans un fichier à part
* Customiser CSS/foundation.scss pour enlever les modules non requis
* grep -iHR "Continue to"  *
* grep -iHR "overview"  *
* grep -iHR "/guide/"  *
* grep -iHR cloudcannon

* Make a doc
* créer site cloudcannon (oeuvre falret)
* SEO

Doc to update
* D’après la doc officiel 
« Don't forget to add YAML for processing
Files in collections that do not have front matter are treated as static files and simply copied to their output location without processing. »
Sauf que CloudCannon utilise bien Frontmatter dans ces dossiers de collection, donc est-ce que la doc ne serait plus à jour ?
* Modulo filter

Bugs to report :

* Too long vars doesn't work (Jekyll)
* {% assign module.button_text = 'text' %} not working
* SUCCESS alert-box not in container (minus margin make it bug)
