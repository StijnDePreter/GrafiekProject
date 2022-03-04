
function GridVertical(props) {
    return (
        <div className={"verticalLine line"} style={{left: props.leftOffset, height: props.height}}></div>
    );
}

export default GridVertical;