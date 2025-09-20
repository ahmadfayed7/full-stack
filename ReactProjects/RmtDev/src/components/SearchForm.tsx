import { useSearchTextContext } from "../lib/hooks";

export default function SearchForm() {


  const { setSearchText,SearchText}=useSearchTextContext()


  return (
    <form action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
      value={SearchText}
      onChange={(e)=>setSearchText(e.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
