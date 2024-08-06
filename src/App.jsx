import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Shop from "./components/Shop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Shop />} />
            <Route path="/skills" element={<NotFound />} />
            <Route path="/stories" element={<NotFound />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/contact" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
