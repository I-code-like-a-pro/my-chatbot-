import React,{ useState } from 'react';
import { getChatResponse } from '../gemini';
import { Send } from 'lucide-react'
function ChatInput({ chatMessages, setChatMessages}){
    const [inputText,setInputText] = useState('');

    const saveInputText = (event) => {
        setInputText(event.target.value)

    }
    const  sendMessage = async ()=>{
        const newChatMesages =   [
                  ...chatMessages,
                  {
                        message:inputText,
                        sender:'user',
                        id:crypto.randomUUID()
                  }
            ]
            setInputText('')
           setChatMessages(newChatMesages)
           const response = await getChatResponse(inputText);
            setChatMessages(
            [
                  ...newChatMesages,
                  {
                        message:response,
                        sender:'robot',
                        id:crypto.randomUUID()
                  }
            ])

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

            <button  className="send-button" onClick={sendMessage}>
                <Send size={16}/>
            </button>
           
        </div>
        
       
    );
}

export default ChatInput