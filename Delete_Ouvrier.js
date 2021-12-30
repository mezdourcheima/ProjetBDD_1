var express = require('express');
var router = express.Router();
var connection  = require('../index.js');
 
 
// DELETE OUVRIER
router.get('/delete/(:id)', function(req, res, next) {
    var OUVRIERS = { id: req.params.id }
     
    
        connection.query('DELETE FROM OUVRIERS WHERE idOUVRIER = ' + req.params.id, OUVRIERS, function(err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)
                // redirect to users list page
                res.redirect('/')
            } else {
                req.flash('success', 'User has been deleted successfully! id = ' + req.params.id)
                // redirect to users list page
                res.redirect('/')
            }
        })
   })