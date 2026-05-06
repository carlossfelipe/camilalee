document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('track');
    
    // 1. Lista das suas fotos
    const photos = [
        "/CrocodilaLee/frontend/src/assets/Noivas/IMG_7068.JPG",
        "/CrocodilaLee/frontend/src/assets/Noivas/Aline_amp_Gabriel-156_Original.jpg",
        "/CrocodilaLee/frontend/src/assets/Noivas/NoivaBrinco.jpg",
        "/CrocodilaLee/frontend/src/assets/Noivas/Alineamp_Gabriel-141_Original.jpg",
        "/CrocodilaLee/frontend/src/assets/Noivas/noiva_para_esquerda.jpg"
    ];

    // 2. Função para embaralhar (Fisher-Yates Shuffle)
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledPhotos = shuffle([...photos]);

    // 3. Criar o HTML das imagens (Original + Cópia para o loop)
    // Duplicamos a lista embaralhada para o loop infinito CSS funcionar
    const fullList = [...shuffledPhotos, ...shuffledPhotos];

    fullList.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        track.appendChild(img);
    });
});