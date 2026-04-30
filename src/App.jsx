import { useState } from 'react'
import './App.css'

import ChatInput from './components/chatinput'
import ChatMessage from './components/chatmessage'
import Header from './components/Header'

function App() {
      const [chatMessages,setChatMessages] = useState(
            [
            {
                  message:"Hello how can I help you today?",
                  sender:'robot',
                  id:'id1'
            },
            
        ]);
return (

    
    <div className='app-container'>

        <Header/>
       <div className='messages-container'>
         {chatMessages.map((chatMessage) => (
            <ChatMessage
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
            />
        ))}
        <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />

       </div>
    </div>
)
}

export default App
