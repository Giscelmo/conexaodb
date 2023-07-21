const userCategory = require('../models/userCategoryModel');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const userCategory = await userCategory.create({ name });
        return res.json(userCategory);
    }
}