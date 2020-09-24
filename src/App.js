import React from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import netlifyAuth from './netlifyAuth.js'




function App() {
 
 let [user, setUser] = useState(null)
 
 
 let login = () => {
  netlifyAuth.authenticate((user) => {
    setLoggedIn(!!user)
    setUser(user)
    netlifyAuth.closeModal()
  })
}

let logout = () => {
  netlifyAuth.signout(() => {
    setLoggedIn(false)
    setUser(null)
  })
}
 
 let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

useEffect(() => {
  netlifyAuth.initialize((user) => {
    setLoggedIn(!!user)
    setUser(user)
  })
}, [loggedIn])
 
 
var myArray = [
"Build the most elaborate blanket fort and spend a night in it.",
"Go to the cinema at a random time and see the first film showing",
"Go and hunt down an ice-cream van to buy an ice-cream from",
"Climb a hill or mountain or tall building and perform a song at the top of your voice",
"Pick hot chocolate or ice-cream or dessert, and find three new places to try them from",
"Design and enjoy a really decadent bathing experience",
"Get super dressed-up (either fancy clothes or costume) and go to work or grocery shopping or taking the bins out",
"Make a really special care package and send it to someone",
"Pick 1 to 3 random words and make a piece of art/performance/song/poem/story/anything else inspired by them",
"Go for a walk at night and explore somewhere new (being safe!)",
"Put a pin in a map of the world blindfolded and then try to cook a meal from that country",
"Edge of glorying - dance like noone's watching, i.e. naked",
"Go to the beach in whatever way is possible (real beach, imaginary beach, watching a beach film while lying on a towel in swimwear, etc...)",
"Go down the first few aisles in the grocery store without looking and stop at a random point to grab whatever comes to hand and make a meal out of these",
"Remake something you do not want any longer into something good or useful",
"Use a coin toss to make all your non-vital decisions for a day",
"Go wild swimming (and if this is something you do regularly, pick somewhere new)",
"Pick a day and look up on wikipedia what things are celebrated that day (festivals across the world, days of remembrance, famous people's birthdays), and celebrate one of them",
"Alter a t-shirt into something cool and new, and wear it",
"Pick a film and arrange a special showing (e.g. sing-along, wear costume, themed snacks, or make a live-action version)",
"Make a transformation video (or yourself, a friend, an object, etc)",
"Make bubbles (as big or as many as possible)",
"Be a manic pixie dream girl.",
"Make a Rube Goldberg Device.",
"Test a dev branch"
];


var randomItem1 = myArray[Math.floor(Math.random()*myArray.length)];
var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
var randomItem3 = myArray[Math.floor(Math.random()*myArray.length)];



 return (
    <div className="AMPDG">
      <header className="App-header">
        <h1>Automanic Pixie Dream Girl</h1>
		teaching broodingly soulful young men to embrace life and its infinite mysteries and adventures as a service.
	  </header>
	  <div class="background">
    
	<div class="transbox">
  {loggedIn ? (
  <div>
	{user && <>Hello {user?.user_metadata.full_name}!</>}
	<br />
	<button onClick={logout}>
    Log Out
	</button>
  </div>
) : (
  <div>
  
  <button onClick={login}>
    Log in here.
  </button>
  <br/>
  This doesn't make a difference to anything yet. But the whole identity code does seem to work. so... yay?
  </div>
)}

 .
  
 </div> 
  
  <div class="transbox">
        <h2>Here's the rules</h2>
        <ul>
		   <li>Everyone gets given a random thing to do at the start of the month</li>
           <li>You have a month to do the thing</li>
           <li>You should document the thing in some way to share (a photo, video, some words)</li>
           <li>IF you post about it on twitter you can use the hashtag #AMPDG</li>
           <li>You should add ideas to the ideas pool in return</li>
		</ul>
</div>
  <div class="transbox">

        <h2>Choose Your Adventure!</h2>
        <h3>Chose one of these three adventures:</h3>

		

        <ul>
          <li>{randomItem1}</li>
          <li>{randomItem2}</li>
          <li>{randomItem3}</li>
        </ul>
</div>
  <div class="transbox">

<h2>Submit an adventure for someone else</h2>
<ul>
<li>Should be achievable in roughly half a day of time</li>
<li>Should not cost more than 20 quid</li>
<li>Should be legal</li>
<li>Not everything will be possible, so you get to have a new thing if it is not possible for you</li>
</ul>

<h1> <a href="https://forms.gle/tLa1eAkkWaukdK3p9"> Click here! </a></h1>



  </div>
</div>

  <div class="footertransbox">
  
  <small> ©2020 David Rickmann and Emily Down </small>
  
  </div>

<div class = "donation">
  <a href='https://ko-fi.com/M4M0MP6Z' target='_blank' rel="noopener noreferrer"><img height='36' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
 </div> 

    </div>
  );
}

export default App;
