# Project Overview

## Project Links

- [https://github.com/tonim99/projectUnit2]
- [https://mydictionary.netlify.app/]

## Project Description

Dictionary app with audio pronunciation pulled from Merriam Webster API

## API

Merriam Webster collegiate dictionary api


```
meta": {
"id": "voluminous",
"uuid": "0d01b967-971f-4ec5-8fe0-10513d29c39b",
"sort": "220130400",
"src": "collegiate",
"section": "alpha",
"stems": [
"voluminous",
"voluminously",
"voluminousness",
"voluminousnesses"
],
"offensive": false
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://www.figma.com/file/JGW28BrVXUjCOHdNJqwz6W/Untitled?node-id=0%3A1]
- [https://docs.google.com/drawings/d/1G5UeUqxyZw6PiOo8dZhPyKnb8Lehl8P47gFreboedmQ/edit?usp=sharing]


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- add pronunciation audio
- add Thesaurus
- add sidebar from nav w/choices for Dictionary/Thesaurus 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header and title | 
| Dashboard | This will render the instructions and example to user |
| Information | This will render the definitions and audio | 
| Form | This will render the search input box | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set Up Components | H | 3 hrs |4 hrs | |
| Make API call | H | 3 hrs | 3 hrs | |
| Rendering data to Dashboard| H | 3 hrs | 11 hrs | |
| Working with hooks | H | 3 hrs | 4 hrs | |
| Adding Form | H | 3 hrs | 1 hr | |
| Styling with SCSS | H | 3 hrs | 6 hrs |
|Debugging| H | 3 hours| 15 hrs |
| Total | H | 24 hrs| 44 hrs | |

## Additional Libraries
 SCSS  

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
{
  props.words[0] &&
  <h1>{props.words[0].hwi.hw}</h1>
}
{definition[0] && (
  <p>{definition[0].shortdef[0]}</p>
)}
```
