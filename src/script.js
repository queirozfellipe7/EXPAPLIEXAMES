function validarFormulario() {
    const cpf = document.getElementById("cpf").value.trim();
    const sus = document.getElementById("sus").value.trim();
    const nome = document.getElementById("nome").value.trim();
  
    if (!cpf || !sus || !nome) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert("CPF inválido. Use o formato 000.000.000-00.");
      return false;
    }
  
    const usuarioValido = usuarios.find(
      u => u.cpf === cpf && u.sus === sus );
  
    if (!usuarioValido) {
      alert("Dados incorretos. Verifique e tente novamente.");
      return false;
    }
  

    window.location.href = "exames.html";
    return false;
  }
  






  const usuarios = [
    {
        cpf: "037.747.502-54",
        sus: "1234567",
        nome: "Fellipe Augusto"
      },
    {
      cpf: "123.456.789-00",
      sus: "123456789012345",
      nome: "João da Silva"
    },
    {
      cpf: "987.654.321-00",
      sus: "987654321098765",
      nome: "Maria Souza"
    }
  ];
  