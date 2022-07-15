import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTooltip } from "victory";
import { ArrowLine } from "../Custom";


const bids = {
    won: [
        { year: 2020, amount: 1 },
        { year: 2021, amount: 5 },
    ],
    lost: [
        { year: 2020, amount: 1 },
        { year: 2021, amount: 12 },
    ]
}


function LabelWithTooltip(props) {
    const { 'index': i } = props;
        const won = bids.won[i].amount;
        const lost = bids.lost[i].amount;
        return (
            <g>
                <VictoryTooltip 
                    {...props}
                    dy={0}
                    orientation='left'
                    text={`Total: ${won + lost}`}
                />
                <VictoryLabel 
                    {...props}
                    text={(won / (won + lost) * 100).toFixed(1) + '%'}
                />
            </g>
        );
}

LabelWithTooltip.defaultEvents = VictoryTooltip.defaultEvents

function SuccessRate() {
    const axisLabel = { padding: 40 };
    const stroke = 'white'
    const axisStyle = {tickLabels: {fill: 'white', fontSize: 10}, axisLabel: {fill: "white"}}
    return (
        <VictoryChart
            domainPadding={{ x: [100, 100], y: [50, 50]}}
            padding={60}
        >
            <VictoryAxis
                label="Year"
                style={{axisLabel, ...axisStyle, axis: { stroke }}}
                tickValues={bids.won.map(bid => bid.year)}
                tickFormat={year => `${year}-${year+1}`}
                axisComponent={<ArrowLine/>}
            />
            <VictoryAxis
                dependentAxis
                style={{ axisLabel: {fill: "white"}, grid: { stroke }, axis: { stroke }, ...axisStyle }}
                label="Number of Bids"
                axisComponent={<ArrowLine/>}
            />
            <VictoryStack
                colorScale={["grey", "purple"]}
            >
                <VictoryBar
                    data={bids.won}
                    x="year"
                    y="amount"
                    labels={({datum}) => `Won: ${datum.amount}`}
                    labelComponent={<VictoryTooltip orientation='left' />}
                />
                <VictoryBar
                    data={bids.lost}
                    x="year"
                    y="amount"
                    labels={() => {}}
                    labelComponent={<LabelWithTooltip/>}
                />
            </VictoryStack>
        </VictoryChart>
    );
}

export default SuccessRate;