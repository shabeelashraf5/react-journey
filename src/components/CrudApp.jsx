import { useState } from "react";
import Navbar from "../layouts/nabvar";

export default function CrudApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setEditingText(items[index]);
  };

  const updateItem = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = editingText;
    setItems(updatedItems);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div >
       <Navbar />
      <h2 className="text-xl font-bold mb-4">CRUD Application</h2>
      <div className="flex space-x-2 mb-4">
        <input
          className="border p-2 w-full rounded"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addItem}>Add</button>
      </div>
        <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between p-2 border rounded">
            {editingIndex === index ? (
              <input
                className="border p-2 w-full rounded"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span>{item}</span>
            )}
            <div className="space-x-2">
              {editingIndex === index ? (
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={updateItem}>Save</button>
              ) : (
                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => editItem(index)}>Edit</button>
              )}
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
