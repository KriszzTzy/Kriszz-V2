function randomChinese(length) {
    const characters = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处理带走第类打夜范热。';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function encrypt() {
    const fileInput = document.getElementById('uploadFile');
    const codeInput = document.getElementById('codeInput').value.trim();
    const output = document.getElementById('output');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            encryptContent(fileContent);
        }
        reader.readAsText(fileInput.files[0]);
    } else if (codeInput.length > 0) {
        encryptContent(codeInput);
    } else {
        alert("Please upload a file or write some code first!");
    }
    
    function encryptContent(content) {
        let encoded = '';
        for (let char of content) {
            encoded += randomChinese(1);
        }
        const finalCode = `eval('${encoded}'); // Encrypted by KrizzTzy`;
        output.value = finalCode;
        downloadBtn.style.display = 'inline-block';
    }
}

function downloadEncrypted() {
    const content = document.getElementById('output').value;
    const blob = new Blob([content], { type: 'text/javascript' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'encrypted.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}