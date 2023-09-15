// Função para verificar o tema preferido do sistema
function checkThemePreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

    console.log("Hello!")
      // O tema do sistema é escuro
      // Adicione uma classe ao corpo da página para aplicar o estilo escuro
      document.body.classList.add('dark-theme');
  } else {
      // O tema do sistema é claro
      // Remova a classe do tema escuro do corpo da página, se existir
      document.body.classList.remove('dark-theme');
      console.log("Hello2")
  }
}

// Chame a função para verificar o tema quando a página é carregada
window.addEventListener('load', checkThemePreference);

// Chame a função para verificar o tema sempre que o tema do sistema for alterado
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkThemePreference);

document.addEventListener("DOMContentLoaded", function () {
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  let isText1Visible = true;

  // Função para alternar o texto suavemente
  function alternateText() {
      if (isText1Visible) {
          text1.classList.add("hidden");
          text2.classList.remove("hidden");
      } else {
          text1.classList.remove("hidden");
          text2.classList.add("hidden");
      }

      isText1Visible = !isText1Visible;

      // Agende a próxima alternância após um intervalo de tempo (por exemplo, 3 segundos)
      setTimeout(alternateText, 3000); // 3000 milissegundos = 3 segundos
  }

  // Inicialize a alternância de texto
  alternateText();
});







