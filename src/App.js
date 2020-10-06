import React, { Component } from 'react';
import './App.css';
import Modal from '../src/UI/Modal/Modal'
import { useEffect, useState } from 'react'
import netlifyAuth from './netlifyAuth.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import AdventureList from './components/AdventureList';
import AdventureList2 from './components/AdventureList2';

//load the doodles
import image1 from './doodles/doodle1.png'
import image2 from './doodles/doodle2.png'
import image3 from './doodles/doodle3.png'
import image4 from './doodles/doodle4.png'
import image5 from './doodles/doodle5.png'
import image6 from './doodles/doodle6.png'
import image7 from './doodles/doodle7.png'
import image8 from './doodles/doodle8.png'
import image9 from './doodles/doodle9.png'
import image10 from './doodles/doodle10.png'
import image11 from './doodles/doodle11.png'
import image12 from './doodles/doodle12.png'

const images= [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12  
  ];

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const shuffledimages = shuffleArray(images)
const shuffledadventures = shuffleArray(AdventureList2.adventures)

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
	     The world as we know it is very much set up for us to do the same thing over and over and over, and it's easy to get caught up in hoovering the floor rather than looking at the sunset. We thought it would be good to get a bunch of ideas and try and find a system to encourage ourselves and others to try them. So, here you are offered three tiny seeds for an adventure. Go and do one. And then suggest an adventure yourself.
		
		
        <h2>Here's the rules</h2>
        <ul>
	   <li> You get a <Link to="/adventures">random thing to do</Link> (well, 3 and you choose one)</li>
           <li>You have a month to do the thing</li>
           <li>You should document the thing in some way to share (a photo, video, some words)</li>
           <li>If you post about it on twitter you can use the hashtag #AMPDG</li>
           <li>You should <Link to="/submit">add ideas</Link> to the ideas pool in return</li>
		</ul>
</div>;
}

class Adventures extends Component {
 constructor(props) {
       super(props)
       this.state = { 
	       modalToggle: false, 
		   shuffledadventures: 0,
		   shuffledimage: 0,
		   adventureNum: 1
		   
       }
    }
  
  modalHandler = () => {
	this.setState({
      modalToggle: !this.state.modalToggle
    })
  }

setAdventure = chosen => {
	this.setState({adventureNum: chosen});
	this.modalHandler();
}

  render() {
    return (
      <div>
	  <div class="transbox">
	    <h2>Choose Your Adventure!</h2>
        <h3>Chose one of these three adventures:</h3>
        <button onClick={e => this.setAdventure(0)}>{shuffledadventures[0].title}</button>
        <button onClick={e => this.setAdventure(1)}>{shuffledadventures[1].title}</button>
        <button onClick={e => this.setAdventure(2)}>{shuffledadventures[2].title}</button>
		</div>

        <div>
        <Modal show={this.state.modalToggle} modalClosed={this.modalHandler}>
		  <div id = "notecard">
          <div id="pattern">
            <div id="content">
              <h3>{shuffledadventures[this.state.adventureNum].title}</h3>
			      {shuffledadventures[this.state.adventureNum].desc}
			    <div id = "doodle">
				<img src={shuffledimages[this.state.adventureNum]} alt="doodle" />
				</div>
            </div>
          </div>
		  </div>
        </Modal>
      </div>
	  </div>

    );
  }
}
 



function Submit() {
  return <div class="transbox">

<h2>Submit an adventure for someone else</h2>
<ul>
<li>Should be achievable in roughly half a day of time</li>
<li>Should not cost more than 20 quid</li>
<li>Should be legal</li>
</ul>

<h1> <a href="https://forms.gle/tLa1eAkkWaukdK3p9"> Click here! </a></h1>



  </div>;
}


function Faq() {
  return <div class="transbox">
  
	     <h3>Why is it called Automanic Pixie Dream Girl?</h3>
	     The name is based on the film trope Manic Pixie Dream Girl (MPDG), a stock female character whose only role in the film is to (in the words of critic Nathan Rabin, who invented the term) "teach broodingly soulful young men to embrace life and its infinite mysteries and adventures". They don't usually undergo any character development of their own, but are just adorably ditsy and look beautiful in their thrift-store clothing while they bring the dissatisfied man out of his shell and into a sparkling new phase of his life.
	     <br />
	     <h3>That's a kinda crappy trope isn't it?</h3>
 Yes it is! But it doesn't matter that this website is two dimensional with no real personality of it's own. It's a website, not a person.
 That aside, it seemed like an appropriate name for something which encourages people to have very very small adventures to hopefully add just a little extra sunshine to their lives.
	 <h3>Do I have to be a  broodingly soulful young man to participate? </h3>
    No! You can be any person of any gender or degree of brooding soulfulness. That bit just describes the natural prey of the Manic Pixie Dream Girl.
	     <br />
 <h3>Wow, this website is completely amazing!</h3>
 Thank you! Dave wrote it, and he is currently learning react so it's nice to know you appreciate the effort.
 <br />
 
  
  
  </div>;
	
	
}

export default App;
