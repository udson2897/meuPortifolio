function handleSubmit(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
      

      // Validação simples
      if (!name || !email || !subject || !phone ||!message) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Validação simples de e-mail
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      emailjs
        .send("service_qw5b2qn", "template_gtcb079", {
          name: name,
          email: email,
          subject: subject,
          phone: phone,
          message: message,
          time: new Date().toLocaleString(),
        })
        .then(() => {
          alert("Mensagem enviada com sucesso!");
          document.getElementById("contactForm").reset();
        })
        .catch((error) => {
          console.error("Erro:", error);
          alert("Erro ao enviar a mensagem. Tente novamente.");
        });
    }


