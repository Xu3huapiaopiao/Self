import * as React from "react";
import * as yup from "yup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { VscPass } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { IconContext } from "react-icons";

//set display error state

//display error under subheader
function DisplayError(error) {
  // const [displayError, setError] = useState("No error");

  if (error != null) {
    return (
      <ListItem>
        <ListItemText style={{ color: "#B5B5B5", fontSize: 5 }}>
          {"No error"}
        </ListItemText>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <ListItemText style={{ color: "#B5B5B5", fontSize: 5 }}>
          {"No error"}
        </ListItemText>
      </ListItem>
    );
  }
}

//display scanning process
function DisplayScanning(error) {
  if (error === true) {
    return (
      <p style={{ float: "right", marginRight: 20, marginTop: 10 }}>
        <IconContext.Provider value={{ color: "E74C3C", size: "30px" }}>
          <VscError />
        </IconContext.Provider>
      </p>
    );
  } else {
    return (
      <p style={{ float: "right", marginRight: 20, marginTop: 10 }}>
        <IconContext.Provider value={{ color: "2ECC71", size: "25px" }}>
          <VscPass />
        </IconContext.Provider>
      </p>
    );
  }
}

const PList = ({ excelData }) => {
  //File has uploaded
  if (excelData != null) {
    //Get excelData object arrary
    let map = new Map(Object.entries(excelData));
    //Get excelData[0] arrary data
    let map2 = map.get("0");
    console.log(map2);
    console.log(map2["Name of Opportunity"]);

    //Validation
    let schema = yup.object({
      "Name of Opportunity": yup.string().required(),
      "Tender No.": yup.string().required(),
      "H&PS Account Level": yup.string().nullable(),
      "Parent Agency (Ministry Level)": yup.string().uppercase().nullable(),
      Agency: yup.string(),
      "Published Date": yup
        .date()
        .required()
        .default(function () {
          return new Date();
        }),
      "Planned Close Date": yup.date().default(function () {
        return new Date();
      }),
      "Extended Close Date": yup.date().default(function () {
        return new Date();
      }),
      "Offer Validity Duration (Days)": yup.string(),
      "Procurement Type": yup.string(),
      "Two Envelope Bidding": yup.string(),
      "Tender Type": yup.string(),
      "Covered under WTO-GPA/FTA": yup.string(),
      "Procurement Nature": yup.string(),
      "Procurement Method": yup.string(),
      "Request for Proposal": yup.string(),
      "Supply Head": yup.string(),
      "Financial Grade (EPU)": yup.string(),
      "Multiple/Unique Item(s) to Respond?": yup.string(),
      "Tag to track": yup.string(),
      "Respondent 1": yup.string(),
      "Respondent 1 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 2": yup.string(),
      "Respondent 2 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 3": yup.string(),
      "Respondent 3 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 4": yup.string(),
      "Respondent 4 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 5": yup.string(),
      "Respondent 5 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 6": yup.string(),
      "Respondent 6 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 7": yup.string(),
      "Respondent 7 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 8": yup.string(),
      "Respondent 8 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Respondent 9": yup.string(),
      "Respondent 9 Bid Price (SGD)": yup
        .number()
        .typeError("Money must be a number")
        .nullable()
        .moreThan(0, "Money value cannot be negative")
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      "Award To": yup.string(),
      "Award Price": yup.string(),
      "Date of Award": yup
        .string()
        .required()
        .default(function () {
          return new Date();
        }),
    });
    console.log(schema);

    // check validity
    schema
      //checking each column's values
      .validate(
        {
          "Name of Opportunity": map2["Name of Opportunity"],
          "Tender No.": map2["Tender No."],
          "H&PS Account Level": map2["H&PS Account Level"],
          "Parent Agency (Ministry Level)":
            map2["Parent Agency (Ministry Level)"],
          Agency: map2["Agency"],
          "Published Date": map2["Published Date"],
          "Planned Close Date": map2["Planned Close Date"],
          "Extended Close Date": map2["Extended Close Date"],
          "Offer Validity Duration (Days)":
            map2["Offer Validity Duration (Days)"],
          "Procurement Type": map2["Procurement Type"],
          "Tender Type": map2["Tender Type"],
          "Two Envelope Bidding": map2["Two Envelope Bidding"],
          "Covered under WTO-GPA/FTA": map2["Covered under WTO-GPA/FTA"],
          "Procurement Nature": map2["Procurement Nature"],
          "Procurement Method": map2["Procurement Method"],
          "Request for Proposal": map2["Request for Proposal"],
          "Supply Head": map2["Supply Head"],
          "Financial Grade (EPU)": map2["Financial Grade (EPU)"],
          "Multiple/Unique Item(s) to Respond?":
            map2["Multiple/Unique Item(s) to Respond?"],
          "Tag to track": map2["Tag to track"],
          "Respondent 1": map2["Respondent 1"],
          "Respondent 1 Bid Price (SGD)": map2["Respondent 1 Bid Price (SGD)"],
          "Respondent 2": map2["Respondent 2"],
          "Respondent 2 Bid Price (SGD)": map2["Respondent 2 Bid Price (SGD)"],
          "Respondent 3": map2["Respondent 3"],
          "Respondent 3 Bid Price (SGD)": map2["Respondent 3 Bid Price (SGD)"],
          "Respondent 4": map2["Respondent 4"],
          "Respondent 4 Bid Price (SGD)": map2["Respondent 4 Bid Price (SGD)"],
          "Respondent 5": map2["Respondent 5"],
          "Respondent 5 Bid Price (SGD)": map2["Respondent 5 Bid Price (SGD)"],
          "Respondent 6": map2["Respondent 6"],
          "Respondent 6 Bid Price (SGD)": map2["Respondent 6 Bid Price (SGD)"],
          "Respondent 7": map2["Respondent 7"],
          "Respondent 7 Bid Price (SGD)": map2["Respondent 7 Bid Price (SGD)"],
          "Respondent 8": map2["Respondent 8"],
          "Respondent 8 Bid Price (SGD)": map2["Respondent 8 Bid Price (SGD)"],
          "Respondent 9": map2["Respondent 9"],
          "Respondent 9 Bid Price (SGD)": map2["Respondent 9 Bid Price (SGD)"],
          "Award To": map2["Award To"],
          "Award Price": map2["Award Price"],
          "Date of Award": map2["Date of Award"],
        },
        { abortEarly: false }
      )
      .then((value) => {
        console.log("success", value); // <--- VALIDATE SUCCESS
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.name);
        console.log(err.errors);
      });

    //Get the keysName from excelData[0]
    var OName = Object.keys(map2);
    console.log(OName);
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 550,
          bgcolor: "background.transparent",
          position: "relative",
          overflow: "auto",
          maxHeight: 330,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {OName.map((name, index) => (
          <ul key={index}>
            {DisplayScanning()}
            <li>
              <ListSubheader
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  textAlign: "left",
                }}
              >
                {`${index + 1}. ${name}`}
              </ListSubheader>
              {DisplayError()}
            </li>
          </ul>
        ))}
      </List>
    );
  }
  //No file has uploaded
  return (
    <p
      style={{
        textAlign: "center",
        margin: 120,
        fontWeight: "bold",
        fontSize: 18,
      }}
    >
      Upload a xls file and click start scan
    </p>
  );
};

export default PList;
