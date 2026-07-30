import { Nav } from './components/Nav';
import { RouterProvider, useRouter } from './lib/router';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import OurMission from './pages/OurMission';
import Partners from './pages/Partners';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function Routes() {
  const { path } = useRouter();

  switch (path) {
    case '/gallery':
      return <Gallery />;
    case '/our-mission':
      return <OurMission />;
    case '/partners':
      return <Partners />;
    case '/projects':
      return <Projects />;
    case '/pricing':
      return <Pricing />;
    case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
}

function App() {
  return (
    <RouterProvider>
      <Nav />
      <Routes />
    </RouterProvider>
  );
}

export default App;
