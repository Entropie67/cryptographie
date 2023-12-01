
const chiffrer = document.getElementById("chiffrer");
chiffrer.addEventListener("click", () => {     
    let message = document.getElementById("message").value;
    let cle = document.getElementById("cle").value;
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "Message chiffré : " + cesar(message, cle);
}); 

let cesar = (message, cle) => {
    let resultat = "";
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            resultat += String.fromCharCode((code - 65 + cle) % 26 + 65);
        } else if (code >= 97 && code <= 122) {
            resultat += String.fromCharCode((code - 97 + cle) % 26 + 97);
        } else {
            resultat += message.charAt(i);
        }
    }
    return resultat;
}