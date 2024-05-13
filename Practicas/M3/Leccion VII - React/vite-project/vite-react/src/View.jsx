import User from "./USer";

const View = () => {
    const handleUserButtonClick = (info) => {
        console.log(info);
    }
    return (
        <User handleUserButtonClick={handleUserButtonClick}/>
    )
}

export default View;