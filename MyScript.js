function convert() {
    let dollar = document.getElementById('input').value;
    
    let inr = parseFloat(dollar)*80;

    document.getElementById('output').value = inr;
}