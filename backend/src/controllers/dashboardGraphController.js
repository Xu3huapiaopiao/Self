const dashboardGraphService = require('../service/dashboardGraphService');

module.exports = {
    topAwarded: async (req, res) => {
        try {
            const { year } = req.params;
            const result = await dashboardGraphService.topAwarded(year);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    topParentAgency: async (req, res) => {
        try {
            const { year } = req.params;
            const result = await dashboardGraphService.topParentAgency(year);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    topBidded: async (req, res) => {
        try {
            const { year } = req.params;
            const result = await dashboardGraphService.topBidded(year);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};