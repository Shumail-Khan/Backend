let checktoken = (req, res, next) =>{ // Middleware function
    console.log("req.query.token: ", req.query.token); // Log the token from the query string
    if(req.query.token !== process.env.myToken) { // Check if token is valid
        return res.send(
            {
                status:0,
                msg:"Invalid token!"});
    }
    if(req.query.token === "" || req.query.token === undefined) {
        res.send(
            {
                status:1,
                msg:"Token is empty!"});
    }
    next(); // Needed to move forward to the next middleware or route handler
}
module.exports = checktoken; // Export the middleware function