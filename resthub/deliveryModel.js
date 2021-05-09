var mongoose = require('mongoose');
// Setup schema
var deliverySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export delivery model
var DelivertDet = module.exports = mongoose.model('deliveryDetail', deliverySchema);
module.exports.get = function (callback, limit) {
    DelivertDet.find(callback).limit(limit);
}