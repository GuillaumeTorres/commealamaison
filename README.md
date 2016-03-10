Comme à la maison
=====================

Application de service entre voisins

#### Installation

```
$ npm install
```
#### Lancer l'application

```
$ npm run server
$ npm run client
```

#### Documentation


- [Doc AngularJs](https://docs.angularjs.org/api)
- [Vidéos AngularJs](https://www.youtube.com/playlist?list=PLjwdMgw5TTLUDlJyx4yIPQjoI-w-7Zs1r)
- [Openclassroom](https://openclassrooms.com/courses/developpez-vos-applications-web-avec-angularjs)

- [Vidéo Html/CSS - Sass](https://www.youtube.com/watch?v=_SEwzS1vG28)

- [Vidéos git](https://www.youtube.com/playlist?list=PLjwdMgw5TTLXuY5i7RW0QqGdW0NZntqiP)

#### Structure

Le développement se fera exclusiement dans le dossier _./src_.
Le fichier _./config.js_ contient les routes de l'application, il sera modifié à chaque nouvelle page.
Tout le style se trouve dans _assets/css_. Un fichier.scss par page à importer dans le _main.scss_.

Les modules js sont avec le html dans le dossier _views_

### Git

Lors du développement d'une nouvelle fonctionnalité, mettre son projet à jour puis créer sa branche
```
$ git pull
$ git checkout -b my_branch
```
Une fois le développement terminé
```
$ git status
$ git add chemin/vers/fichier.xxx
$ git commit -m "Ce que j'ai fais"
$ git push origin my_branch
```
Vous verrez vorte branche apparaître sur github et pourrez créer une pull request pour la merge avec develop.
Pour plus de détail : [Les branches](https://www.youtube.com/watch?v=THsj6g_kG10)

## Description

### [npm](https://www.npmjs.org/) _(package manager)_

Toutes les bibliothèques externes sont gérées avec npm, listées dans _package.json_ et présentes dans le dossier *./node_modules*.(A ne jamais commit !)

### [sass](http://sass-lang.com/) _(css pre-processor)_

Lors de la compilation du sass vers le css, on utilise [autoprefixer](https://github.com/ai/autoprefixer) qui ajoute les _vendor prefixes_ nécessaires donc inutile de les écrire nous même.

### Font icons

Pour améliorer les performances et avoir un design propre quelle que soit la résolution, nous utilisons une font-icon.
Pour la générer: http://fontello.com/
