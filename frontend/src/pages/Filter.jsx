import React from "react";

import { useEffect, useState } from "react";
import { Headerbk } from "../components";

const Filter = () => {
    const [,setToolBarOptions] = useState(null);
    const [,setEditing] = useState(null);
    // const [toolbarOptions, setToolBarOptions] = useState(null);
    // const [editing, setEditing] = useState(null);
  
    useEffect(() => {
      setToolBarOptions(["Search"]);
      setEditing({ allowDeleting: true, allowEditing: true });
    }, [setEditing, setToolBarOptions]);
  
    return (
        <div className="bg-color-own m-2 md:m-12 p-2 md:p-10 rounded-3xl">
            <Headerbk title="Filter:" />
            <form class="form1">
                <div>
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Name Of Opportunity :{" "}
                    </label>
                    <input
                        class="text-white"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        type="text"
                        name="opp"
                    />
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Tender Number :{" "}
                    </label>
                    <input
                        class="text-white"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        type="text"
                        name="Tender"
                    />
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Agency :{" "}
                    </label>
                    <select
                        class="text-white"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                    >
                        <option value="CPF">Central Provident Fund Board</option>
                        <option value="RP">Republic Polytechnic</option>
                        <option value="ISEAS">ISEAS = Yusof Ishak Institute</option>
                        <option value="NLB">National Library Board</option>
                    </select>
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Procurement Type :{" "}
                    </label>
                    <select
                        class="text-white"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                    >
                        <option value="1">Procurement Type 1</option>
                        <option value="2">Procurement Type 2</option>
                        <option value="3">Procurement Type 3</option>
                        <option value="9">Procurement Type 9</option>
                    </select>
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Supply Head :{" "}
                    </label>
                    <select
                        class="text-white"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                    >
                        <option value="1">Supply Head 1</option>
                        <option value="2">Supply Head 2</option>
                        <option value="3">Supply Head 3</option>
                        <option value="9">Supply Head 9</option>
                    </select>
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold"  }}>
                        Published Date :{" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827"
                        }}
                        name="Published Date From"
                        id="publisheddatefrom"
                        type="date"
                    />
                    <label class="text-white" style={{ fontWeight: "bold"  }}>
                        {" "} To {" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827"
                        }}
                        name="Published Date To"
                        id="publisheddateto"
                        type="date"
                    />
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Closed Date :{" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        name="Closed Date "
                        id="closeddatefrom"
                        type="date"
                    />
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        {" "} To {" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        name="Closed Date "
                        id="closeddateto"
                        type="date"
                    />
                </div>

                <div class="pt-6">
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        Awarded Date :{" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        name="date"
                        id="awardeddatefrom"
                        type="date"
                    />
                    <label class="text-white" style={{ fontWeight: "bold" }}>
                        {" "} To {" "}
                    </label>
                    <input
                        class="text-white form-control"
                        style={{
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#111827",
                        }}
                        name="date"
                        id="awardeddateto"
                        type="date"
                    />
                </div>
                
                <div class="row pt-6 middle">
                <button
                    class="text-black rounded-2xl "
                    style={{ backgroundColor: "white", width: "120px", height: "40px" }}
                    type="reset"
                    value="Reset"
                >
                    Cancel
                </button>
                <button
                    class="text-white rounded-2xl"
                    style={{
                    backgroundColor: "#a100ff",
                    width: "120px",
                    height: "40px",
                    }}
                    type="submit"
                    value="Submit"
                >
                    Filter
                </button>
                </div>
            </form>
        </div>
    );
};
export default Filter;