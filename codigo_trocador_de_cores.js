let mudarCor = document.querySelector("input#botao_mudar_cor");
let codigoCor = document.querySelector("p#texto_saida");
mudarCor.addEventListener("click", mudarCorFundo);

const coresFundo = ["#8b0000", "#808080", "#8b4513", "#ffffff", "#299ac0", "#b8860b"];

function mudarCorFundo() {
    let escolhaCor = Math.floor(Math.random() * coresFundo.length)
    document.body.style.backgroundColor = coresFundo[escolhaCor];
    codigoCor.textContent = `Background-Color: ${coresFundo[escolhaCor]}`
}