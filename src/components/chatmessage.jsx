import react from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import {Bot, User} from 'lucide-react'


function ChatMessage({message,sender,chatMessages}){


    return(
        <div className={sender === "user" ? 
                                  'chat-message-user' 
                                : 'chat-message-robot'}
        >
            {
                sender === "robot" && 
                ( <div className='avatar bot-icon'><Bot size={16}/></div>
            )}
            <div className={`bubble ${sender === 'user' ? 'bubble-user' : 'bubble-robot'}`}>
        {message}
      </div>
            {(sender === "user") && 
            ( <div className='avatar user-icon'><User size={16}/></div>)}
        </div>
    )

}

export default ChatMessage