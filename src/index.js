import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'First Post', likeCount: '23' },
  { id: 1, message: 'Second Post', likeCount: '26' },
  { id: 1, message: 'It\'s second Post', likeCount: '11' }

]

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Saha' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Tom' },
  { id: 6, name: 'Maria' }
]

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'What you name?' },
  { id: 4, message: 'What you name?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
