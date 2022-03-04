function PreviousButton(props) {
    return (
        <button className = "btn btn-outline-secondary" type="button" onClick={()=> props.removeAPoint({ x: 10, y: 20})}>Undo</button>
    );
}

export default PreviousButton;