import React from "react";

import { useEffect, useState } from "react";
import { Headerbk } from "../components";



const DataEdit = () => {
  const [setToolBarOptions] = useState(null);
  const [setEditing] = useState(null);
  // const [toolbarOptions, setToolBarOptions] = useState(null);
  // const [editing, setEditing] = useState(null);

  useEffect(() => {
    setToolBarOptions(["Search"]);
    setEditing({ allowDeleting: true, allowEditing: true });
  }, [setEditing, setToolBarOptions]);

  return (
    <div className="bg-color-own m-2 md:m-12 p-2 md:p-10 rounded-3xl">
      
      
       <Headerbk title="GeBiz Procurement" />
      
      {/* <div class="buttontop">
      <button
            class="text-black rounded-2xl  "
            style={{ backgroundColor: "red",color:"white", width: "120px", height: "40px" }}
            type="reset"
            value="Reset"
          ><p
          style={{color:"white" }}
          >
            Clear 
            </p>
          </button>
      </div> */}
      <form class="form1">
        <div>
          <label class="text-white" style={{ fontWeight: "bold" }}>
            Name of opportunity :{" "}
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
            Tender No :{" "}
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
            Parent Agency :{" "}
          </label>
          <select
            class="text-white"
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
          >
            <option value="MOM">MOM</option>
            <option value="MOE">MOE</option>
            <option value="MCI">MCI</option>
            <option value="AGC">AGC</option>
          </select>
        </div>

        <div class="pt-6">
          <label class="text-white" style={{ fontWeight: "bold" }}>
            H&PS Account Level :{" "}
          </label>
          <select
            class="text-white"
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
          >
            <option value="MOF">MOF</option>
            <option value="MHA">MHA</option>
            <option value="MINDEF">MINDDEF</option>
            <option value="CPF">CPF</option>
          </select>
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
            name="date"
            id="newdate"
            type="date"
          />
        </div>

        <div class="pt-6">
          <label class="text-white" style={{ fontWeight: "bold" }}>
            Planned Close Date :{" "}
          </label>
          <input
            class="text-white form-control"
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
            name="date"
            id="newdate"
            type="date"
          />
        </div>

        <div class="pt-6">
          <label class="text-white" style={{ fontWeight: "bold" }}>
            Extended Close Date :{" "}
          </label>
          <input
            class="text-white form-control"
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
            name="date"
            id="newdate"
            type="date"
          />
        </div>

        <div class="pt-6">
          <label class="text-white" style={{ fontWeight: "bold" }}>
            Offer Validity Duration Days :{" "}
          </label>
          <input
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
            type="text"
            name="Duration"
          />
        </div>

        <div class="pt-6">
          <label class="text-white" style={{ fontWeight: "bold" }}>
            Procurement Type :{" "}
          </label>
          <input
            class="text-white"
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "#111827",
            }}
            type="text"
            name="Procurement"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default DataEdit;
