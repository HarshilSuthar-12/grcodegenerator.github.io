// script.js
function generateQRCode() {
    const text = document.getElementById('text').value;
    if (text.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = qr.createDataURL();
    document.getElementById('qrcode').innerHTML = '';
    document.getElementById('qrcode').appendChild(qrCodeImage);
}
