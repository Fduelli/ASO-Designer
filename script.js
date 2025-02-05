function editSequence() {
    let sequenceInputElement = document.getElementById('sequenceInput');
    if (!sequenceInputElement) {
        console.error("Element with ID 'sequenceInput' not found.");
        return;
    }

    let sequenceInput = sequenceInputElement.value.toUpperCase();
    console.log("Input value:", sequenceInput); // Log the input value for debugging

    // The rest of your logic...

    let ideSeq = "";
    let length = sequenceInput.length;
    for(let i = 0; i < length; i++) {
        if (i == 0) {
            ideSeq += "/52MOEr" + sequenceInput.substring(i, i + 1) + "/*";
        } else if (i == length - 1) {
            ideSeq += "/32MOEr" + sequenceInput.substring(i, i + 1) + "/";
        } else {
            ideSeq += "/i2MOEr" + sequenceInput.substring(i, i + 1) + "/*";
        }
    }

    document.getElementById('modalBody').innerText = ideSeq;

    // Show the modal using jQuery
    $('#resultModal').modal('show');
}