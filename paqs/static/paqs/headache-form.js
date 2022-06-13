function collectINFO() { }

function addTextOptionForOther(element) {
    input = document.createElement("INPUT")
    input.setAttribute('type', 'text')
    input.setAttribute('id', element.id + '_text')
    input.setAttribute('name', element.id + '_text')

    element.nextElementSibling.after(input)
}

function deleteTextOptionForOther(element) {
    document.getElementById(element.id + '_text').remove()
}

function addMedicines(element) {
    medicines = ["Acetaminophen (Tylenol)", "Aspirin", "Ibuprofen (Advil, Advil Migraine, Motrin)", "Excedrin", "Other"]
    medicines_id = ["Acetaminophen", "Aspirin", "Ibuprofen", "Excedrin", 'Other_medicine']
    div = document.createElement("DIV")
    div.setAttribute('id', 'innerfour')

    document.getElementById(element.id).nextElementSibling.after(div)
    for (let i = 0; i < medicines.length; i++) {
        br = document.createElement("BR")

        input = document.createElement("INPUT")
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', medicines_id[i])

        label = document.createElement("LABEL")
        label.setAttribute('for', medicines_id[i])
        label.innerHTML = medicines[i]

        document.getElementById("innerfour").append(br)
        document.getElementById("innerfour").append(input)
        document.getElementById(medicines_id[i]).after(label)
    }
}

function removeMedicines() {
    document.getElementById('innerfour').remove()
}

$(document).ready(function () {
    //THE ONCHANGE OF THE DISABILITY
    var other = document.getElementById('2other');
    var other2 = document.getElementById('2other2');

    document.addEventListener('change', function () {
        const onlyInputs = document.querySelectorAll('#iaq-form input');
        console.log("-------------------------------------------------")
        onlyInputs.forEach(input => {
            console.log(input.id + " " + input.type + " " + input.checked)
        });
    });

    other = document.getElementById("2other")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });

    other2 = document.getElementById("2other2")
    other2.addEventListener('change', function () {
        if (other2.checked == true) {
            addTextOptionForOther(other2)
        } else {
            deleteTextOptionForOther(other2)
        }
    });

    other = document.getElementById("Other_medicine")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });

    other = document.getElementById("6.other")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });

    other = document.getElementById("7.other")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });

    other = document.getElementById("8.other")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });

    other = document.getElementById("9.other")
    other.addEventListener('change', function () {
        if (other.checked == true) {
            addTextOptionForOther(other)
        } else {
            deleteTextOptionForOther(other)
        }
    });
});//LAST LINE OF LISTENER