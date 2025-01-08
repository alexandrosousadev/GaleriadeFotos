// Array de fotos com URLs reais do Picsum Photos
const photos = [
    { id: 1, title: "Paisagem Natural", url: "https://picsum.photos/400/300?random=1" },
    { id: 2, title: "Retrato Urbano", url: "https://picsum.photos/400/300?random=2" },
    { id: 3, title: "Pôr do Sol", url: "https://picsum.photos/400/300?random=3" },
    { id: 4, title: "Natureza Selvagem", url: "https://picsum.photos/400/300?random=4" },
    { id: 5, title: "Arquitetura Moderna", url: "https://picsum.photos/400/300?random=5" },
    { id: 6, title: "Vida Marinha", url: "https://picsum.photos/400/300?random=6" },
    { id: 7, title: "Montanhas Nevadas", url: "https://picsum.photos/400/300?random=7" },
    { id: 8, title: "Flores do Campo", url: "https://picsum.photos/400/300?random=8" },
    { id: 9, title: "Cidade Noturna", url: "https://picsum.photos/400/300?random=9" },
    { id: 10, title: "Animais Silvestres", url: "https://picsum.photos/400/300?random=10" }
];

// Função para criar o card de foto
function createPhotoCard(photo) {
    return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card photo-card">
                <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
                <div class="photo-title">${photo.title}</div>
            </div>
        </div>
    `;
}

// Função para renderizar as fotos
function renderPhotos(filteredPhotos) {
    const photoGrid = document.getElementById('photoGrid');
    
    if (filteredPhotos.length === 0) {
        photoGrid.innerHTML = '<div class="col-12"><div class="no-results">Nenhuma foto encontrada</div></div>';
        return;
    }
    
    photoGrid.innerHTML = filteredPhotos.map(photo => createPhotoCard(photo)).join('');
}

// Funcionalidade de pesquisa
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPhotos = photos.filter(photo => 
            photo.title.toLowerCase().includes(searchTerm)
        );
        renderPhotos(filteredPhotos);
    });
}

// Inicialização da aplicação
function initApp() {
    renderPhotos(photos);
    initializeSearch();
}

// Iniciar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp);