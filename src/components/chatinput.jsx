import React,{ useState } from 'react';
import Chatbot from '../chatbot';

function ChatInput({ chatMessages, setChatMessages}){
    const [inputText,setInputText] = useState('');

    const saveInputText = (event) => {
        setInputText(event.target.value)

    }
    const sendMessage = ()=>{
        const newChatMesages =   [
                  ...chatMessages,
                  {
                        message:inputText,
                        sender:'user',
                        id:crypto.randomUUID()
                  }
            ]
           setChatMessages(newChatMesages)
           const response = Chatbot.getResponse(inputText);
            setChatMessages(
            [
                  ...newChatMesages,
                  {
                        message:response,
                        sender:'robot',
                        id:crypto.randomUUID()
                  }
            ])

           setInputText('')

      }

  
    return(
        <div className='chat-input-container'>
            <input
                    placeholder='Send a message to chatbot' 
                    size="30" 
                    onChange={saveInputText}
                    value={inputText}
                    className='chat-input'
            />

            <button  className="send-button" onClick={sendMessage}>Send</button>
           
        </div>
        
       
    );
}

export default ChatInput