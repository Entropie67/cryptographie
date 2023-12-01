
const chiffrer = document.getElementById("chiffrer");
chiffrer.addEventListener("click", () => {     
    let message = document.getElementById("message").value;
    let cle = document.getElementById("cle").value;
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "Message : " + message + "<br/>Clé : " + cle;
}); 

