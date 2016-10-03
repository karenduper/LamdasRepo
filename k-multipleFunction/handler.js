var aws = require("aws-sdk");
var lambda =  new aws.Lambda({region:"us-east-1"});
var async = require("async");

module.exports.handler = function(event, context, cb) {
 var funciones = event.ciudades.map(function(ciudad){
     return async.apply(functionInvoke, ciudad)
 })
    async.parallel(funciones, function(err, data){
        if(err){
            return cb(err)
        }
        cb(null, data)
    });
};


function functionInvoke(ciudad, callback){
    var params = {
        FunctionName: "karen-sls-k-function",
        Payload: JSON.stringify({ciudad: ciudad}),
        InvocationType: "RequestResponse"
    };

    lambda.invoke(params, function(err, data){
        if(err){
            return callback(err)
        }
        callback(null, data.Payload);
    });
}