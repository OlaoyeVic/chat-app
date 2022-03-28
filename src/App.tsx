import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username') || !localStorage.getItem('password')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="c1cb2bbc-9444-4f4c-af62-e7dcb4f62497"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
