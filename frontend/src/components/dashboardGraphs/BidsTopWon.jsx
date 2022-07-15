import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTooltip, Line, Bar } from 'victory'

// const data = [
//   { respondent: "NEC ASIA PACIFIC PTE. LTD.", won: 5, lost: 7 },
//   { respondent: "NCS PTE. LTD.", won: 3, lost: 13 },
//   { respondent: "Appian Software International LLC", won: 1, lost: 0 },
//   { respondent: "DELOITTE CONSULTING PTE. LTD.", won: 1, lost: 0 },
//   { respondent: "ANACLE SYSTEMS LIMITED", won: 1, lost: 0 },
//   { respondent: "ERNST & YOUNG ADVISORY PTE. LTD.", won: 2, lost: 1 },
//   { respondent: "AVEPOINT SINGAPORE PTE LTD.", won: 5, lost: 0 },
//   { respondent: "ACCENTURE PTE LTD.", won: 12, lost: 8 }
// ];

const Wrap = props => (
  <VictoryTooltip {...props}
    dx={5}
    style={{ fill, fontSize: 20, fontWeight: 'bold' }}
    flyoutStyle={{ fill: 'none', strokeWidth: 0 }}
    pointerLength={0}
  />
);

const fill = "white";
const barProps = {
  animate: true,
  x: "respondent",
  dataComponent: <BarLine/>,
  labelComponent: <Wrap/>
};
const unfocusAll = {
  childName: ["won", "lost"], 
  eventKey: 'all',
  target: 'data',
  mutation: ({style}) => ({ style: { ...style, opacity: .1 } })
};
const focus = {
  target: 'data', 
  mutation: ({ style }) => ({ style: { ...style, opacity: 1 }, line: true }) 
};
const reset = {
  onMouseOut: () => [
    { childName: ["won","lost"], eventKey: 'all', target: 'labels', mutation: () => null },
    { childName: ["won","lost"], eventKey: 'all', target: 'data', mutation: () => null }
  ]
}
const activateLabels = {
  target: 'labels',
  mutation: () => ({ active: true })
}

function BarLine(props) {
  let { 'y0': y2, x, line } = props;
  return (
      <g>
          <Bar {...props}/>
          {line && <Line {...{ x1: x, x2: x, y1: 0, y2 }} style={{ stroke: 'white', strokeWidth: 1, pointerEvents: 'none' }}/>}
      </g>
  );
}

function BidsTopWon({ data }) {
  return (
    <VictoryChart
      domainPadding={20}
      padding={{ left: 150, bottom: 20 }}
    >
      <VictoryAxis 
        dependentAxis
        style={{ 
          tickLabels: { fontSize: 12, fill }, 
          grid: { stroke: 'grey' },
          axis: { stroke: 'none' }
        }}
      />
      <VictoryStack 
        horizontal
        colorScale='qualitative'
        events={[
          {
            childName: ["won"], 
            target: 'data',
            eventHandlers: { ...reset, onMouseOver: () => [ unfocusAll, focus, activateLabels ] }
          },
          {
            childName: ["lost"],
            target: 'data',
            eventHandlers: { ...reset, 
              onMouseOver: () => [ 
                unfocusAll, focus, activateLabels,
                {
                  childName: ["won"],
                  target: 'data', 
                  mutation: ({ style }) => ({ style: { ...style, opacity: 1 }})
                }
              ]
            }
          }
        ]}
      >
        <VictoryBar {...barProps} 
          name="won"
          y="won"
          data={data}
          labels={data.map(({ won }) => won)}
        />
        <VictoryBar {...barProps} 
          name="lost"
          y="lost"
          data={data}
          labels={data.map(({ won, lost }) => won + lost)}
        />
      </VictoryStack>
      <VictoryAxis style={{ 
          tickLabels: { fontSize: 8, fill }, 
          axis: { stroke: fill } 
      }}/>
    </VictoryChart>
  );
}

export default BidsTopWon;