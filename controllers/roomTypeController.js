const pool = require("../db/db");
const {getAllElements} = require("./commonController");

const getAllRoomTypes = getAllElements("room_types");

const addRoomType = async (req, res) => {
    try {
        const {type_name, base_price_per_night, max_occupancy} = req.body;
        const result = await pool.query(
            'insert into room_types(type_name, base_price_per_night,max_occupancy) values ($1, $2,$3) returning *',
            [type_name, base_price_per_night, max_occupancy]
        );
        res.status(200).json(result.rows);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

module.exports = {
    getAllRoomTypes,
    addRoomType
};