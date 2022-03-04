function NextButton(props) {

    var classNames = "btn btn-outline-secondary disabled"

    if (props.buttonActive){
        classNames = "btn btn-outline-secondary"
    }

    return (
        <button className= {classNames} disabled={!props.buttonActive} type="button" onClick={()=> props.restoreAPoint()}>Redo</button>
    );
}

export default NextButton;