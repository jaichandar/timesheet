class User {
    login (req, res, next) {
        return res.status(200).json({
            success: true,
            message: 'Logged in',
        }) 
    }
}

const instance = new User();
export default instance;