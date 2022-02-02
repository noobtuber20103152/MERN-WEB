const fetchblog = (req, res, next)=>{
    try {
        // console.log("Using middleware successfully")
        next();
    } catch (error) {
        console.log(error.message)
        console.log("Error into middleware")
        res.status(401).send({error:"Internal Server Error"})
    }
}
module.exports = fetchblog