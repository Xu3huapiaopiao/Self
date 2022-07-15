import { useEffect, useState } from "react";
import axios from "axios";

import MiniGraph from "../components/dashboardGraphs/Custom";

import TopAwarded from "../components/dashboardGraphs/TopAwarded";
import OpportunityParentAgencies from "../components/dashboardGraphs/OpportunityParentAgencies";
import MostBids from "../components/dashboardGraphs/MostBids";
import BidsTopWon from "../components/dashboardGraphs/BidsTopWon";

const column = {
  style: { display: "flex", flexDirection: "column", rowGap: 40 },
};
const row = { style: { display: "flex", flexDirection: "row", columnGap: 40 } };

const getTopAwarded = async () =>
  (await axios.get("/api/v1/graphs/topawarded/2021")).data;
const getTopParentAgency = async () =>
  (await axios.get("/api/v1/graphs/topparentagency/2021")).data;
const getTopBidded = async () =>
  (await axios.get("/api/v1/graphs/topbidded/2021")).data;

export default function Dashboard() {
  const [{ topAwarded, topParentAgency, topBidded }, setData] = useState({
    topAwarded: [],
    topParentAgency: [],
    topBidded: [],
  });
  useEffect(() => {
    (async () =>
      setData({
        topAwarded: await getTopAwarded(),
        topParentAgency: await getTopParentAgency(),
        topBidded: await getTopBidded(),
      }))();
  }, []);
  return (
    <div
      style={{
        ...column.style,
        background: "#111827",
        borderRadius: 20,
        padding: 50,
      }}
    >
      <div {...row}>
        <MiniGraph link="#" name="Top 8 Awarded Respondents In 2021">
          {topAwarded.length && <TopAwarded data={topAwarded} />}
        </MiniGraph>
        <MiniGraph link="#" name="Top 8 Parent Agencies In 2021">
          {topParentAgency.length && (
            <OpportunityParentAgencies data={topParentAgency} />
          )}
        </MiniGraph>
      </div>
      <div {...row}>
        <MiniGraph link="#" name="Top 4 Respondents For Bids Closed In 2021">
          {topBidded.length && <MostBids data={topBidded} />}
        </MiniGraph>
        <MiniGraph
          link="#"
          name="Top 8 Awarded Respondents For Bids Closed In 2021"
        >
          {topAwarded.length && <BidsTopWon data={topAwarded} />}
        </MiniGraph>
      </div>
    </div>
  );
}
