import { useEffect, useState } from "react";
import { VictoryLabel, VictoryPie, VictoryTooltip } from "victory";

// const data = [
//     { parentAgency: "PMO", opportunities: 15 },
//     { parentAgency: "MCI", opportunities: 12 },
//     { parentAgency: "MOE", opportunities: 12 },
//     { parentAgency: "MOF", opportunities: 10 },
//     { parentAgency: "MSF", opportunities: 9 },
//     { parentAgency: "MINDEF", opportunities: 8 },
//     { parentAgency: "MOM", opportunities: 8 },
//     { parentAgency: "MTI", opportunities: 8 }
//   ]

function Label(props) {
    return (
        <g>
            <VictoryLabel {...props}/>
            <VictoryTooltip {...props}
                text={({'datum':{parentAgency}}) => parentAgency}
                pointerLength={0}
                x={225}
                y={200}
                orientation='top'
                flyoutStyle={{ fill: 'none', stroke: 'none' }}
                style={{ ...props.style, fontSize: 40 }}
            />
        </g>
    );
}

export default function OpportunityParentAgencies({ data }) {
  const empty = new Array(data.length);
  empty[0] = { opportunities: 1 };
  empty.fill({ opportunities: 0 }, 1);
  const [ enabled, setEnabled ] = useState(false);
  useEffect(() => setEnabled(true), []);
  return (
      <VictoryPie
          animate={{ duration: 2000 }}
          y="opportunities"
          width={450}
          height={300}
          radius={140}
          innerRadius={100}
          labelRadius={115}
          data={enabled ? data : empty}
          labels={data.map(({opportunities}) => opportunities)}
          labelComponent={<Label/>}
          style={{ 
              data: { fill: ({index, data}) => `hsl(0, 0%, ${(index/data.length*100).toFixed()}%)`, fillOpacity: .7 },
              labels: { fillOpacity: +enabled, fill: 'white', pointerEvents: 'none', userSelect: 'none' }
          }}
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
                    mutation: ({ style , radius, innerRadius }) => ({ 
                      style: { ...style, opacity: 1 }, 
                      radius: radius + 10,
                      innerRadius: innerRadius - 10
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
      />
  );
}

