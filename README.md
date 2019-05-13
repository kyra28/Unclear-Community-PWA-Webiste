
#### Algorithmique pour le Web
#### Polytech Paris-Sud
#### 2018/2019

<p align="center">
  
<h1> Unclear-Community-WPA-Webiste </h1>
https://pwa-client.firebaseapp.com/
</p>

# Getting started : Back-end

Go to `back/`

Install dependencies with `npm install`

## Compiling

To compile the back-end application, just run `tsc` on the root folder, compiled JavaScript will be in `dist/`.

## Running

`sudo docker-compose down`
`sudo docker-compose build`
`sudo docker-compose up`

## Testing

Go to http://localhost:3000/


# Getting started : Front-end

Go to `front/pwa-client/`

Install dependencies with `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


# Presentation 

## Authors 
PICHARD Antoine

SBAYTTI Jihane

##	Thème :
Présentation d’une Association de Jeux Vidéos (News, Equipes, Matches, etc) 

##	Rubriques : 
-	News : feed d’actualités
-	Equipes : liste des équipes et leurs membres
-	Events : liste des évènements à venir et résultats des matches et tournois passés
-	Partenaires : liste des sponsors
-	Streams (optionnel) : liste des chaînes de diffusion en direct sur la plateforme Twitch

##	Technologies :
-	 Serveur : API REST Node.js
-	 Interface : Angular, Typescript, HTML, CSS

##	Découpage User Story : 
-	En tant que visiteur, je veux lire les dernières actualités de l’association. 
-	En tant que visiteur, je veux me renseigner sur les membres des équipes de l’association. 
-	En tant que visiteur, je veux me renseigner sur les résultats des matches passés et les évènements à venir de l’association. 
-	(optionnel) En tant qu’administrateur, je souhaite m’authentifier à mon compte pour gérer le site : poster des news, ajouter des partenaires, créer une équipe, etc.

##	PWA Features : 
-	Recevoir des notifications sur les matches à venir en rappelant la date et l’heure prévues pour la diffusion (à J-1 et le jour J)
-	Recevoir des alertes pour annoncer la publication d’une prochaine news programmée
-	Avoir des informations générales sur l’association à tout moment : les équipes, la liste des membres, la liste des partenaires. 
