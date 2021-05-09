// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import delivery controller
var deliveryController = require('./deliveryController');
// delivery routes
router.route('/deliveryD')
    .get(deliveryController.index)
    .post(deliveryController.new);
router.route('/deliveryD/:delivery_id')
    .get(deliveryController.view)
    .patch(deliveryController.update)
    .put(deliveryController.update)
    .delete(deliveryController.delete);
// Export API routes
module.exports = router;