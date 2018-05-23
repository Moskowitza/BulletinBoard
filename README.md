# BulletinBoard  
Neighborhood Bulletin Board for group Proj  
├──config  
|  └──config.json: is used to connect to our local mysql database  
├──db  
|  
└──schema.js : holds our schema to create user_db, run this file in workbench  
├──models: currently 3 files  
| └──index: default sequelize file  
| └──posts.js: a modeled table to hold a user's posts  
| └──users.js: a modeled table to hold posts  
├──public  
| └──assets   
| ├──css  
| └──style.css: general styling  
| └──js  
| └──cms.js  
|  
└──post.js  
|  
└──user.js  
├──routes  
|  
└──  
├──views  
| └──layouts  
|   └──main.handlebars 
|  
└──partials  
|  
|  
└──user.handlebars  
| └──index.handlebars   
├──package.json  
├──server.js  
