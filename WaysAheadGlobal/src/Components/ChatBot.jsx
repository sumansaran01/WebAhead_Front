import React, { useState } from 'react'
import ParticlesComponent from './ParticlesComponent'
import { IoClose, IoSend } from 'react-icons/io5'
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAPMXpo85GlPN-gAcmqkidHH74iZFBN5v4");

const ChatBot = ({ chat, setchat }) => {
    // chat history
    const [messages, setMessages] = useState([]);
    // input
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = async () => {
        if (input.trim()) {
            setIsTyping(true);
            setMessages(prev => [...prev, { sender: 'user', content: input }]);
            setInput("");

            try {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const result = await model.generateContent(input);
                const content = await result.response.text(); 
                setMessages(prev => [...prev, { sender: 'ai', content: content }]);
            } catch (error) {
                console.error("Error generating content:", error);
                setMessages(prev => [...prev, { sender: 'ai', content: "Sorry, there was an error processing your request." }]);
            }
            setIsTyping(false);
        }
    };
    

    return (
        <div className='absolute top-0 w-full min-h-screen flex items-center justify-center '>
            <ParticlesComponent />
            <div className='fixed w-3/4 h-[80vh] bg-[#e08686] z-50 max-w-[600px] border border-orange-500'>
                <nav className='flex gap-3 justify-between items-center p-4 py-2 bg-orange-600 '>
                    <div className='flex items-center gap-2'>
                        <img src="https://www.waysaheadglobal.com/assets/images/logo.png" className='w-12 bg-white rounded-full p-1' alt="" />
                        <h1 className='font-semibold text-black text-sm sm:text-md'>LUMI G24R</h1>
                    </div>

                    <div>
                        <IoClose className='text-3xl cursor-pointer' onClick={() => setchat(false)} />
                    </div>
                </nav>

                {/* chat history */}
                <div className=" relative flex-1 p-3 overflow-y-auto space-y-2 h-[63vh]">
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-2 relative text-sm w-full ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-2 max-w-[49%] ${msg.sender === 'user' ? 'bg-gray-300 rounded-tl-2xl rounded-b-xl' : 'bg-[#e16020] rounded-tr-2xl rounded-b-xl'}`}>
                                {msg.content.split('\n').map((line, i) => (
                                    <div key={i}>{line.replace('#', '').replace('*', '')}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='text-xs absolute bottom-2 '>{isTyping?"Typing...":""}</div>
                </div>

                <div className='absolute bottom-0 w-full flex items-center gap-2 pr-2 bg-white'>
                    <input type="text" className='bg-white w-full p-3  outline-none text-sm' value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder='Type your message...' />
                    <IoSend className="text-xl text-blue-600 cursor-pointer hover:text-orange-800" onClick={handleSendMessage} />
                </div>
            </div>
            Chatbot
        </div>
    )
}

export default ChatBot  
