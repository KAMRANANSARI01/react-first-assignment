//  Create a component na6ed "Person" that takes two props - "name" and "age". The component should display the persons name and age in a paragraph element.

import { useState } from "react"

function Person ( props){
    return(
        <p>{props.name}is {props.age} year old</p>
    )
}

// uses

<Person name ="KAMRAN" age="22"/>

//  Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked.

function Button (props){
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

// uses

<Button text="Click Me!" onClick={()=>console.log("Button is Clicked.")}/>

//  Create a co6ponent na6ed "Header" that takes one prop - "title". The component should display a header element with the given title

function Header(props){
    return (
    <h1>{props.title}</h1>
    )
}

<Header title = "Text Utils"/>

// Create a component na6ed "List" that takes one prop - "items". The component should display an unordered list ele6ent with the given list items.
function List(props){
    return(
        <header>
            <nav>
            <h1>{props.title}</h1>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
            </nav>
        </header>
    )
}
// uses
<List title ="Text Utils" item1 ="home" item2="about" item3 ="contact"  />

// or second way

function List(props){
    const listItems = props.items.map((every)=>{
        <li key={every}>{every}</li>
    })
    return <ul>{listItems}</ul>
}
// uses
<List items={['home','about','contact']}/>