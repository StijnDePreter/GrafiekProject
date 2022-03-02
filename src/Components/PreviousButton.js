function PreviousButton(props) {
    return (
        <button type="button" onClick={()=> props.removeAPoint({ x: 10, y: 20})}>verwijder laatste punt</button>
    );
}

export default PreviousButton;