export default function SortingControls({handlesorting,sortby}: {handlesorting:(sortby: "relevant" | "recent")=>void,sortby:"relevant" | "recent"}) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button onClick={()=>{handlesorting("relevant")}}className={`sorting__button sorting__button--relevant ${sortby}=="relevant" ? "sorting__button--active : '' `}>
        Relevant
      </button>

      <button onClick={()=>{handlesorting("recent")}} className={`sorting__button sorting__button--recent ${sortby}=="recent" ? "sorting__button--active : '' `}>
        Recent
      </button>
    </section>
  );
}
