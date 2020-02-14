'use strict';
var connection = require('../../Connection');
 
var authenticateUser = {
    authenticate : function(req, res) {
        console.log('UserName'+JSON.stringify(req.body.username));
        console.log('UserName'+JSON.stringify(req.params));
         var username = req.param("username");
         var password = req.param("password");
         password = new Buffer(password, 'base64');
         var query ='SELECT * FROM tbl_adim_user_details where user_name=\''+username+'\' and user_full_name = \''+password+'\' ';
         console.log(query);
         connection.query(query, function(error,rows)
         {
             if(!!error)
             {
                 console.log(" error" + error);
                 res.send(error);
             }
             else
             {
              res.send(rows);
             }
         });
    },
    getTableData : function(req,res){
        var id = req.query.solutionid;
        var query ='SELECT teamName,component,impact FROM db_accessibility_test.tbl_violation_details where violationDetailFk= \''+ id +'\'';
        connection.query(query, function(error,rows)
        {
            if(!!error)
            {
                console.log(" error" + error);
                res.send(error);
            }
            else
            {
             res.send(rows);
            }
        });
    },
    getLinkTableData: function(req,res){
       // var query ='SELECT * FROM tbl_solution_team_master';
        var query ='SELECT teamName,component,violationId FROM tbl_violations where runStatus = "Completed" ';
        connection.query(query, function(error,rows)
        {
            if(!!error)
            {
                console.log(" error" + error);
                res.send(error);
            }
            else
            {
             res.send(rows);
            }
        });
    }
 };
 
 module.exports = authenticateUser;