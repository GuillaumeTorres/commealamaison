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

#### Structure

Le développement se fera exclusiement dans le dossier _./src_.
Le fichier _./config.js_ contient les routes de l'application, il sera modifié à chaque nouvelle page.
Tout le style se trouve dans _assets/css_. Un fichier.scss par page à importer dans le _main.scss_.

Les modules js sont avec le html dans le dossier _views_

## Description

### [npm](https://www.npmjs.org/) _(package manager)_

Toutes les bibliothèques externes sont gérées avec npm, listées dans _package.json_ et présentes dans le dossier *./node_modules*.(A ne jamais commit !)

### [sass](http://sass-lang.com/) _(css pre-processor)_

Lors de la compilation du sass vers le css, on utilise [autoprefixer](https://github.com/ai/autoprefixer) qui ajoute les _vendor prefixes_ nécessaires donc inutile de les écrire nous même.

### Font icons

Pour améliorer les performances et avoir un design propre quelle que soit la résolution, nous utilisons une font-icon.
Pour la générer: http://fontello.com/
