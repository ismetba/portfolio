document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {
          name: formData.get('name'),
          mail: formData.get('mail'),
          message: formData.get('message'),
      };

      try {
          const response = await fetch('http://188.132.198.114:3000/send-email', {
              method: 'POST',
              mode: 'cors',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });

          if (response.ok) {
              responseDiv.innerHTML = 'Mesajınız başarıyla gönderildi!';
              form.reset();
          } else {
              responseDiv.innerHTML = 'asd Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.';
          }
      } catch (error) {
          responseDiv.innerHTML = 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin. contact.js';
      }
  });
});