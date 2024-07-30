const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'ismetbayandur.com.tr',
        port: 587,
        secure: false,
        auth: {
            user: 'your-email@ismetbayandur.com.tr',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@ismetbayandur.com.tr',
        subject: `İletişim Formu: ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('asdsa Mesaj gönderilirken bir hata oluştu.');
        }
        res.send('Mesajınız başarıyla gönderildi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor http://localhost:${port}`);
});