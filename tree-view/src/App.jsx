import TreeView from "./components/TreeView/TreeView";
import treeData from "./data/treeData";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Tree View</h1>

      <TreeView items={treeData} />
    </div>
  );
}

export default App;