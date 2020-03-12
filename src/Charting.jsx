import React from "react";
import { Donut, Bar, ToolTip } from "britecharts-react";

const Legend = require("../node_modules/britecharts-react/lib/umd/Legend")
  .default;

const containerStyle = {
  display: "flex",
  justifyContent: "center"
};

export default () => {
  return (
    <>
    <div style={containerStyle}>
      <Donut
        data={with4Slices()}
        height={200}
        width={200}
        externalRadius={200 / 2.5}
        internalRadius={200 / 5}
      />
      <Legend data={with4Slices()} height={200} width={200}  highlightEntryById />
    </div>

    <div style={containerStyle}>
      <Bar
        data={barExample}
        height={200}
        width={200}
      />
      <Legend data={barExample} height={200} width={200} />
      {/* <ToolTip data={barExample} /> */}
    </div>
    </>
  );
};

export const with4Slices = () => [
  {
    quantity: 60,
    percentage: 60,
    name: "React",
    id: 1
  },
  {
    quantity: 20,
    percentage: 20,
    name: "Ember",
    id: 2
  },
  {
    quantity: 10,
    percentage: 10,
    name: "Angular",
    id: 3
  },
  {
    quantity: 10,
    percentage: 10,
    name: "Backbone",
    id: 4
  }
];

// bar example
const barExample = [
    {
        value: 1,
        name: 'glittering'
    },
    {
        value: .51,
        name: 'luminous'
    },
    {
        value: 1.2,
        name: 'not'
    },
    {
        value: .41,
        name: 'famous'
    },
    {
        value: 2,
        name: 'is'
    },
    {
        value: 4,
        name: 'dad'
    }
]
