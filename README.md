# Degillo
An aspiring web-developer

## React-Tech-Exam
In answering this test, I have used NextJs to run the React Code  
As to why I used NextJs, first, this is the framework that I am most familiar with, in terms of dealing with react, and secondly, on the quickstart guide from react, theres no immediate guide for a standalone react usage.

### installation
`cd serino_degillo`  
`npm install`  

### running the react app
`cd serino_degillo`  
`npm run dev`  

### pages
- home: default from scaffolding app
- /question1: click counter
- /question2: todo with reducer
- /dataManipulation: just a frontend duplicate for data manipulation test

## Click Counter
For this test, I first converted the given code into Functional Component, reason being it is simpler.  
I did not find any issues after converting the code into Functional Component form
I used `useState` to handle the click counts.

## Todo with Reducer
For this test, I first focused on creating a reducer environment with the given reducer. Question, was it necessary to have created the whole reducer setup? I think solely just to solve the requirements of the test, it was not necessary. However, I want to share that I am not that `used to` setting up a reducer environment from the ground-up.

I used the projects that I was a part of as reference, looking at how they implemented `redux` in their projects (Though for this test only React was used). Following the patterns they implemented using redux package, I implemented a similar system for this test.  

`/lib/reducers` contains several files which handles the reducer ecosystem.  
first, combineReducer is pretty much just a copy implementation from redux  
second, globalState just defines the typescript types for all the reducers (even though its only 1)  
third, rootReducer defines the `root` reducer state of the system

for the todos reducer, I implemented, ADD_TODO, REMOVE_TODO, and SET_TODO_STATUS

a context/provider setup was also used to make sure that the rootReducer is available globally, it is setup in the main app/layout.tsx such that any and all pages/subpages will have access to the provider/context

## ChatGpt Assistance
- reducer ecosystem: as I shared, I was not particularly familiar with setting reducers from the ground-up, but nonetheless, making and implementing reducers is OK for me!
- tailwind emoji color: see serino_degillo\app\question2\page.tsx:46, I wanted to add a plus icon but the available color from UNICODE is not green
  
<br />

---

## Technical Exam - Data Manipulation
I just created a js file to be run using node

### running the file
`node .\dataManipulation.js`

the requirements was quite simple, it was mainly just creating an object with custom keys based on the `status` property of each `object element` of the input array.

for this one, I added some simple checks to make sure that the function provides sufficient response, where, it does not produce unexpected error, and provide error when the data itself is simply not workable.

### result of running the file
it shows 3 outputs  
first section shows the expected/OK result  
second section shows when the elements of the input array does not have the proper properties  
third section simply errors out

**this test is also available in the react app**

---

### Difficulties/Inconveniences Encountered
- [I] latest react doesn't recommend standalone setup
- [D] Took a long time implementing the reducer ecosystem
    - had some issues with the typescript types.
- [I] Duplicated dispatch calls, but seems to be intentional on React.StrictMode 
    - https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice
    - insight: its done this way to highlight unexpected side-effects
    - initially i had such case of unexpected side-effects indeed
    - with this code `todo.completed = !todo.completed`, with the purpose of toggling the completed boolean, the duplicated dispatch call highlighted that this way of coding is not the expected way of doing reducer
