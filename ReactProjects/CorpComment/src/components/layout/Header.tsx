import Feedbackform from "../feedback/Feedbackform";
import Logo from "../Logo";
import Pattern from "../Pattern";
import PageHeading from "../PageHeading";
export default function Header({addItem}:{addItem:(text:string)=>void}) {
  return (
    <header className="header">
     <Pattern />
     <Logo />
     <PageHeading />
     <Feedbackform addItem={addItem} />
    </header>
  )
}
