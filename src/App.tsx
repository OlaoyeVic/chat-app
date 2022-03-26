import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="38c7fe93-f2f5-48db-a2a1-be1ca527bec8"
      userName="Vickstar"
      userSecret="victor"
      renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
