import { useItemsStore } from "../stores/itemStore";

export default function Header() {
  const { items } = useItemsStore(state => ({
    items: state.items
  }));
  const totalItems = items.length;
  const itemsPacked = items.filter(item => item.packed).length;
  return (
    <header>
    <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png"  />
    <p><b>{itemsPacked}</b>/{totalItems} Items packed</p>
    </header>
  )
}
