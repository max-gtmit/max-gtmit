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
    element = document.getElementById("progress")
    let div = document.createElement("DIV")
    element.appendChild(div)
    div.setAttribute('class', "alert alert-success")
    div.setAttribute('role', "alert")
    div.setAttribute('style', 'padding-bottom: 1%')
    div.setAttribute('id','progress-div')
    div.innerHTML="Progress saved"
    setTimeout(function () {
        document.getElementById('progress-div').remove();
    }, 2500);
}

function getdata(){
    let arr = [];
    let bi_obj = {};
        //set up variable of elements that are always present   
        function backIssues (obj){
            let back_issues = [];
            let back_issues2 = [];
            let back_issues3 = [];
            
            
            back_issues.push(muscle_spasms = document.getElementsByName("muscle_spasms")[0].value);
            back_issues.push(interferences_standing =  document.getElementsByName("interferences_standing")[0].value);
            back_issues.push(swelling = document.getElementsByName("swelling")[0].value);
            back_issues.push(pain_on_movement = document.getElementsByName("pain_on_movement")[0].value);
            back_issues.push(weakened_movement = document.getElementsByName("weakened_movement")[0].value);
            back_issues.push(more_movement = document.getElementsByName("more_movement")[0].value);
            back_issues.push(guarding = document.getElementsByName("guarding")[0].value);
            back_issues.push(easily_fatigued = document.getElementsByName("easily_fatigued")[0].value);
            back_issues.push(affects_walking = document.getElementsByName("affects_walking")[0].value);
            back_issues.push(less_movement = document.getElementsByName("less_movement")[0].value);
            back_issues.push(history_surgery = document.getElementsByName("history_surgery")[0].value);
            back_issues.push(SurgeryOne = document.getElementById('SurgeryOne').value)
           
            back_issues.push( document.getElementById("dominant-hand-lt").value);
            back_issues.push( document.getElementById("dominant-hand-rt").value);
            back_issues.push( document.getElementById("dominant-hand-amb").value);
            
            back_issues2.push(history_of_back_condition = document.getElementsByName("history_of_back_condition")[0].name);
            back_issues2.push(condition_affects_rom = document.getElementsByName("condition_affects_rom")[0].name);
            back_issues2.push(condition_ability_to_work = document.getElementsByName("condition_ability_to_work")[0].name);

            back_issues3.push(document.getElementsByName('Initial-forward-flexion')[0].name)
            back_issues3.push(document.getElementsByName('time-forward-flexion')[0].name)
            back_issues3.push(document.getElementsByName('flareup-forward-flexion')[0].name)
            back_issues3.push(document.getElementsByName('initial-extension')[0].name)
            back_issues3.push(document.getElementsByName('overtime-extension')[0].name)
            back_issues3.push(document.getElementsByName('flareup-extension')[0].name)
            back_issues3.push(document.getElementsByName('initial-lateral-extension')[0].name)
            back_issues3.push(document.getElementsByName('overtime-lateral-extension')[0].name)
            back_issues3.push(document.getElementsByName('flareup-lateral-extension')[0].name)
            back_issues3.push(document.getElementsByName('initial-lateral-rotation')[0].name)
            back_issues3.push(document.getElementsByName('overtime-lateral-rotation')[0].name)
            back_issues3.push(document.getElementsByName('flareup-lateral-rotation')[0].name)
            back_issues3.push(document.getElementsByName('flareup-lateral-rotation')[0].name)
            back_issues3.push(document.getElementsByName('use-assist-device')[0].name)
            
            try {
                back_issues2.push(history_surgery_details = document.getElementsByName("history_surgery_details")[0].name)
            } catch (error) {
                console.log(error)
            }
            
            try {                 
                back_issues2.push(back_surgery_type = document.getElementsByName("back_surgery_type")[0].name)
                back_issues2.push(back_surgery_date = document.getElementsByName("back_surgery_date")[0].name)
                back_issues2.push(back_surgery_scars = document.getElementsByName("back_surgery_scars")[0].name)
                back_issues2.push(back_surgery_Scar_locate = document.getElementsByName("back_surgery_Scar_locate")[0].name)
                back_issues2.push(back_surgery_Scar_size = document.getElementsByName("back_surgery_Scar_sizes")[0].name)
    
            } catch (error) {
                console.log(error)
                console.log("Error: for Scar Conditions")
            }

            try {
                back_issues.push(back_brace = document.getElementsByName("backbrace")[0].value)
                back_issues.push(back_brace = document.getElementsByName("walker")[0].value)
                back_issues.push(back_brace = document.getElementsByName("cane")[0].value)
                back_issues.push(back_brace = document.getElementsByName("other")[0].value)
 
                 } 
                catch (error) {
                console.log(error)
                console.log("Error:for Assisted Devices")
                }
    
            try {
                back_issues.push(mild_symptoms = document.getElementsByName("mild-symptoms")[0].value)
                back_issues.push(document.getElementById("mild_left_leg").value)
                back_issues.push(document.getElementById("mild_right_leg").value)
                back_issues.push(document.getElementById("mild_both_legs").value)
            } catch (error) {
                console.log("mild-symptoms");
                console.log(error)
            }

            try {
                back_issues.push(mild_symptoms = document.getElementsByName("moderate-symptoms")[0].value)
                back_issues.push(document.getElementById("mod_left_leg").value)
                back_issues.push(document.getElementById("mod_right_leg").value)
                back_issues.push(document.getElementById("mod_both_legs").value)
            } catch (error) {
                console.log("mod-symptoms");
                console.log(error)
            }
            back_issues.push(document.getElementsByName('no-symptoms')[0].name)

/*******************************************/
            console.log("back_issues array one")
            console.table(back_issues)
            console.log("back_issues array two")
            console.table(back_issues2)
            console.log("back_issues array three")
            console.table(back_issues3)
           /*******************************************/ 
            for (let bi in back_issues){
                try {
                    if(document.getElementById(`${back_issues[bi]}`).checked){
                        obj[back_issues[bi]] = true;
                    }
                }//try
                catch (error) {
                console.log(error)
                }
            }
            for (let bi in back_issues2){
                try {
                    if(document.getElementById(`${back_issues2[bi]}`).value != 'select' && document.getElementById(`${back_issues2[bi]}`).value ){
                        obj[back_issues2[bi]] = document.getElementById(`${back_issues2[bi]}`).value;
                    }
                }//try
                catch (error) {
                console.log(error)
                }
            }

            for (let bi in back_issues3){
                try {
                    if(document.getElementById(`${back_issues3[bi]}`).value != 'select'){
                        obj[back_issues3[bi]] = document.getElementById(`${back_issues3[bi]}`).value;
                    }
                }//try
                catch (error) {
                console.log(error)
                }
            }   
            
             return obj;
        }
        let results = backIssues(bi_obj);
        console.log("Final OBject")
        console.table(results)
/*******************************************/
        //add (push) them to array if they have a value
        
        //if the elemnt is empty do not add it to the array 
        
return results;
}



$(document).ready(function () {
    var csrf = $("input[name=csrfmiddlewaretoken]").val();
    var sp_btn = document.querySelector('[id=myBtn]');
    
    sp_btn.addEventListener('click', function () {
        saveprogress()
        console.log(sp_btn);
        //call the functiuo
        let arr_res=getdata();
        console.table(arr_res)
        //iterate to get keys and map them to values
        //↑ you use it as data
        $.ajax({
            url:'',
            type:'post',
            data:{
                csrfmiddlewaretoken: csrf,
               ...arr_res
            }
        });

    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var surgery = document.querySelector('input[name=history_surgery]');

    surgery.addEventListener('change', function () {
        var div = document.getElementById('surgery');
        if (this.checked) {
            var label = document.createElement("LABEL");
            label.for = "history_surgery_details"
            label.innerHTML = "Details of back Surgery"

            var surgery_exp_area = document.createElement("TEXTAREA");
            surgery_exp_area.name = "history_surgery_details"
            surgery_exp_area.id = "history_surgery_details"
            surgery_exp_area.cols = '90'
            surgery_exp_area.rows = '10'

            div.appendChild(label)
            div.appendChild(document.createElement("BR"))
            div.appendChild(surgery_exp_area)
            div.appendChild(document.createElement("BR"))
        } else {
            while (div.firstChild) {
                div.removeChild(div.firstChild)
                document.getElementById("surgery").checked = false;
            }
        }
    })
});

document.addEventListener("DOMContentLoaded", function (event) {

    const radios = document.querySelectorAll('input[name="SurgeryOne"]');
    for (const radio of radios) {
        var count = true;
        radio.onclick = (e) => {
            console.log(e.target.value);
            var ans = e.target.value;
            var div = document.getElementById('Surgery1');
            console.log(count)
            if (ans == 'Yes') {
                if (count == true) {
                    var label = document.createElement("LABEL");
                    label.for = "back_surgery_type";
                    label.innerHTML = "Please provide name/type of surgery*";
                    var surgery_detail_area = document.createElement("TEXTAREA");
                    surgery_detail_area.name = "back_surgery_type";
                    surgery_detail_area.id = "back_surgery_type";
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
                    back_surgery_date.id = "back_surgery_date";
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
                    back_surgery_Scars.id = "back_surgery_scars";
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
                    back_surgery_Scar_locate.id = "back_surgery_Scar_locate";
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
                    back_surgery_Scar_size.id = "back_surgery_Scar_size";
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
        radio.onclick = (e) => {
            var ans = e.target.value;
            var div = document.getElementById('assist-device');

            if (ans == 'Occassionally' || ans =='Frequently' || ans =='Perpetually' ) {
                if (count == true) {
                    //list of assisted devices
                    const ad = ['Back Brace', 'Cane', 'Walker', 'Other'];
                    const ad2 = ['backbrace', 'cane', 'walker', 'other'];

                    for (var i = 0; i < ad2.length; i++) {
                        var checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.id = ad2[i];
                        checkbox.name = ad2[i];
                        checkbox.value = ad2[i];

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

            } else {
                while (div.firstChild) {
                    div2.removeChild(div2.firstChild)
                    ans = false;
                }//prevents from producing more fields when button is selected.
                if (ans == 'false') {
                    count = true;
                    ans = true
                }
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    var mildSymptoms = document.querySelector('input[name=mild-symptoms]');
        mildSymptoms.addEventListener('change', function () {
            var div2 = document.getElementById('mildSymptoms2');
            let div = document.createElement('div');
        if (this.checked) {
            const ad = ['Left Leg', 'Right Leg', 'Both Legs'];
            const ad2 = ['mild_left_leg', 'mild_right_leg', 'mild_both_legs'];
            for (var i = 0; i < ad.length; i++) {
                var checkbox = document.createElement('input');
                checkbox.type = 'radio';
                checkbox.id = ad2[i];
                checkbox.name = 'mildS';
                checkbox.value = ad2[i];
                div.id = 'mildSymptoms';
                var label = document.createElement('label')
                label.htmlFor = ad[i];
                label.appendChild(document.createTextNode(ad[i]));

                div.appendChild(document.createElement("BR"));
                div.appendChild(checkbox);
                div.appendChild(label);
                div.appendChild(document.createElement("BR"));
                div2.appendChild(div);
            }
        
            document.getElementById('no-Symptoms').style.display = "none";
        
        } else {
            while (div2.firstChild) {
                div2.removeChild(div2.firstChild)
            }
            document.getElementById('no-Symptoms').style.display = "";
        }
    })
    var mod_symptoms = document.querySelector('input[name=moderate-symptoms]');
        mod_symptoms.addEventListener('change', function () {
       var div2 = document.getElementById('moderateSymptoms2');
        let div = document.createElement('div');
        if (this.checked) {
            const ad = ['Left Leg', 'Right Leg', 'Both Legs'];
            const ad2 = ['mod_left_leg', 'mod_right_leg', 'mod_both_legs'];
            for (var i = 0; i < ad.length; i++) {
                var checkbox = document.createElement('input');
                checkbox.type = 'radio';
                checkbox.id = ad2[i];
                checkbox.name = 'modS';
                checkbox.value = ad2[i];
                div.id = 'moderateSymptoms';
                var label = document.createElement('label')
                label.htmlFor = ad[i];
                label.appendChild(document.createTextNode(ad[i]));
                div.appendChild(document.createElement("BR"));
                div.appendChild(checkbox);
                div.appendChild(label);
                div.appendChild(document.createElement("BR"));
                div2.appendChild(div);
            } 
            document.getElementById('no-Symptoms').style.display = "none";
        }else if(this.checked ==  false){
            while (div2.firstChild) {
                div2.removeChild(div2.firstChild)
            }
        } 
        else {
            while (div2.firstChild) {
                div2.removeChild(div2.firstChild)
            }
            document.getElementById('no-Symptoms').style.display = "";
        }
    })

    var no_symptoms = document.querySelector('input[name=no-symptoms]');
    no_symptoms.addEventListener('change', function () {
        if(this.checked){
            
            var mildS = document.getElementsByName("mildS");
            for(var i=0;i<mildS.length;i++){
                let radio = mildS[i];
                  var parentRadio = radio.parentNode;
                  parentRadio.parentNode.remove(parentRadio);
            }
            var modS = document.getElementsByName("modS");
            for(var i=0;i<modS.length;i++){
                let radio = modS[i];
                console.log(radio)
              
                    var parentRadio = radio.parentNode;
                    console.log(parentRadio)
                    parentRadio.parentNode.removeChild(parentRadio);
                  
            }

            document.getElementById('mild-Sym').style.display = "none";
            document.getElementById("mild-symptoms").checked = false;
            document.getElementById('mod-Sym').style.display = "none";
            document.getElementById("moderate-symptoms").checked = false;
            //$('input[name=mildS]').attr('checked',false);
           // $('input[name=modS]').attr('checked',false);
        }
        else{
            document.getElementById('mild-Sym').style.display = "";
            document.getElementById('mod-Sym').style.display = "";
        }
    })

});

document.addEventListener("DOMContentLoaded", function (event) {
    
});