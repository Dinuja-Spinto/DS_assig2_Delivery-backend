// Import delivery model
DelivertDet = require('./deliveryModel');
// Handle index actions
exports.index = function (req, res) {
    DelivertDet.get(function (err, deliveryD) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Delivery details retrieved successfully",
            data: deliveryD
        });
    });
};
// Handle create delivery actions
exports.new = function (req, res) {
    var delivery = new DelivertDet();
    delivery.name = req.body.name ? req.body.name : delivery.name;
    delivery.address = req.body.address;
    delivery.email = req.body.email;
    delivery.phone = req.body.phone;
// save the delivery and check for errors
    delivery.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'Delivery details created!',
            data: delivery
        });
    });
};
// Handle view delivery info
exports.view = function (req, res) {
    DelivertDet.findById(req.params.delivery_id, function (err, delivery) {
        if (err)
            res.send(err);
        res.json({
            message: 'Delivery details loading..',
            data: delivery
        });
    });
};
// Handle update delivery info
exports.update = function (req, res) {
    DelivertDet.findById(req.params.delivery_id, function (err, delivery) {
        if (err)
            res.send(err);
        delivery.name = req.body.name ? req.body.name : delivery.name;
        delivery.address = req.body.address;
        delivery.email = req.body.email;
        delivery.phone = req.body.phone;
// save the delivery and check for errors
        delivery.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Delivery details updated',
                data: delivery
            });
        });
    });
};
// Handle delete delivery
exports.delete = function (req, res) {
    DelivertDet.remove({
        _id: req.params.delivery_id
    }, function (err, delivery) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'delivery details deleted'
        });
    });
};