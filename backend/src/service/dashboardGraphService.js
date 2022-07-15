const queryResult = require('./queryResult');

module.exports = {
    topAwarded: async year => {
        const query = "SELECT respondent_name respondent, COUNT(NULLIF(opp.awarded,0)) won, COUNT(NULLIF(opp.awarded,1)) lost FROM respondents, opportunity_respondents opp, opportunities WHERE opp.opportunity_id = opportunities.opportunity_id AND opp.respondent_id = respondents.respondent_id AND YEAR(IFNULL(extended_closed_date, planned_closed_date)) = ? GROUP BY opp.respondent_id HAVING won > 0 ORDER BY won DESC, lost DESC LIMIT 8;";
        return await queryResult(query, [ year ]);
    },
    topParentAgency: async year => {
        const query = "SELECT parent_agency_name parentAgency, COUNT(parent_agency_id) opportunities FROM opportunities, agencies, parent_agencies WHERE opportunities.agency_id = agencies.agency_id AND agencies.parent_id = parent_agency_id AND YEAR(IFNULL(extended_closed_date, planned_closed_date)) = ? GROUP BY parent_agency_id ORDER BY opportunities DESC LIMIT 8;";
        return await queryResult(query, [ year ]);
    },
    topBidded: async year => {
        const query = "SELECT respondent_name respondent, COUNT(opp.opportunity_id) bids FROM opportunity_respondents opp, opportunities, respondents WHERE opp.opportunity_id = opportunities.opportunity_id AND opp.respondent_id = respondents.respondent_id AND YEAR(IFNULL(extended_closed_date, planned_closed_date)) = ? GROUP BY respondents.respondent_id ORDER BY bids DESC LIMIT 4;";
        return await queryResult(query, [ year ]);
    }
};