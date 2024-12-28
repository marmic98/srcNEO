function isTokenExpired(token) {
    if (!token) return true; // Se non c'è token, è considerato scaduto

    const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica il payload del token
    const exp = payload.exp; // Estrai il valore di exp
    const currentTime = Math.floor(Date.now() / 1000); // Ottieni il tempo corrente in secondi

    return exp < currentTime; // Verifica se il token è scaduto
}