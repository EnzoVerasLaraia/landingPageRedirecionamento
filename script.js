document.addEventListener('DOMContentLoaded', function() {
    const joinGroupBtn = document.getElementById('joinGroup');
    const copyLinkBtn = document.getElementById('copyLink');
    const qrToggle = document.querySelector('.qr-toggle');
    const qrCode = document.getElementById('qrCode');
    
    // Simulated WhatsApp group link - replace with actual link
    const groupLink = 'https://chat.whatsapp.com/your-group-link';
    
    joinGroupBtn.addEventListener('click', function() {
        window.open(groupLink, '_blank');
    });
    
    copyLinkBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(groupLink);
            alert('Link copiado para a área de transferência!');
        } catch (err) {
            console.error('Erro ao copiar link:', err);
            // Fallback para navegadores que não suportam a API Clipboard
            const textArea = document.createElement('textarea');
            textArea.value = groupLink;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Link copiado para a área de transferência!');
        }
    });
    
    qrToggle.addEventListener('click', function() {
        qrCode.classList.toggle('visible');
        qrToggle.textContent = qrCode.classList.contains('visible') 
            ? 'Clique aqui para esconder o QRcode'
            : 'Você pode clicar aqui para ver o QRcode';
    });
});