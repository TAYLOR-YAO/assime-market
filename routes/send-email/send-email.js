

// var nodemailer = require('nodemailer');

// // create reusable transporter object using the default SMTP transport
// // var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'taylor.dev25@gmail.com',
//         pass: 'Anoumou25',
//     },
// });

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"ASSIME-228" <taylor.dev25@gmail.com>', // sender address
//     to: 'taylor.yao25@yahoo.com, yaotaylor25@gmail.com', // list of receivers
//     subject: 'Thanks for shopping with us!', // Subject line
//     text: 'Hello', // plaintext body
//     html: `<div>
//         <h2><Hello Customer, Thanks For Shopping with us</h2>
//         <img src="https://firebasestorage.googleapis.com/v0/b/assime-images.appspot.com/o/images%2Ff69fbedb-9b25-48cb-882d-dbe6f7475cb6.jpg?alt=media&token=c54a266b-b878-4f69-b9f2-29f52a66b629" atl="papara T-shirt"/>
//     </div> `// html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });