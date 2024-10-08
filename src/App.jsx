import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenShirts from './pages/MenShirts';
import MenJeans from './pages/MenJeans'
import MenShoes from './pages/MenShoes';
import MenWatches from './pages/MenWatches';
import MenGymWears from './pages/MenGymWears';
import MenHoodies from './pages/MenHoodies';
import Homepage from './pages/Homepage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Mshirts" element={<MenShirts />} />
        <Route path="Mjeans" element={<MenJeans />} />
        <Route path="Mshoes" element={<MenShoes />} />
        <Route path="MgymWear" element={<MenGymWears />} />
        <Route path="Mhoodies" element={<MenHoodies />} />
        <Route path="Mwatches" element={<MenWatches />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
