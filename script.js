

function editSequence() {
    let type = document.getElementById('dropdownMenuButton').innerText;
    if(type.substring(0,1) === "2") {
        editSequenceMOE();
    }else if (type.substring(0,1) === "G") {
        editSequenceGapmer();
    }
    toggleCopyButton();
}

function editSequenceMOE() {
    let sequenceInput = document.getElementById('sequenceInput').value.toUpperCase();
    // Add logic to modify the sequence
    let ideSeq = "";
    let length = sequenceInput.length
    for(let i = 0; i <length; i++) {
        if (i==0) {
            ideSeq += "/52MOEr" + sequenceInput.substring(i, i+1) + "/*";
        } else if (i==length-1) {
            ideSeq += "/32MOEr" + sequenceInput.substring(i, i+1) + "/";
        } else {
            ideSeq += "/i2MOEr" + sequenceInput.substring(i, i+1) + "/*";
        }
    }

    document.getElementById('output').innerText = `IDT Annotated Sequence: ${ideSeq}`;
}

function editSequenceGapmer() {
    let sequenceInput = document.getElementById('sequenceInput').value.toUpperCase();
    // Add logic to modify the sequence
    let ideSeq = "";
    let length = sequenceInput.length
    for(let i = 0; i <length; i++) {
        if(i<5 || i > length-5) {
            if (i==0) {
                ideSeq += "/52MOEr" + sequenceInput.substring(i, i+1) + "/*";
            } else if (i==length-1) {
                ideSeq += "/32MOEr" + sequenceInput.substring(i, i+1) + "/";
            } else {
                ideSeq += "/i2MOEr" + sequenceInput.substring(i, i+1) + "/*";
            }
        }else {
            ideSeq += sequenceInput.substring(i, i+1) + "*";
        }
    }

    document.getElementById('output').innerText = `IDT Annotated Sequence: ${ideSeq}`;
}

function initializeDropdown() {
    $('.dropdown-item').on('click', function() {
        var selectedText = $(this).text();
        $('#dropdownMenuButton').text(selectedText);
    });
}

function toggleCopyButton() {
    const copyButton = document.getElementById('copyButton');
    copyButton.classList.remove('d-none');
}

function copyTextToClipboard() {
    const outputElement = document.getElementById('output');
    const textToCopy = outputElement.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}

// Ensure the DOM is fully loaded before executing the function
$(document).ready(function() {
    initializeDropdown();
});