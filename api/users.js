const db = require('../db')

const users = async (req,res) => {
    const users = await db('users').orderBy('id')
    return res.status(200).json(users)
}
export default users