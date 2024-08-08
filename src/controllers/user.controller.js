const create =(req, res) => {
    const user = req.body;
    console.log(user);
    res.json('ola')

}

const query = (req, res) => {
    console.log(req.query);
    res.json('ola')
}
module.exports = {create, query};