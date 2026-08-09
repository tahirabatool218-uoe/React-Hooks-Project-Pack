import ImageSlider from "./components/ImageSlider/ImageSlider";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ImageSlider
        url="https://picsum.photos/v2/list"
        limit={8}
      />
    </div>
  );
}

export default App;