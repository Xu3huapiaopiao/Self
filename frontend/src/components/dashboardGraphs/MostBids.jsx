import {
  VictoryChart,
  VictoryAxis,
  VictoryBar,
  Bar,
  Line,
  VictoryTooltip,
} from "victory";
import { ArrowLine } from "./Custom";

// const data = [
//     { respondent: "ACCENTURE PTE LTD.", bids: 32 },
//     { respondent: "AVEPOINT SINGAPORE PTE LTD.", bids: 25 },
//     { respondent: "NCS PTE. LTD.", bids: 26 },
//     { respondent: "ERNST & YOUNG ADVISORY PTE. LTD.", bids: 23 }
// ];

const blue = ["#002C61", "#004B8F", "#006BC9", "#3795E5", "#65B4F4"];

function BarLine(props) {
  let { x0: x2, y, line } = props;
  return (
    <g>
      <Bar {...props} />
      {line && (
        <Line
          {...{ x1: 400, x2, y1: y, y2: y }}
          style={{ stroke: "white", strokeWidth: 1, pointerEvents: "none" }}
        />
      )}
    </g>
  );
}

const fill = "white";
const axis = { stroke: fill };

export default function MostBids({ data }) {
  return (
    <VictoryChart domainPadding={{ x: 50, y: 65 }}>
      <VictoryAxis
        dependentAxis
        style={{ axis, grid: { stroke: "grey" }, tickLabels: { fill } }}
        axisComponent={<ArrowLine />}
      />
      <VictoryBar
        animate
        style={{ data: { fill: ({ index }) => blue[index % blue.length] } }}
        data={data}
        dataComponent={<BarLine />}
        x="respondent"
        y="bids"
        labels={data.map(({ bids }) => bids)}
        labelComponent={
          <VictoryTooltip
            // x={225}
            // y={50}
            style={{ fill, fontSize: 20, fontWeight: "bold" }}
            //labelComponent={<VictoryLabel lineHeight={1.2} />}
            flyoutStyle={{ fill: "none", strokeWidth: 0 }}
            pointerLength={0}
          />
        }
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseOver: () => [
                {
                  eventKey: "all",
                  target: "data",
                  mutation: ({ style }) => ({
                    style: { ...style, opacity: 0.1 },
                  }),
                },
                {
                  target: "data",
                  mutation: ({ style }) => ({
                    style: { ...style, opacity: 1 },
                    line: true,
                  }),
                },
                {
                  target: "labels",
                  mutation: () => ({ active: true }),
                },
              ],
              onMouseOut: () => [
                { eventKey: "all", target: "labels", mutation: () => null },
                { eventKey: "all", target: "data", mutation: () => null },
              ],
            },
          },
        ]}
      />
      <VictoryAxis
        style={{
          axis,
          tickLabels: { fill, fontSize: 6, wordBreak: "break-all" },
        }}
        axisComponent={<ArrowLine />}
      />
    </VictoryChart>
  );
}
