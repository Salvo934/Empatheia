import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StorySingle from './pages/StorySingle';
import About from './pages/About';
import Share from './pages/Share';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="storie" element={<Stories />} />
        <Route path="storie/:slug" element={<StorySingle />} />
        <Route path="chi-siamo" element={<About />} />
        <Route path="condividi" element={<Share />} />
      </Route>
    </Routes>
  );
}
