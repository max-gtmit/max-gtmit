function moveprogressbar(progress) {
    progressbar = document.querySelector(".progress-bar");
    progressbar.style.setProperty('width', progress);
    progressbar.value = progress;
    progressbar.innerHTML = progress;
}
//moveprogressbar('70%')

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function saveprogress() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.appendChild(document.create)
}

$(document).ready(function () {
    var csrf = $("input[name=csrfmiddlewaretoken]").val();
    var sp_btn = document.querySelector('[id=myBtn]');
    console.log(sp_btn);
    sp_btn.addEventListener('click', function () {
        $.ajax({
            url:'',
            type:'post',
            data:{
                csrfmiddlewaretoken: csrf,
                text:'test',
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var surgery = document.querySelector('input[name=history_surgery]');
    console.log(surgery);
    surgery.addEventListener('change', function () {
        var div = document.getElementById('surgery');
        if (this.checked) {
            var label = document.createElement("LABEL");
            label.for = "back_surgery_details"
            label.innerHTML = "Details of back Surgery"

            var surgery_exp_area = document.createElement("TEXTAREA");
            surgery_exp_area.name = "back_surgery_details"
            surgery_exp_area.cols = '90'
            surgery_exp_area.rows = '10'

            div.appendChild(label)
            div.appendChild(document.createElement("BR"))
            div.appendChild(surgery_exp_area)
            div.appendChild(document.createElement("BR"))
        } else {
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }
        }
    })
});

document.addEventListener("DOMContentLoaded", function (event) {

    const radios = document.querySelectorAll('input[name="SurgeryOne"]');
    for (const radio of radios) {
        var count = true;
        console.log(count)
        radio.onclick = (e) => {
            console.log(e.target.value);
            var ans = e.target.value;
            var div = document.getElementById('Surgery1');
            console.log(count)
            if (ans == 'Yes') {
                if (count == true) {
                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_details";
                    label.innerHTML = "Please provide name/type of surgery*";
                    var surgery_detail_area = document.createElement("TEXTAREA");
                    surgery_detail_area.name = "back_surgery_type";
                    surgery_detail_area.cols = '90';
                    surgery_detail_area.rows = '10';
                    div.appendChild(label);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(surgery_detail_area);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(document.createElement("BR"));

                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_date";
                    label.innerHTML = "Date of Surgery*";
                    var back_surgery_date = document.createElement("TEXTAREA");
                    back_surgery_date.name = "back_surgery_date";
                    back_surgery_date.placeholder = 'Please provide month and year';
                    back_surgery_date.cols = '90';
                    back_surgery_date.rows = '10';
                    div.appendChild(label);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(back_surgery_date);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(document.createElement("BR"));

                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_Scars";
                    label.innerHTML = "Please provide how many scars:*";
                    var back_surgery_Scars = document.createElement("TEXTarea");
                    back_surgery_Scars.name = "back_surgery_scars";
                    back_surgery_Scars.placeholder = 'Please enter a number from 0 to 1000.';
                    back_surgery_Scars.cols = '90';
                    back_surgery_Scars.rows = '10';
                    div.appendChild(label);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(back_surgery_Scars);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(document.createElement("BR"));

                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_Scar_locate";
                    label.innerHTML = "Please provide the specific locations of scars*";
                    var back_surgery_Scar_locate = document.createElement("textarea");
                    back_surgery_Scar_locate.name = "back_surgery_Scar_locate";
                    back_surgery_Scar_locate.cols = '90';
                    back_surgery_Scar_locate.rows = '10';
                    div.appendChild(label);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(back_surgery_Scar_locate);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(document.createElement("BR"));

                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_Scar_size";
                    label.innerHTML = "Please provide the size of scars _____cm x _____cm*";
                    var back_surgery_Scar_size = document.createElement("textarea");
                    back_surgery_Scar_size.name = "back_surgery_Scar_size";
                    back_surgery_Scar_size.cols = '90';
                    back_surgery_Scar_size.rows = '10';
                    div.appendChild(label);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(back_surgery_Scar_size);
                    div.appendChild(document.createElement("BR"));
                    div.appendChild(document.createElement("BR"));
                }
                count = false;
                console.log(count);

            } else {
                while (div.firstChild) {
                    div.removeChild(div.firstChild)
                }//prevents from producing more fields when button is selected.
                if (ans == 'No') {
                    count = true;
                }

            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function (event) {

    const radios = document.querySelectorAll('select[id="use-assist-device"]');
    for (const radio of radios) {
        var count = true;
        console.log(count)
        radio.onclick = (e) => {
            console.log(e.target.value);
            var ans = e.target.value;
            var div = document.getElementById('assist-device');

            console.log(count)

            if (ans == 'true') {
                if (count == true) {
                    //list of assisted devices
                    const ad = ['Back Brace', 'Cane', 'Walker', 'Other'];
                    const ad2 = ['backbrace', 'bane', 'walker', 'other'];


                    for (var i = 0; i < 4; i++) {
                        var checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.id = ad2[i];
                        checkbox.name = ad2[i];
                        checkbox.value = ad[i];

                        var label = document.createElement('label')
                        label.htmlFor = ad[i];
                        label.appendChild(document.createTextNode(ad[i]));

                        div.appendChild(document.createElement("BR"));
                        div.appendChild(checkbox);
                        div.appendChild(label);
                        div.appendChild(document.createElement("BR"));
                    }

                }
                count = false;
                console.log(count);

            } else {
                while (div.firstChild) {
                    div.removeChild(div.firstChild)
                }//prevents from producing more fields when button is selected.
                if (ans == 'No') {
                    count = true;
                }
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    var mildSymptoms = document.querySelector('input[name=mild-symptoms]');
    console.log(mildSymptoms);
    mildSymptoms.addEventListener('change', function () {
        var div = document.getElementById('mildSymptoms');
        if (this.checked) {
            const ad = ['Left Leg', 'Right Leg', 'Both Legs'];
            const ad2 = ['mild_left_leg', 'mild_right_leg', 'mild_both_legs'];
            for (var i = 0; i < ad.length; i++) {
                var checkbox = document.createElement('input');
                checkbox.type = 'radio';
                checkbox.id = ad2[i];
                checkbox.name = ad2[i];
                checkbox.value = ad[i];

                var label = document.createElement('label')
                label.htmlFor = ad[i];
                label.appendChild(document.createTextNode(ad[i]));

                div.appendChild(document.createElement("BR"));
                div.appendChild(checkbox);
                div.appendChild(label);
                div.appendChild(document.createElement("BR"));
            }
            document.getElementById('no-Symptoms').style.display = "none";
        } else {
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }
            document.getElementById('no-Symptoms').style.display = "";
        }
    })
});

document.addEventListener("DOMContentLoaded", function (event) {
    var mod_symptoms = document.querySelector('input[name=moderate-symptoms]');
    console.log(mod_symptoms);
    mod_symptoms.addEventListener('change', function () {
        var div = document.getElementById('moderateSymptoms');
        if (this.checked) {
            const ad = ['Left Leg', 'Right Leg', 'Both Legs'];
            const ad2 = ['mod_left_leg', 'mod_right_leg', 'mod_both_legs'];
            for (var i = 0; i < ad.length; i++) {
                var checkbox = document.createElement('input');
                checkbox.type = 'radio';
                checkbox.id = ad2[i];
                checkbox.name = ad2[i];
                checkbox.value = ad[i];
                var label = document.createElement('label')
                label.htmlFor = ad[i];
                label.appendChild(document.createTextNode(ad[i]));
                div.appendChild(document.createElement("BR"));
                div.appendChild(checkbox);
                div.appendChild(label);
                div.appendChild(document.createElement("BR"));


            } document.getElementById('no-Symptoms').style.display = "none";
            document.getElementById("no-symptoms").checked = false; // Check



        } else {
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }
            document.getElementById('no-Symptoms').style.display = "";
        }
    })
});
