
import { ChatHandler, chat_names } from './ChatHandler.js';

onload = function () {

    const chatlist = document.getElementById('chat-list');  // chatlist
    const add = document.getElementById('generate-step'); //generate button
    const text = document.getElementById('temptext');  //refrance to the text area 

    const templates = document.getElementsByTagName('template')[0]; // referenace to the list items that were in the template
    const chat_item = templates.content.querySelector("li"); //list item

    const chatHandler = new ChatHandler(chat_item, chatlist);
    let chats = []; // id of sabi logo ka jo chat list mai hai 

    add.onclick = function () {
        
         // agar r> 0.75 se bada aur chat empty nhi hai
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            
            //random id lo aur delete krdo aur fir update krdo
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            //text area m btao msg aya
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };
};
