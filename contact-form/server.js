const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'ismetbayandur.com.tr',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ismet@ismetbayandur.com.tr', // YunoHost e-posta adresiniz
            pass: "xL9)SN.!5V>6e'!" // YunoHost e-posta şifreniz
        }
    });

    const mailOptions = {
        from: email,
        to: 'ismet@ismetbayandur.com.tr',
        subject: `İletişim Formu: ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            console.log(error);
            console.log(info);
            return res.status(500).send('Mesaj gönderilirken bir hata oluştu. server');
        }
        res.send('Mesajınız başarıyla gönderildi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor http://localhost:${port}`);
});
