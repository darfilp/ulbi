import { createRoot } from 'react-dom/client';
import './App.scss'

function App() {
  return <div>Hello World</div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);