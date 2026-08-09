import { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./TreeView.css";

function TreeView({ items }) {
  return (
    <div className="tree-view">
      {items.map((item) => (
        <TreeItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function TreeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-item">
      <div className="tree-item-content">
        
        {hasChildren && (
          <button className="toggle-btn" onClick={handleToggle}>
            {isOpen ? <FaMinus /> : <FaPlus />}
          </button>
        )}

        {hasChildren ? (
          isOpen ? <FaFolderOpen className="folder-icon" /> : <FaFolder className="folder-icon" />
        ) : (
          <FaFile className="file-icon" />
        )}

        <span>{item.name}</span>
      </div>

      {hasChildren && isOpen && (
        <div className="tree-children">
          <TreeView items={item.children} />
        </div>
      )}
    </div>
  );
}

export default TreeView;