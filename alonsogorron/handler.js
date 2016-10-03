'use strict';
var s3Helper = require('././S3Helper');

module.exports.handler = function(event, context, cb) {
  s3Helper.listBucketObjects(event.bucket, function(error, data){
    if(error){
      console.log(error);
    }
    else{
      console.log(data);
      cb(null, data);
    }
  })




};
