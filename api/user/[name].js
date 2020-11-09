module.exports = (req, res) => {
    const {
        query:
        { name = 'world' }
    } = req

    return res.send(`Hello ${name}`);
}