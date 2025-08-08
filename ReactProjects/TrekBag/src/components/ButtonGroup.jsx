import { useItemsStore } from "../stores/itemStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  
  return (
    <section className="button-group">
      <Button onClick={removeAllItems}>Remove All Items</Button>
      <Button onClick={resetToInitial}>Reset to Initial</Button>
      <Button onClick={markAllAsComplete}>Mark All as Complete</Button>
      <Button onClick={markAllAsIncomplete}>Mark All as Incomplete</Button>

    </section>
  );
}
