import { useMemo, useState } from "react";
import Select from "react-select";
import { useItemsStore } from "../stores/itemStore";

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const selctOptions = [
    { value: 'default', label: 'default' },
    { value: 'packed', label: 'Packed' },
    { value: 'unpacked', label: 'Unpacked' }
  ];
  const [selectedOption, setSelectedOption] = useState(selctOptions[0]);
  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
    // Implement filtering logic based on selected option if needed
  }

  const  sorteditems = useMemo(() => 
    [...items].sort((a, b) => {
    if (selectedOption.value === 'packed') {
      return b.packed - a.packed;
    } else if (selectedOption.value === 'unpacked') {
      return a.packed - b.packed;
    } else {
      return 0;
    }
  }), [items, selectedOption]);


  return (
    <ul className={"item-list"}>
      {items.length ===0 ? <section className="empty-state"><h3>Empty List , please add items</h3></section> :null }
      <Select defaultValue={selctOptions[0]}  options={selctOptions} onChange={(selected) => {
    setSelectedOption(selected);
  }}/>
      {
        sorteditems.map(item => <Item key ={item.id} item={item} handleDeleteItem={deleteItem}  handleToggleItem={toggleItem}/>)
      }
    </ul>
  );
}
function Item({ item ,handleDeleteItem ,handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} onChange={() => handleToggleItem(item.id)} />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)} className="remove-item"> ❌</button>
    </li>
  );
}
