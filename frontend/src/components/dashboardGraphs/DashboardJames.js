import MiniGraph from "../Custom";
import SuccessRate from "./SuccessRate";
import NumberOfBids from "./NumberOfBids";
import NCSBids from "./NCSBids"
import AverageBids from "./AverageBids";

// import TopAwarded from "./TopAwarded";
// import OpportunityParentAgencies from "./OpportunityParentAgencies";
// import MostBids from "./MostBids"
// import BidsTopWon from "./BidsTopWon";


export default function Dashboard() {
    const row = { style: { display: 'flex', flexDirection: 'row', columnGap: 40 } }
    return (
        <div style={{
            background: '#111827',
            borderRadius: 20,
            padding: 50,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 40
        }}>
            <div {...row}>
                <MiniGraph link="#" name={["Number of bids made by NCS PTE.LTD. over from", "2020 to 2022"]}>
                    <NCSBids/>
                </MiniGraph>
                {<MiniGraph link="#" name={["Success rate of NCS PTE.LTD. from","2020 to 2022"]}>
                    <SuccessRate/>
                </MiniGraph>}
            </div>
            {<div {...row}>
                <MiniGraph link="#" name={["NCS PTE.LTD. bid vs winning bid in 2021 to 2022", "from fincancial grade S8"]}>
                    <NumberOfBids/>
                </MiniGraph>
                { <MiniGraph link="#" name={["NCS PTE. LTD bid vs awarded bid vs average bid ", "from 2021 to 2022 from fincancial grade S8"]}>
                    <AverageBids/>
                </MiniGraph> }
            </div>}
        </div>
    );
}