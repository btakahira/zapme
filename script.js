document.getElementById('generateBtn').addEventListener('click', function() {
    var inputNumber = document.getElementById('phoneNumber').value;
    var cleanedNumber = inputNumber.replace(/\D/g,'');
    
    if (cleanedNumber.length <= 11) {
        cleanedNumber = '55' + cleanedNumber;
    }

    var resultUrl = 'https://wa.me/' + cleanedNumber;
    document.getElementById('resultUrl').value = resultUrl;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    var copyText = document.getElementById('resultUrl');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard: ' + copyText.value);
});

document.getElementById('openBtn').addEventListener('click', function() {
    var resultUrl = document.getElementById('resultUrl').value;
    if (resultUrl) {
        window.open(resultUrl, '_blank');
    }
});