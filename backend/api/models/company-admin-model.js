const mongoose = require('mongoose');
const abstractUserSchema = require('./abstract-user-model');
const extendSchema = require('mongoose-extend-schema');

const company_adminSchema = extendSchema(abstractUserSchema);

module.exports = mongoose.model('companyadmins', company_adminSchema);
