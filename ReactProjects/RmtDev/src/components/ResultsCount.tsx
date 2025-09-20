export default function ResultsCount({totalresults}: {totalresults:number | undefined}) {
  return <p className="count"><span className="u-bold">{totalresults ? totalresults : 0}</span> results</p>;
}
