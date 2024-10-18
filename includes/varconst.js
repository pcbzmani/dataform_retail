const order_id = `A unique identifier for a order`;
const order_date = `Date of the order`;
const amount = `Amount spend on that order id`;
const gs_bucket = `gs://learn_bucket_qr`;
var today = new Date('2013-09-01');
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();



module.exports = {
   order_id,
   order_date,
   amount,
   gs_bucket,
   dd,
   mm,
   yyyy
};