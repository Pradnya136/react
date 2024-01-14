create files html, css, app.js
write code in html - create root div 
create css file add in html
we used cdn to inject react first then removed those cdn links
did npm init to create package.json file
installed react n react dom - created react elements using react.createElement and import react using jsx n fucntional component
installed parcel bundler to start project by npx parcel index.html
edited scripts added start n build - so now we use npm start n npm run build 
installed browerslist
create .gitignore file add node_modules, dist, cache , .gitignore

-----------------------------
to create package.json - npm init 


--------------------------------
to initialize git - git init
git add .
git commit -m "commit"

git remote add origin https://yourgithubrepo
git push -u origin master (as your default branch name would main den do main or else master)
    (you can change your default branch on github settings > default branch > switch symbol)
----------------------------------------------------------------------------------------------

virutalDOM - virtualdom is a programming concept where an ideal or virtual represtation of ui is kept in a memory and sycned with 
real dom by the library such as react dom. is called as reconcilation.

reconcilation - is core algorithm in react which compares current state to previous state in dom to make the particular necessary updates
instead updating whole ui.

react fiber - a new reconciler in react, its a complete rewrite of react core algorithm.It enables incremental rendering which divides
rendering working into smalls chunks and updates efficiently. react fiber is designed as asycnrous means it can interpreted and time
react fiber has tree based data structure represtation of dom which it uses to makes updates. it does this by checking current state
with previous state and make the changes which makes it more smoother and responsive.

config driven ui - is an approach / technique where ui of website is created based on configuration file. config driven ui determines the 
layout and content in the components, basically it is an approach to create website ui based on the data recevied from API.

optional chaining =  to use optional chaining (?.) to handle potential undefined values. This way, if any property in the chain is undefined, it won't throw an error:
--------------------------------------------------------

Assignment 3 - 
fetching swiggys api  = swiggy.com > inspect > reload page > network > fetch xhr  search fr resto list