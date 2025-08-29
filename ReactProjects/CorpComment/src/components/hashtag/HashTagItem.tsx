
export default function HashTagItem({company,handletagClick}:{company:string,handletagClick:(tag:string)=>void  }) {
  return (
          <li key={company} className="hashtag-item">
          <button onClick={()=>handletagClick(company)} className="hashtag-button">#{company}</button>
        </li>
  )
}
