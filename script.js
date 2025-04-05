function criarPost() {
  const texto = document.getElementById("post-text").value;
  if (texto.trim() === "") return;

  const post = document.createElement("div");
  post.className = "post";
  post.textContent = texto;

  document.getElementById("feed").prepend(post);
  document.getElementById("post-text").value = "";
}
function enviarMensagem() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.textContent = `Você: ${msg}`;
  chatBox.appendChild(div);

  input.value = "";

  // Resposta automática (simulação)
  setTimeout(() => {
    const resposta = document.createElement("div");
    resposta.textContent = "Amigo: Legal! Me conta mais sobre teu carro.";
    chatBox.appendChild(resposta);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  chatBox.scrollTop = chatBox.scrollHeight;
}
