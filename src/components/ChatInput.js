
import React,{useState} from 'react'
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import "./ChatInput.css";
import firebase from "firebase"
const ChatInput=({channelName,channelId})=> {

    const [input ,setInput] = useState();
    const [{user},dispatch] = useStateValue()

    const sendMessage =(e) =>{
        e.preventDefault();
        console.log(channelId+"is id")
        if(channelId){
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user?.displayName,
                userImage:user.photoURL

            })
        }
    }
    return (
        <div className="chatinput">
            <form>
                <input placeholder={`Message #${channelName}`} value={input} onChange={e=> setInput(e.target.value)} />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput;
