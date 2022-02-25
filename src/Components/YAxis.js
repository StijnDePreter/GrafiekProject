
function YAxis(props) {
    return (
        <div className="YAxis">
            <svg viewBox={"0 0 "+ (props.width+10)+" " + (props.height+10)} className="viewbox">
                <defs>
                    <marker id="pointer" markerWidth="10" markerHeight="3"
                        refX="0" refY="1.5" orient="auto">
                        <polygon points="0 0, 5 1.5, 0 3" />
                    </marker>
                </defs>
                <line x1="3" y1={props.height+3} x2="3" y2="10" stroke="#000"
                    stroke-width="2" marker-end="url(#pointer)" />
            </svg>
        </div>
    );
}

export default YAxis;