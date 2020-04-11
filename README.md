# covid19safezone
Be informed about the location that you are going to visit if the location is visited by a person having COVID-19 symptoms or tested postivie.

## Steps to setup this project in your local Windows OS

1. Install nodejs@latest and npm latest and git
2. create a project folder in your local drive (C:/Development/covid19safezone)
3. git clone https://github.com/msrikanthkan/covid19safezone.git
4. Login into firebase and go to console.
5. Create a project covid19safezone and enter all the details.  you may need to change the name if it is used.
6. Now go to C:/Development/covid19safezone/covid19safezone and run <code>npm i -g firebase-tools</code> 
7. C:/Development/covid19safezone/covid19safezone <code>firebase login</code>
8. C:/Development/covid19safezone/covid19safezone <code>firebase init</code>
    a. Select Hosting option for setup
    b. Enter public folder name as wwww
9. An index.html file will be created under www. (make sure this index.html does not over write the index.html from cloned project)  
10.To run locally C:/Development/covid19safezone/covid19safezone <code>firebase serve</code>
11. To deploy on firebase hosting C:/Development/covid19safezone/covid19safezone <code>firebase deploy</code>

12. In a new browser open the application using localhost:5000
13. you can also visit the hosted application at <a href="https://covid19safezone.web.app">covid19safezone</a>
