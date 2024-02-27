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

https://jsonplaceholder.typicode.com/ = a free online REST API that you can use whenever you need some fake data

used - https://corsproxy.org/ for solving cors issue instead of corsproxy.io , we can also use cors-anywhere.herokuapp.com
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
In JavaScript, optional chaining is an operator that lets users safely try to access values nested inside of an object. It was introduced in ES2020.


Exporting files have two ways - 1. default export 2. named export 
by using named export we can export multiple values from a file
where as default export is used to export only single value 
 by using export * as - we can export all named export and default export values from a file-
     eg export * as foo from bar - means exporting all named export and default export from bar as foo.


why config .js is imp  - is it allows developers to store and manage application-level configuration settings in a central location. This makes it easy to update and maintain the application's configuration, and it also helps to keep the code itself clean and organized.


react hooks - react hooks in simple term is a simple javascript utility function. it is like in built fn by react which have some powerful powers. there are major two main react hooks which are mostly used 1. useState hook which is used to manage state and 2.useEffect

why we need useState hook - it allows you to add state to functional component, it returns an array with two values, first is current state n second is fucntion to be updated.the hook takes initial state value as an arg and returns updated state value when the setter is function is called.
 to change the state of variable by using simple and less code. it helps to update dom effeicntly and more faster.


shimmer UI ? - A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear

Microservice - it is an software artitechture pattern that builds software using collection of services which are scaled , developed deployed and updated indepentendly, here specific team work for specific services, also use of mutliple tech stacks are used.

Monolith - it is an software artitechture pattern where all major features, fucntions are kept together in one unit. It consist of UI, Frontend ,Backend, and Database all files together.

A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services

why we need useEffect hook - if we want to update something after the Dom has been updated we use useEffect. it take 2 arg, function cb n array of dependency

What is the difference between JS expression and JS statement
    - Expression produces value or ends ups giving value where as statement are instructions or commands which can include expression to perform specific action.

Conditional Rendering - it is a process of displaying different content on basis of a condition inshort if you render something according to a condition it is called as conditional rendering.

CORS = cross origin resource sharing is a mechanism of brower that allows controlled access to resources outside the domain
CORS is a security feature that restricts web pages from making requests to a different domain, protocol, or port than the one that served the web page. It helps to ensure that only authorized domains can access sensitive data or resources




--------------------------------------------------------

Assignment 3 - 
fetching swiggys api  = swiggy.com > inspect > reload page > network > fetch xhr  search fr resto list

---------------------------------------------------------------ther are 
test cases :- 

3 types of test cases :- 1. Unit testing
                         2.Integration testing
                         3.End to End testing 



----------------------------------------------------------------
How to setup application to write test cases:- 
    1.install react testing library
    2.install jest library
    3.under using babel from jest website - add/install additional dependencies to use along with babel from jest website
      npm install --save-dev babel-jest @babel/core @babel/preset-env
    4.from jest website -config babel on root level
    5.then config .parcelrc file on root to disable default parcel transpilation from parcel website > js>babel>usage with other tools
    6.do npx jest --init (config jest ans qus - no,jsdom,yes,babel,yes)
    7.install jsdom liabray = npm i -D jest-enevironment-jsdom
--------------------------------------------------------------
start writing test cases inside components folder create __tests__ folder inside that create tests files. eg sum.test.js
we write a test() which takes 2 arg = 1. a string which is description
                                      2. which is a callbck fn()

                                      test("this should return sum of two no.s", {
                                        const res = sum(5,2)
        this is asseration -->          expect(res).toBe(7)
                                      })

                             dunder = __test__


Lesson 3 QnA - 

Q1. What is NPM?
NPM, or Node Package Manager, is the default package manager for Node.js and JavaScript. It facilitates the installation, management, and sharing of JavaScript packages, providing a central registry for developers to publish and discover code packages.

Q2. What is Parcel.js?
Parcel.js is a fast, zero-config JavaScript module bundler. It simplifies the build process by requiring minimal configuration, allowing developers to focus more on coding and less on setup. 

Q3. What is Webpack?
Webpack is a popular module bundler for JavaScript applications. It takes your project's dependencies, such as JavaScript, CSS, and images, and bundles them into static assets.

Q4. What is NPX command?
npx is a package runner tool that comes with NPM. It is used to execute packages directly from the NPM registry, making it easy to run binaries from dependencies without the need to install them globally.

Q5. What is the Parcel-cache folder, and why is it created?
The parcel-cache folder is created by Parcel.js to store cached data, enhancing build performance. It helps in speeding up subsequent builds by reusing previously processed data, ultimately optimizing the development workflow.

Q6. What are dev dependencies?
 devDependencies section of package.json, include packages necessary for development and testing but not for the production environment. 

Q7. Features of Parcel.js?
Parcel.js boasts features like zero configuration, automatic code splitting, hot module replacement, and out-of-the-box support for various asset types.

Q8. What is the .gitignore file?
The .gitignore file specifies files and directories that Git should ignore. It helps in preventing unnecessary files, like build artifacts and dependencies, from being tracked by version control.

Q9. What is the difference between package.json and package-lock.json?
package.json lists project metadata and dependencies, while package-lock.json provides a detailed, version-specific representation of the project's dependency tree. 

Q10. Why should you not modify package-lock.json?
Modifying package-lock.json directly is discouraged as it can lead to inconsistencies in dependency versions. It is automatically generated and should be treated as a calculated output rather than an editable file.

Q11. What are node_modules?
The node_modules directory contains the dependencies required for a project. It is automatically created by NPM during the installation of packages.