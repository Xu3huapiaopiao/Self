import { VictoryLabel } from "victory";

function ExpandIcon(props) {
    const lineStyle = { 
        stroke: 'white', 
        strokeWidth: 3
    };
    return (
        <g>
            <line x1="457" y1="7" x2="467" y2="7" style={lineStyle}/>
            <line x1="458" y1="6" x2="458" y2="17" style={lineStyle}/>
            <line x1="471" y1="31" x2="481" y2="31" style={lineStyle}/>
            <line x1="480" y1="32" x2="480" y2="22" style={lineStyle}/>
            <a href={props.link}>
                <rect x="450" y="0" width="40" height="40" fill="transparent"/>
            </a>
        </g>
    );
}

export default function MiniGraph(props) {
    return (
        <div style={{
            background: '#1F2937',
            borderRadius: 10,
            padding: '2%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <svg viewBox="0 0 450 70">
                <ExpandIcon {...props} />
                <VictoryLabel
                    text={props.name}
                    x={230}
                    y={40}
                    textAnchor="middle"
                    style={{ fill: 'white', fontSize: 20 }}
                />
            </svg>
            {props.children}
        </div>
    );
}

export function ArrowLine(props) {
    const { x1, x2, y1, y2, dimension, style } = props;
    return (
        <g>
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="30"
                    markerHeight="30"
                    refX="15"
                    refY="15"
                    orient="auto"
                >
                    <line x1="9" x2="16" y1="21" y2="15" style={style} />
                    <line x1="16" x2="9" y1="15" y2="9" style={style} />
                </marker>
            </defs>
            <line
                {...{x1, x2, style}}
                y1={y2} 
                y2={dimension === 'x' ? y2 : y1}
                markerEnd="url(#arrowhead)"
            />
        </g>
    );
}

export function formatMoney(value) {
    return '$' + value.toFixed().replace(/(?<=\d(?=(\d{3})+(?!\d)))/g, ',');
}

/*
import { VictoryLabel, VictoryTooltip } from "victory";

function LabelWithTooltip(props) {
    // const { 'index': i } = props;
    // const won = bids.won[i].amount;
    // const lost = bids.lost[i].amount;
    // return (
    //     <g>
    //         <VictoryTooltip 
    //             {...props}
    //             dy={0}
    //             orientation='left'
    //             text={`Total: ${won + lost}`}
    //         />
    //         <VictoryLabel 
    //             {...props}
    //             text={(won / (won + lost) * 100).toFixed(1) + '%'}
    //         />
    //     </g>
    // );
}
LabelWithTooltip.defaultEvents = VictoryTooltip.defaultEvents





export { ArrowLine, LabelWithTooltip }
*/