# La Station meteo #

Cette application est un exercice visant accessoirement à manipuler le html et css,
mais surtout à créer des services JavaScript et constructeurs de vue respectant les principes de la POO et du modèle "MVC"

## Le service ##

Le service a été façonné en fonction des besoins client.
chaque méthode get du service correspond à une méthode HTTP Get et visera à répondre à un besoin fonctionnel spécifique.

Classe : HttpWeatherRequest

## Le constructeur de vues ##

Une "classe" qui permet de créer via ses méthodes différents éléments de la page (section température, section météo, section éphéméride).

Dépendant aux services (couplage fort), une injection de dépendance a été nécéssaire.

Classe : ViewBuilder

## les data ##
Un dossier data, a pour but de regrouper des données et méthodes visant à formater les données brutes reçues par l'API

## Le TypeScript ##

L'installation de TS fut un échec dans ce projet, une partie du code a été néanmoins laissé intacte, même si elle n'est pas utilisé, elle peut servir de modèle