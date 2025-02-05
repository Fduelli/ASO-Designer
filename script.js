function editSequence() {
    let sequenceInput = document.getElementById('sequenceInput').value.toUpperCase();
    // Add logic to modify the sequence
    let output = "";
    for(let i = 0; i <sequenceInput.length(); i++) {
        if (i==0) {
            output += "/52MOEr" + sequenceInput.substring(i, i+1) + "/*";
        } else if (i==sequenceInput.length()-1) {
            output+= "/32MOEr" + sequenceInput.substring(i, i+1) + "/";
        } else {
            output+= "/i2MOEr" + sequenceInput.substring(i, i+1) + "/*";
        }
    }
    // Display the edited sequence
    document.getElementById('output').innerText = `IDE annotated Sequence: ${output}`;
}