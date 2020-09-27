import React from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import netlifyAuth from './netlifyAuth.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


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
 
 



 return (

 
 
 
    <div className="AMPDG">
	




      <header className="App-header">
        <h1>Automanic Pixie Dream Girl</h1>
		teaching broodingly soulful young men to embrace life and its infinite mysteries and adventures as a service.
	  </header>
	  
	  
	  <Router>
      <div className = "navlist">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adventures">Adventures</Link></li>
            <li><Link to="/submit">Submit</Link></li>
			<li><Link to="/FAQ">FAQ</Link></li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/adventures"><Adventures /></Route>
          <Route path="/submit"><Submit /></Route>
		  <Route path="/Faq"><Faq /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
    
	
	
	<div class="loginbox">
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
  </div>
)}

 
</div>

  <div class="footertransbox">
  
  <small> ©2020 David Rickmann and Emily Down </small>
  
  </div>



    </div>
  );
}

function Home() {
  return <div class="transbox">
        <h2>What is this?</h2>
		The world as we know it is very much set up for us to do the same thing over and over and over. It's very easy to do spend months at a time doing nothing new or interesting at all.
		We thought it would be good to get a bunch of ideas and try and find a system to encourage ourselves and others to try them. So, here is a fairly rudimentary site that offers you up 
		three tiny seeds for an adventure. Go and do one. And then suggest an adventure yourself.
		
		
        <h2>Here's the rules</h2>
        <ul>
		   <li>We give you a random thing to do (well, 3 and you choose one</li>
           <li>You have a month to do the thing </li>
           <li>You should document the thing in some way to share (a photo, video, some words)</li>
           <li>IF you post about it on twitter you can use the hashtag #AMPDG</li>
           <li>You should add ideas to the ideas pool in return</li>
		</ul>
</div>;
}

function Adventures() {
	
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

	
	
  return <div class="transbox">

		

        <h2>Choose Your Adventure!</h2>
        <h3>Chose one of these three adventures:</h3>
		<button>{randomItem1}</button><br />
        <button>{randomItem2}</button><br />
        <button>{randomItem3}</button><br />
		<br />

</div>;
}

function Submit() {
  return <div class="transbox">

<h2>Submit an adventure for someone else</h2>
<ul>
<li>Should be achievable in roughly half a day of time</li>
<li>Should not cost more than 20 quid</li>
<li>Should be legal</li>
<li>If I get around to it you'll be able to see how many people have chosen your thing</li>
</ul>

<h1> <a href="https://forms.gle/tLa1eAkkWaukdK3p9"> Click here! </a></h1>



  </div>;
}


function Faq() {
  return <div class="transbox">
  
 <h3>Do I have to be a  broodingly soulful young man to participate? </h3>
 No! You can be any person of any gender or degree of brooding soulfulness. That's just a bit from wikipedia describing the natural prey of the manic pixie dreamgirl.
 <br />
 <h3>Why is it called Automanic Pixie Dream Girl? That's a kinda crappy trope isn't it?</h3>
 Yes it is! But it doesn't matter that the website os two dimensional with no real personality of it's own. It's a website, not a person.
 That aside, it seemed like an appropriate name for something which encourages people to have very very small adventures to shake them out of their humdrum lives.
 <br />
 <h3>Why is this website not very good?</h3>
 Because I don't really know how to write react yet. I'm working on it!
 <br />
 
  
  
  </div>;
	
	
}

export default App;
