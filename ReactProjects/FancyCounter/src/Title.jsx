
function Title(props)
{
    return <h1 className="title"> {props.locked ? "Limit Reached" : "Fancy Counter"} </h1>;
}

export default Title;