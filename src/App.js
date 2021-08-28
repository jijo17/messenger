import React,{ useState ,useEffect} from 'react';
import {Button, FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const[input, setInput]= useState('')        
  const [messages, setMessages]= useState([]);
  const [username,setUsername]=useState('')

  useEffect(() => {
    //run once when the app componet loads
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{                 //it is a listener,listening to any chagnes and take real time snapshot of database
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  }, [])

  useEffect(() => {    //run code on condition in recat
    //const username= prompt('please enter your name')                
    setUsername(prompt('please enter your name'))               //runcode
  }, [])   //condition  ,,if blank runs code once when page loads

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('');

  }
  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1d62NYX0lLpfTOXIj1ty0UUctthennhwFQ&usqp=CAU"/>
     <h1>Hello!!</h1>
     <h2>Welcome {username}</h2>
     <form className="app__form">
     <FormControl className="app__formControl">

       <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event=>setInput(event.target.value)}/>
       <IconButton className="app__iconButton"  disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessage}>
         <SendIcon/>
       </IconButton>
      </FormControl>
     
     </form >
     <FlipMove> 
     {
       messages.map(({id,message})=>(
         <Message key={id} username={ username} message={message}/>
        ))
     }
     </FlipMove>
    </div>
  );
}

export default App;
