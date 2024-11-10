import './App.css';
import { FeaturesContainer } from './components/FeaturesContainer/FeaturesContainer';
import { BrowserRouter } from 'react-router-dom';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { SpaceBoy } from './components/SpaceBoyCanvas';
import { PlanetsContextProvider } from './components/PlanetsContextProvider';
import { PlanetTooltip } from './components/PlanetTooltip';
import { Stars } from './components/Stars';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProjectsContextProvider } from './context';

export const App = () => {
  return (
    <BrowserRouter>
      <Stars />
      <PlanetsContextProvider>
        <div className='content'>
          <Hero />
          <SpaceBoy />
          <PlanetTooltip />

          <div className='page'>
            <NavBar />
            <QueryClientProvider client={new QueryClient()}>
              <ProjectsContextProvider>
                <FeaturesContainer />
              </ProjectsContextProvider>
            </QueryClientProvider>
          </div>
        </div>
      </PlanetsContextProvider>
    </BrowserRouter>
  );
};
