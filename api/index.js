
const users = (req,res) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}`)
}
export default users