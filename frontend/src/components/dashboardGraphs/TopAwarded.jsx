import { useEffect, useState } from "react";
import { VictoryScatter, VictoryContainer, VictoryTooltip, VictoryLabel } from "victory";

// const data = [
//     { respondent: "ACCENTURE SG SERVICES PTE. LTD.", awarded: 11 },
//     { respondent: "NCS PTE. LTD.", awarded: 5 },
//     { respondent: "NEC ASIA PACIFIC PTE. LTD.", awarded: 5 },
//     { respondent: "AVEPOINT SINGAPORE PTE LTD", awarded: 3 },
//     { respondent: "TECH MAHINDRA LIMITED (SINGAPORE BRANCH)", awarded: 3 },
//     { respondent: "Wild Advertising & Marketing Pte Ltd", awarded: 2 },
//     { respondent: "DELOITTE CONSULTING PTE. LTD.", awarded: 2 },
//     { respondent: "ENSIGN INFOSECURITY (SMARTTECH) PTE. LTD.", awarded: 2 }
// ]

const position = [
  {x: 100, y: 100},
  {x: 115, y: 80},
  {x: 85, y: 130},
  {x: 80, y: 80},
  {x: 90, y: 50},
  {x: 110, y: 140},
  {x: 96, y: 150},
  {x: 105, y: 50}
]

const warm = ["#940031", "#C43343", "#DC5429", "#FF821D", "#FFAF55"];

const unselectable = { pointerEvents: 'none', userSelect: 'none' };

function Label(props) {
  const { style, 'text': [ tooltip, label ], ...p } = props;
  return (
    <g>
      <VictoryLabel {...p} 
        dy={10} 
        text={label}
        style={{...style, ...unselectable }}
      />
      <VictoryTooltip {...props} 
        pointerLength={0}
        dy={-15}
        text={tooltip}
        flyoutStyle={{stroke: 'none'}}
        style={{ ...style, ...unselectable, fill: 'black' }}
      />
    </g>
  );
}


export default function TopAwarded({ data }) {
  // data = data.map((item, i) => ({...item, ...position[i], ...}));
  data.forEach((item, i) => Object.assign(item, position[i], { size: item.won / data[0].won * 30 + 20 }));
  const empty = data.map(i => ({...i,size:1}));
  const [ animate, setAnimate ] = useState({ easing:'bounce', onEnd: () => setAnimate(undefined) })
  const [ enabled, setEnabled ] = useState(false);
  useEffect(() => setEnabled(true), []);
  return (
      <VictoryScatter
          animate={animate}
          padding={{ right: 80, left: 80, top: 50, bottom: 100 }}
          height={350}
          data={enabled ? data : empty}
          labels={data.map(({respondent, won}) => [respondent, won])}
          labelComponent={<Label active={false}/>}
          style={{ data: { fill: ({index}) => warm[index%5], stroke: '#222', strokeWidth: 1, opacity: .9 }, labels: { fill: 'white', fillOpacity: +enabled, fontSize: 20 } }}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onMouseOver: () => [
                  {
                    eventKey: 'all',
                    target: 'data',
                    mutation: ({style}) => ({ style: { ...style, opacity: .1 } })
                  },
                  {
                    eventKey: 'all',
                    target: 'labels',
                    mutation: ({style}) => ({ style: { ...style, fillOpacity: .1 } })
                  },
                  { 
                    target: 'data', 
                    mutation: ({ style , size }) => ({ 
                      style: { ...style, opacity: 1, strokeWidth: 2, stroke: 'white' }, 
                      size: size + 5 
                    }) 
                  },
                  {
                    target: 'labels',
                    mutation: ({style, 'style': { fontSize }}) => ({ style: { ...style, fillOpacity: 1, fontSize: fontSize + 5 }, active: true })
                  }
                ],
                onMouseOut: () => [
                  { eventKey: 'all', target: 'labels', mutation: () => null },
                  { eventKey: 'all', target: 'data', mutation: () => null }
                ]
              }
            }
          ]}
          containerComponent={<VictoryContainer height={300}/>}
      />
  );
}

// const lerpColor = function(a, b, amount) {
//     const ar = a >> 16,
//           ag = a >> 8 & 0xff,
//           ab = a & 0xff,
//           br = b >> 16,
//           bg = b >> 8 & 0xff,
//           bb = b & 0xff,
//           rr = ar + amount * (br - ar),
//           rg = ag + amount * (bg - ag),
//           rb = ab + amount * (bb - ab);
//     return (rr << 16) + (rg << 8) + (rb | 0);
// };

 /*
  //Bubble graph
  const PieChart = () => {
    const COLOR_DEFAULT = "purple";
    const COLOR_NOTHOVER = "gray";
    return (
      <div>
        <h1>Bubble Graph</h1>
        <div>
          <h1>Top 8 most active respondents in 2021</h1>
          <VictoryScatter
            //colorScale={["#F9EBEA", "#F2D7D5", "#E6B0AA", "#D98880", "#CD6155"]}
            events={[
              {
                eventHandlers: {
                  onMouseEnter: () => {
                    return [
                      {
                        eventKey: "all",
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: COLOR_NOTHOVER,
                          },
                        }),
                      },
                      {
                        target: "data",
                        mutation: () => ({
                          style: {
                            fill: COLOR_DEFAULT,
                          },
                        }),
                      },
                    ];
                  },
                        onMouseLeave: () => {
                          return [
                            {
                              eventKey: "all",
                              target: "data",
                              mutation: () => ({
                                style: {
                                  fill: COLOR_DEFAULT,
                                },
                                labels: ({ datum }) => datum.x + datum.y.toString(),
                              }),
                            },
                            {
                              target: "data",
                              mutation: () => ({
                                style: {
                                  fill: COLOR_DEFAULT,
                                },
                                labels: ({ datum }) => datum.x + datum.y.toString(),
                              }),
                            },
                          ];
                        },
                },
              },
            ]}
            data={[
              {
                x: "TECH MAHINDRA LIMITED (SINGAPORE BRANCH) ",
                y: "TECH MAHINDRA LIMITED (SINGAPORE BRANCH) ",
                amount: 100,
              },
              { x: "DELOITTE CONSULTING PTE. LTD.", y: 2, amount: 60 },
              { x: "PCS SECURITY PRIVATE LIMITED", y: 4, amount: 120 },
              { x: "AZAAS PTE. LTD.", y: 3, amount: 90 },
              { x: "NCS PTE. LTD.", y: 4, amount: 120 },
              { x: "HCL SINGAPORE PTE. LTD.", y: 2, amount: 60 },
              { x: "PCS SECURITY PRIVATE LIMITED", y: 3, amount: 90 },
              { x: "PCS SECURITY PRIVATE LIMITED", y: 3, amount: 90 },
            ]}
            style={{
              data: { fill: "#c43a31" },
              labels: { fill: "black", fontSize: 10 },
              colorScale: ["#F9EBEA", "#F2D7D5", "#E6B0AA", "#D98880", "#CD6155"],
            }}
            // labels={() => null}
            labels={({ datum }) => datum.x + datum.y.toString()}
            bubbleProperty="amount"
            maxBubbleSize={30}
            minBubbleSize={10}
            labelComponent={<VictoryTooltip />}
          />
        </div>
      </div>
    );
  };

export default //PieChart
*/