import { useState } from 'react'
import Chatbot from './chatbot';
import './App.css'

import ChatInput from './components/chatinput'
import ChatMessage from './components/chatmessage'

function App() {
      const [chatMessages,setChatMessages] = useState(
            [
            {
                  message:"hello chatbot",
                  sender:'user',
                  id:'id1'
            },
            {
                  message:"Hello! How can I help you?",
                  sender:'robot',
                  id:'id2'
            },
            {
                  message:"can you get me today's date",
                  sender:"user",
                  id:'id3'
            },
            {
                  message:"Today is september 7",
                  sender:"robot",
                  id:'id4'
            }]);
  return (
      <div className='app-container'>
             <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
      {chatMessages.map((chatMessage) =>{
            return(
                  <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        chatMessage={chatMessages}

                  />
            )

      })}
      
      </div>
  )
}

export default App
