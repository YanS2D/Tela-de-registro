// Seleciona o checkbox do switch (modo claro/escuro)
const toggle = document.getElementById('toggle-switch');

// Escuta a mudança de estado do switch
toggle.addEventListener("change", () => {
  // Alterna a classe "light-mode" no body
  document.body.classList.toggle("light-mode");
});

// Seleciona o formulário de registro
const form = document.getElementById('formRegistro');

// Seleciona o parágrafo onde aparecem as mensagens de erro
const erro = document.getElementById('erro');

// Escuta o evento de envio do formulário
form.addEventListener('submit', (e) => {
  // Impede o recarregamento da página
  e.preventDefault();

  // Captura os valores dos campos e remove espaços extras
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmar = document.getElementById('confirmar').value.trim();

  // Seleciona o botão de envio dentro do formulário
  const botao = form.querySelector('button');

  // Verifica se algum campo está vazio
  if (!nome || !email || !senha || !confirmar) {
    erro.textContent = 'Preencha todos os campos.';
    return;
  }

  // Desativa o botão para evitar múltiplos envios
  botao.disabled = true;
  botao.textContent = 'Entrando...';

  // Simula um tempo de processamento (ex: requisição ao servidor)
  setTimeout(() => {

    // Usuário fictício para validação
    const usuarioValido = {
      nome: 'test',
      email: 'email@teste.com',
      senha: '123456',
      confirmar: '123456',
      id: 1
    };

    // Verifica se os dados informados batem com o usuário válido
    if (
      nome === usuarioValido.nome &&
      email === usuarioValido.email &&
      senha === usuarioValido.senha &&
      confirmar === usuarioValido.confirmar
    ) {
      console.log('cadastro realizado com sucesso!');
      erro.textContent = 'cadastro relizado com sucesso!';
      erro.style.color = 'green';
    } else {
      // Mostra mensagem de erro se os dados estiverem incorretos
      erro.textContent = 'Credenciais inválidas.';
      erro.style.color = 'red';
    }

    // Reativa o botão após a validação
    botao.disabled = false;
    botao.textContent = 'Entrar';

  }, 800); // Tempo de espera em milissegundos
});
