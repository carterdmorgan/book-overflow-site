import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// fonts
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import Landing from '../pages/landing';
import Navbar from '../components/Navbar';

// Styles
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../assets/css/setup.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

// routes
import routes from './routes';

// UI Components
import Layout from '../components/Layout';

// -------------

/**
 * Making base name for the website (needed in deployment)
 */
const router = createBrowserRouter(routes, {
  basename: '/',
});

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar isLanding={true}></Navbar>
        <Landing></Landing>
      </Layout>
    </div>
  );
}

export default App;
