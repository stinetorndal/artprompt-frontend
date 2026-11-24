import FeatureCard from './components/FeatureCard'
import Header from './components/Header'



function App() {
  return (
    <div>
      <Header />
      <h1>ArtPrompt</h1>
      <div
        className="feature-cards">
        <FeatureCard path="/wordprompts" headline="Ordprompter" text="Få to tilfældige ord fra hver sin kategori" variant="primary" />
        <FeatureCard path="/color" headline="Farver" text="Få ti tilfældige billeder fra Unsplash ud fra valgt farve" variant="accent" />
        {/* næste variant er light fordi text er mørk og så kan man ikke se teksten fordi de er samme farve */}
        <FeatureCard path="/painters" headline="Malerier" text="Få fem tilfældige malerier fra Rijksmuseum ud fra valgt kunstner" variant="light" />
      </div>
    </div>
  )
}


export default App
