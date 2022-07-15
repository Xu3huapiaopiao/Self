const db = require("../config/database");
const pool = require("../config/database");
const { format } = require("date-fns");

// Object and dics
const wordChange = {
  undefined: 0,
  "": 0,
  Na: 0,
  na: 0,
  NA: 0,
  No: 0,
  no: 0,
  NO: 0,
  Yes: 1,
  yes: 1,
  YES: 1,
};

const result = {};

// Change valid date time
const changeOfferDuration = async (body) => {
  let offerDuration = body["Offer Validity Duration (Days)"];
  body["Offer Validity Duration (Days)"] = offerDuration.replace("Days", "");
};

// Change time format
const changeTime = async (body) => {
  body["Published Date"] = body["Published Date"].replace(/ /g, "-");
  body["Published Date"] = format(
    new Date(body["Published Date"]),
    "yyyy-MM-dd"
  );

  body["Planned Close Date"] = body["Planned Close Date"].replace(/ /g, "-");
  body["Planned Close Date"] = format(
    new Date(body["Planned Close Date"]),
    "yyyy-MM-dd"
  );

  body["Extended Close Date"] = body["Extended Close Date"].replace(/ /g, "-");
  body["Extended Close Date"] = format(
    new Date(body["Extended Close Date"]),
    "yyyy-MM-dd"
  );

  body["Date of Award"] = body["Date of Award"].replace(/ /g, "-");
  body["Date of Award"] = format(new Date(body["Date of Award"]), "yyyy-MM-dd");
};

// Change awarded price format
const changeAwardPrice = async (body) => {
  if (body["Num of awardees"] > 1) {
    body["Award Price"] = body["Award Price"]
      .replace(/(\r\n|\n|\r)/gm, "")
      .split(",");
  } else {
    body["Award Price"] = body["Award Price"]
      .replace(/(\r\n|\n|\r)/gm, "")
      .split(",");
    body["Award Price"].pop();
    result["award_price"] = body["Award Price"];
  }
};

// Change yes / no to int
const changeTinyInt = async (body) => {
  body["Two Envelope Bidding"] = wordChange[body["Two Envelope Bidding"]];
  body["Covered under WTO-GPA/FTA"] =
    wordChange[body["Covered under WTO-GPA/FTA"]];
  body["Request for Proposal"] = wordChange[body["Request for Proposal"]];
  body["Multiple/Unique Item(s) to Respond?"] =
    wordChange[body["Multiple/Unique Item(s) to Respond?"]];
  body["Tag to track"] = wordChange[body["Tag to track"]];
};

// Changes supply head and remove financial grade from supply head
const changeSupplyHead = async (body) => {
  let supplyHead = body["Supply Head"];

  supplyHead = supplyHead.split("\r\n");
  supplyHead.pop();
  await supplyHead.forEach((element, index) => {
    supplyHead[index] = element.split(" - ");
  });

  // Change "Supply Head" in body to an array with just the ID's
  let newSupplyHead = [];
  await supplyHead.forEach((element, index) => {
    newSupplyHead.push(supplyHead[index][0]);
  });

  body["Supply Head"] = newSupplyHead;
};

// Change financial grade format
const changeFinancial = async (body) => {
  let financialGrade = body["Financial Grade (EPU)"];
  let newFinancialGrade = [];
  financialGrade = financialGrade.split("\r\n");
  await financialGrade.forEach((element, index) => {
    newFinancialGrade.push(
      financialGrade[index].substring(
        financialGrade[index].lastIndexOf("(") + 1,
        financialGrade[index].lastIndexOf(")")
      )
    );
  });
  body["Financial Grade (EPU)"] = newFinancialGrade;
};

// Change procurement category format
const changeProcurementCategory = async (body) => {
  body["Procurement Category"] = body["Procurement Category"].split("⇒");
  body["Procurement Category"][0] = body["Procurement Category"][0].slice(
    0,
    -1
  );
  body["Procurement Category"][1] = body["Procurement Category"][1].slice(1);
};

// Change respondent foramt
const changeRespondent = async (body) => {
  let respondentArrary = [];
  let bidPriceArray = [];
  let i = 1;
  while (i != 0) {
    if (body[`Respondent ${i}`] != "") {
      respondentArrary.push(body[`Respondent ${i}`]);
      bidPriceArray.push(body[`Respondent ${i} Bid Price (SGD)`]);
      i++;
    } else {
      i = 0;
    }
  }
  result["Respondents"] = respondentArrary;
  result["Bid Prices"] = bidPriceArray;
};

// Change awarded respondent format
const changeAwarded = async (body) => {
  if (body["Num of awardees"] > 1) {
    body["Award To"] = body["Award To"].split("\r\n");
  } else {
    body["Award To"] = body["Award To"].split("\r\n");
    body["Award To"].pop();
    result["award_to"] = body["Award To"];
  }
};

module.exports = {
  upload: async (body) => {
    let conn = null;
    try {
      await changeOfferDuration(body);
      await changeTime(body);
      await changeAwardPrice(body);
      await changeTinyInt(body);
      await changeSupplyHead(body);
      await changeFinancial(body);
      await changeProcurementCategory(body);
      await changeRespondent(body);
      await changeAwarded(body);

      conn = await pool.getConnection();
      await conn.beginTransaction();

      // Get opportunity_id and input basic details
      const [opportunity] = await conn.query(
        `INSERT INTO opportunities (opportunity_name, tender_no, Published_date, planned_closed_date, extended_closed_date, offer_valid_days, award_date, total_awarded_value)
         VALUES (?,?,?,?,?,?,?,?)`,
        [
          body["Name of Opportunity"],
          body["Tender No."],
          body["Published Date"],
          body["Planned Close Date"],
          body["Extended Close Date"],
          body["Offer Validity Duration (Days)"],
          body["Date of Award"],
          body["Total awarded value"],
        ]
      );
      result["opportunity_id"] = opportunity.insertId;

      // Insert TinyInt values
      await conn.query(
        `update opportunities set envelope_bid = ?, wto_gpa = ?, request_proposal = ?, more_than_one_respond_item = ?, tag_to_track = ? where opportunity_id = ?`,
        [
          body["Two Envelope Bidding"],
          body["Covered under WTO-GPA/FTA"],
          body["Request for Proposal"],
          body["Multiple/Unique Item(s) to Respond?"],
          body["Tag to track"],
          result.opportunity_id,
        ]
      );

      // Retrieve agency_id
      const [agency] = await conn.query(
        `select agency_id from agencies where agency_name = ?`,
        [body["Agency"]]
      );
      result["agency_id"] = agency[0].agency_id;

      // Retrieve procurement_type_id
      const [procurement_type] = await conn.query(
        `select procurement_type_id from procurement_types where procurement_type_name = ?`,
        [body["Procurement Type"]]
      );
      result["procurement_type_id"] = procurement_type[0].procurement_type_id;

      // Retrieve tender_type_id
      const [tender_type] = await conn.query(
        `select tender_type_id from tender_types where tender_type_name = ?`,
        [body["Tender Type"]]
      );
      result["tender_type_id"] = tender_type[0].tender_type_id;

      // Retrieve procurement_nature
      const [procurement_nature] = await conn.query(
        `select procurement_nature_id from procurement_natures where procurement_nature_name = ?`,
        [body["Procurement Nature"]]
      );
      result["procurement_nature_id"] =
        procurement_nature[0].procurement_nature_id;

      // Retrieve procurement_method
      const [procurement_method] = await conn.query(
        `select procurement_method_id from procurement_methods where procurement_method_name = ?`,
        [body["Procurement Method"]]
      );
      result["procurement_method_id"] =
        procurement_method[0].procurement_method_id;

      // Retrieve supply_head_id
      result["supply_head_id"] = [];
      const retrieveSupplyHead = async (array) => {
        for (i = 0; i < array.length; i++) {
          let [supply_head] = await conn.query(
            `SELECT supply_head_id FROM supply_heads where supply_head_name = ?`,
            [array[i]]
          );
          result.supply_head_id.push(supply_head[0].supply_head_id);
        }

        return;
      };
      await retrieveSupplyHead(body["Supply Head"]);

      // Retrieve financial_grade_id
      result["financial_grade_id"] = [];
      const retrieveFinancialGrade = async (array) => {
        for (i = 0; i < array.length; i++) {
          let [financial_grade] = await conn.query(
            `SELECT financial_grade_id FROM financial_grades where financial_grade_description = ?`,
            [array[i]]
          );
          result.financial_grade_id.push(financial_grade[0].financial_grade_id);
        }

        return;
      };
      await retrieveFinancialGrade(body["Financial Grade (EPU)"]);

      // Retrieve procurement_category_sub_id
      const retrieveProcurementSubId = async (array) => {
        const [procurement_category_main] = await conn.query(
          `SELECT procurement_category_main_id FROM procurement_category_main where name = ?`,
          [array[0]]
        );

        let procurement_category_main_id =
          procurement_category_main[0].procurement_category_main_id;

        const [procurement_category_sub] = await conn.query(
          `SELECT procurement_category_sub_id FROM procurement_category_sub where (name = ? and procurement_category_main_id=?)`,
          [array[1], procurement_category_main_id]
        );

        result["procurement_category_sub_id"] =
          procurement_category_sub[0].procurement_category_sub_id;
        return;
      };
      await retrieveProcurementSubId(body["Procurement Category"]);

      // Retrieve respondent_id
      result["respondent_id"] = [];
      const retrieveRespondentId = async (array) => {
        for (i = 0; i < array.length; i++) {
          let [respondent] = await conn.query(
            `SELECT respondent_id FROM respondents where respondent_name = ?;`,
            [array[i]]
          );
          if (respondent.length == 0) {
            let [newRespondent] = await conn.query(
              `INSERT INTO respondents (respondent_name) VALUES (?);`,
              [array[i]]
            );
            result.respondent_id.push(newRespondent.insertId);
          } else {
            result.respondent_id.push(respondent[0].respondent_id);
          }
        }

        return;
      };
      await retrieveRespondentId(result.Respondents);

      // Retrieve awarded respondent_id
      const retrieveAwardedRespondentId = async (array) => {
        for (i = 0; i < array.length; i++) {
          let [respondent] = await conn.query(
            `SELECT respondent_id FROM respondents where respondent_name = ?;`,
            [array[i]]
          );
          result.award_to[i] = respondent[0].respondent_id;
        }

        return;
      };
      await retrieveAwardedRespondentId(result.award_to);

      // Insert data into opportunities table with values in "result" object
      await conn.query(
        `update opportunities set agency_id = ?, procurement_type_id = ?, tender_type_id = ?, procurement_nature_id = ?, procurement_method_id = ?, procurement_category_sub_id= ? where opportunity_id = ?`,
        [
          result.agency_id,
          result.procurement_type_id,
          result.tender_type_id,
          result.procurement_nature_id,
          result.procurement_method_id,
          result.procurement_category_sub_id,
          result.opportunity_id,
        ]
      );

      // Insert data into opportunity_supply_heads table with the values in "result" object
      const insertIntoSupplyHead = async (body) => {
        for (i = 0; i < body["Num of supply heads and financial grades"]; i++) {
          await conn.query(
            `INSERT INTO opportunity_supply_heads (opportunity_id, supply_head_id, financial_grade_id)
            VALUES (?,?,?);`,
            [
              result.opportunity_id,
              result.supply_head_id[i],
              result.financial_grade_id[i],
            ]
          );
        }

        return;
      };
      await insertIntoSupplyHead(body);

      // Insert data into opportunity_respondents table with the values in "result" object
      const insertIntoRespondent = async (body) => {
        for (i = 0; i < body["Num of respondents"]; i++) {
          await conn.query(
            `INSERT INTO opportunity_respondents (respondent_id, opportunity_id, bidding_value)
            VALUES (?,?,?);`,
            [
              result.respondent_id[i],
              result.opportunity_id,
              result["Bid Prices"][i],
            ]
          );
        }

        return;
      };
      await insertIntoRespondent(body);

      // Update opportunity_respondents table with individual awarded price and awarded boolean
      const UpdateRespondent = async (body) => {
        for (i = 0; i < body["Num of awardees"]; i++) {
          await conn.query(
            `update opportunity_respondents set awarded_value = ?, awarded = 1 where (opportunity_id = ? and respondent_id=?)`,
            [result.award_price[i], result.opportunity_id, result.award_to[i]]
          );
        }

        return;
      };
      await UpdateRespondent(body);

      console.log(result);
      await conn.commit();
      return result;
    } catch (error) {
      if (conn) await conn.rollback();
      throw error;
    } finally {
      if (conn) await conn.release();
    }
  },
};
