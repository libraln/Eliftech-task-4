import db from "mongoose"
const schema = db.Schema({
    email: String,
    first_name: String,
    last_name: String,
    avatar: String
});

const User = db.model('User', schema);
export default User
