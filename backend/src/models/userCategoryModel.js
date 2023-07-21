const { Model, DataTypes } = require('sequelize');

class userCategory extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = userCategory;
