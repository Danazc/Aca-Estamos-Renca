const mongoose = require('mongoose');

const { Schema } = mongoose;
const AdminSchema = new Schema({
    Email: String,
    Password: String
}, { 
    timestamps: true,
    versionKey: false
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;