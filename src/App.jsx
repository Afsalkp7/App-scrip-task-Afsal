import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Shop from './components/Shop';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              
                <Shop />
              
            }
          />
          </Route>
          </Routes>
          </Router>
    </>
  )
}

export default App
