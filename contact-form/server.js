const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS ve body-parser middleware'lerini ekleyin
app.use(cors());
app.use(express.json()); // JSON verilerini işlemek için
app.use(express.urlencoded({ extended: true })); // URL encoded verileri işlemek için

app.post('/send-email', (req, res) => {
    console.log(req.body); // req.body'yi kontrol edin

    const { name, mail, message } = req.body;
    const email = "ismet@ismetbayandur.com.tr"
    if (!name || !mail || !message) {
        return res.status(400).send(`${name},${mail},${message}`);
    }

    const transporter = nodemailer.createTransport({
        host: 'ismetbayandur.com.tr', // Kendi SMTP sunucunuzun adresini kullanın
        port: 587,
        secure: false,
        auth: {
            user: 'ismet@ismetbayandur.com.tr', // SMTP kullanıcınız
            pass: "xL9)SN.!5V>6e'!" // SMTP şifreniz
        }
    });

    const mailOptions = {
        from: email,
        to: 'info@ismetbayandur.com.tr', // E-postaları alacağınız adres
        subject: "website iletişim",
        text: `Isim : ${name}\nEmail : ${mail}\nMessage : ${message}\n\n\nismetbayandur.com.tr`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Mesaj gönderilirken bir hata oluştu.');
        }
        res.send('Mesajınız başarıyla gönderildi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor http://localhost:${port}`);
});
