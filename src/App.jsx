import './App.css'
import { useNavigate } from 'react-router'

function App() {

  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="mx-auto container h-80 w-1/2 flex items-center justify-center bg-bg-card shadow-lg rounded-lg">
          <button className="px-4 py-2 rounded-lg bg-primary" onClick={() => navigate('/article-1')}>
              <span className="text-white text-center text-base">Let's show articles</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
