Todo in React

Goal

The goal is to create todo application with one input field where we can add new things to do and check things we are finished.

npm start

I created react app with name todo and started my project with npm start.

I created App file where I had variable initialDetails with three default things to do with id and completed. In this file I had state for list, text, hidden, count, isChecked, status.. That stets I pass down as props to the child component. After that I created Header file where I had title with upper case and that file I imported in App file. 
I created Form file for input filed with value and onChange. For the form tag I created handleSubmit-inside that I had new list variable. Also, I created hadnleChange for input field. That file I added in App file. 

I created ToDoList file where I had unordered HTML list tag and I used map statement to display the list, also I had input tag for checkbox with value and onChange-for that I created function handleChange to show if same things is completed or not. This file I added in App file.
I created Footer file where had footer tag with two icons, one for plus and another for search. I also had unordered list with three buttons, one for all list, second for the active list and third for completed list. For this buttons I created statusHandler function. I also created filtersHandler for this three case, to show only things that apply to them. That function I put in useEffect.
I created index.css for styling this application.
