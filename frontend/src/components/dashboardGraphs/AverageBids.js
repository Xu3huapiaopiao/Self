import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLabel} from "victory";
import { ArrowLine } from "./Custom";
import { formatMoney } from "./Custom";



const App = () => {
  const ncs = [
    { x: "ITT for the...", y:  0},
    { x: "Invitation to...", y: 21000000 },
    { x: "For The Provision...", y: 16000000 },
    { x: "Scaling Up And...", y: 14000000 },
    { x: "Provision of a...", y: 0 }
  ];

  const average = [
    { x: "ITT for the...", y: 24000000 },
    { x: "Invitation to...", y: 14000000 },
    { x: "For The Provision...", y: 12000000 },
    { x: "Scaling Up And...", y: 7000000 },
    { x: "Provision of a...", y: 16000000 }
  ];

  const wining = [
    { x: "ITT for the...", y: 24000000 },
    { x: "Invitation to...", y: 21000000 },
    { x: "For The Provision...", y: 8000000 },
    { x: "Scaling Up And...", y: 13000000 },
    { x: "Provision of a...", y: 4900000 }
  ];

  return (
    <div className="App">
      <VictoryChart>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={315} />} />
        <VictoryAxis dependentAxis 
        style={{axis: {stroke: 'white'}, grid: {stroke: 'white'}, axisLabel: {fill: "white"}, tickLabels: {fill: 'white', fontSize: 10}}}
        axisLabelComponent={<VictoryLabel dy={-40}/>}
        tickFormat={formatMoney}
        axisComponent={<ArrowLine/>}/>

        <VictoryLine data={average} style={{ data: { stroke: "red" } }} />

        <VictoryLine data={ncs} style={{ data: { stroke: "blue" } }} />

        <VictoryLine data={wining} style={{ data: { stroke: "grey" } }} />
      </VictoryChart>
    </div>
  );
};
export default App;

