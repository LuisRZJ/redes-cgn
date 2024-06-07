
// para compartir la pagina
document.addEventListener('DOMContentLoaded', (event) => {
            const shareButton = document.getElementById('shareButton');

            shareButton.addEventListener('click', async () => {
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: document.title,
                            text: 'Mira esta increíble página!',
                            url: window.location.href
                        });
                        console.log('Página compartida exitosamente');
                    } catch (error) {
                        console.error('Error al compartir la página', error);
                    }
                } else {
                    console.log('La API de Web Share no es soportada en este navegador.');
                }
            });
        });


// footer con año actual
 document.addEventListener('DOMContentLoaded', function () {
        var yearSpan = document.getElementById('year');
        var currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    });
