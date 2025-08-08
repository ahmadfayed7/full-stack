import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemStore";

export default function ItemForm() {
  const [ItemText, setItemText] = useState("");

  const onAddItem =useItemsStore(state => state.addItem);
  const inputref = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!ItemText) {
      inputref.current.focus();
      return;
    }

    onAddItem(ItemText);
    setItemText("");
  }
  return (
    <form onSubmit={ handlesubmit
    }>
      <h2>Add Item</h2>
      <input 
        ref={inputref}
        type="text" placeholder="Item Name"
        onChange={(e) => setItemText(e.target.value)}
        value={ItemText} />
      <Button>Add Item</Button>
    </form>
  )
}
