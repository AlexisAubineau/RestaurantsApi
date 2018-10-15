

# Api Restaurants

Réalisée lors d'un cours de **Node JS**, cette application a eu pour but d'apprendre à utiliser les **ORM** pour la création d'une API  _Node JS_.

## Installation 

Cette application nécessite d'avoir nodeJs d'installé.
```bash
git clone https://github.com/Thorin10/ApiRestaurants.git
npm install 
node app.js
```

## Utilisation

### Routes

Voici la liste des routes de l'application.    

| Route | Méthode | Retour |
| --- | --- | --- |
| /restaurants | GET | Les restaurants |
| /restaurant/:id | GET | Le restaurant correspondant à l'id |
| /restaurant | POST | Ajoute un restaurant |
| /restaurant/:id | PUT | Modifie le restaurant correspondant à l'id |
| /restaurant/:id | DELETE | Supprime le restaurant |
| /:restaurantId/employees | GET | L'employé correspondant au restaurant |
| /employee/:id | GET | L'employé correspondant à l'id |
| /employee | POST | Ajoute un employé |
| /employee/:id | PUT | Modifie l'employé correspondant à l'id |
| /employee/:id | DELETE | Supprime l'employé |
| /:restaurantId/menu | GET | Le menu correspondant au restaurant |
| /menu/:id | GET | Le menu correspondant à l'id |
| /menu | POST | Ajoute un menu |
| /menu/:id | PUT | Modifie le menu correspondant à l'id |
| /menu/:id | DELETE | Supprime le menu |
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE2NzgzMjA4OCwtMjEzMTY2MDI1NV19
-->
