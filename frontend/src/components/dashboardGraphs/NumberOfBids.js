import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLabel  } from "victory";
import { formatMoney } from "../Custom";

const data = [
    {respondent: 1, bids: 13000},
{respondent: 2, bids: 16500}
];



export default function NumberOfBids() {
    const stroke = 'white'
    const axisStyle = {tickLabels: {fill: 'white', fontSize: 10}, axisLabel: {fill: "white"}}
    return(
        <VictoryChart
            domain={{y: [0, 3500000]}}
            padding={{left:100, right:50, top: 50, bottom:50}}>
                            <VictoryAxis
                dependentAxis
                label="Bid price"
                axisLabelComponent={<VictoryLabel dy={-40}/>}
                tickFormat={formatMoney}
                style={{ grid: {stroke}, axis: {stroke: 'none'}, ...axisStyle }}
            />
            <VictoryGroup offset={25}
    colorScale="qualitative" animate>
    <VictoryBar
    data={[{ x: "Provision of consult...", y: 650000 }, { x: "Test2", y: 600000 }, { x: "Test 3", y: 750000 }, {x: "Test 4", y: 700000} ]}
    />
    <VictoryBar
    data={[{ x: "Provision of consult...", y: 1100000 }, { x: "Test2", y: 3100000 }, { x: "Test 3", y: 1000000 }, {x: "Test 4", y: 2000000} ]}
    />
</VictoryGroup>
<VictoryAxis
                label="Name of opportunity"
                style={{ axis: {stroke}, ...axisStyle }}
            />

        </VictoryChart>
    )

}