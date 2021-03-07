import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Hey Developers!! Let's build a whats-app clone</h1>

      {/* Sidebar */}
      <Sidebar/>

      {/* ChatComponent */}
      <Chat/>

    </div>
  );
}

export default App;
