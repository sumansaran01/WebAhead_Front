import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import ChatBot from './Components/ChatBot.jsx';

const RootComponent = () => {
  const [chat, setChat] = useState(false);

  return (
    <StrictMode>
      <Router>
        <Header />
        <App />
        <Footer />

        {/* Chatbot Icon */}
        <div className="fixed bottom-5 right-5">
          <img
            src="https://testapi.unomiru.com/static/bot-gif.gif"
            alt=""
            className="w-25"
            title="Hey there! I am LUMI G24R. Click here for assistance"
            style={{ cursor: 'pointer' }}
            onClick={() => setChat(!chat)} // Toggle chatbot visibility
          />
        </div>

        {/* Chatbot Component */}
        {chat && <ChatBot chat={chat} setchat={setChat} />}
      </Router>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
