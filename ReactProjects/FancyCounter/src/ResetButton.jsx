import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton(props)
{
    const handleClick =(event)=>{
        props.setcount(0);
        event.currentTarget.blur();
};

    return <button className="reset-btn">
        <ResetIcon className="reset-btn-icon" onClick={handleClick}/>
    </button>;
}