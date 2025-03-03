import "./App.css"

import PortfolioProvider from "./store/PortfolioStore.tsx"

import Home from "./pages/Home.tsx"
import ProjectModal from "./components/projects/ProjectModal.tsx"

function App() {
  return (
    <PortfolioProvider>
      <Home />
      <ProjectModal />
    </PortfolioProvider>
  )
}

export default App
