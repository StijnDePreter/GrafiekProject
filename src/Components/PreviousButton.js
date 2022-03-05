function PreviousButton(props) {

    var classNames = "btn btn-outline-secondary disabled"

    if (props.buttonActive){
        classNames = "btn btn-outline-secondary"
    }

    return (
        <button className = {classNames} disabled={!props.buttonActive} type="button" onClick={()=> props.removeAPoint({ x: 10, y: 20})}>Undo</button>
    );
}

export default PreviousButton;