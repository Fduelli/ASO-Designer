function editSequence() {
    let sequenceInput = document.getElementById('sequenceInput').value.toUpperCase();
    // Add logic to modify the sequence
    let ideSeq = "";
    let length = sequenceInput.length
    for(let i = 0; i <length; i++) {
        if (i==0) {
            ideSeq += "/52MOEr" + sequenceInput.substring(i, i+1) + "/*";
        } else if (i==sequenceInput.length()-1) {
            ideSeq += "/32MOEr" + sequenceInput.substring(i, i+1) + "/";
        } else {
            ideSeq += "/i2MOEr" + sequenceInput.substring(i, i+1) + "/*";
        }
    }

    document.getElementById('modalBody').innerText = ideSeq;

    // Show the modal using jQuery
    $('#resultModal').modal('show');
}