// $( document ).ready(function() {
//     $(".knopka").click(
//         function(){
//             sendAjaxForm( 'ajax_form', 'YOUR URL PHP');
//             return false; 
//         }
//     );
// });
 
// function sendAjaxForm( ajax_form, url) {
//     $.ajax({
//         url:     url, //url 
//         type:     "POST", 
//         dataType: "html",
//         data: $("#"+ajax_form).serialize(),  
//         success: function(response) { 
//             result = $.parseJSON(response);
//             alert('ok');
//         },
//         error: function(response) {
//             alert('error');
//         }
//      });
// }

function check(){
    $('input[id="1.yes"]').on( "click", function() {
        $('input[id="1.no"]').prop("checked", false);
        
      });
      $( 'input[id="1.no"]').on( "click", function() {
        $('input[id="1.yes"]').prop("checked", false);
        
      });

     

      $('input[id="6.yes"]').on( "click", function() {
        $('input[id="6.no"]').prop("checked", false);
        
      });
      $( 'input[id="6.no"]').on( "click", function() {
        $('input[id="6.yes"]').prop("checked", false);
        
      });
      $('input[id="5.localized"]').on( "click", function() {
        $('input[id="5.both"]').prop("checked", false);
        
      });
      $( 'input[id="5.both"]').on( "click", function() {
        $('input[id="5.localized"]').prop("checked", false);
        
      });
      

      $('input[id="work-related"]').on( "click", function() {
        $('input[id="concentration"]').prop("disabled", false);
        $('input[id="productivity"]').prop("disabled", false);
        $('input[id="finish_work_day"]').prop("disabled", false);
        
      });
      $('input[id="work-related"]:checked').on( "click", function() {
        $('input[id="concentration"]').prop("disabled", true);
        $('input[id="concentration"]').prop("checked", false);
        $('input[id="productivity"]').prop("disabled", true);
        $('input[id="productivity"]').prop("checked", false);
        $('input[id="finish_work_day"]').prop("disabled", true);
        $('input[id="finish_work_day"]').prop("checked", false);
      });


      $('input[id="other2"]').on( "click", function() {
        $('input[id="2other2"]').prop("disabled", false);
        
      });
      $('input[id="other2"]:checked').on( "click", function() {
        $('input[id="2other2"]').prop("disabled", true);
        $('input[id="2other2"]').val('');
        
      });
      $('input[id="4.yes"]').on( "click", function() {
        $('input[id="4.no"]').prop("checked", false);

        $('input[id="acetaminophen"]').prop("disabled", false);
        $('input[id="aspirin"]').prop("disabled", false);
        $('input[id="ibuprofen"]').prop("disabled", false);
        $('input[id="excedrin"]').prop("disabled", false);
        $('input[id="4.other"]').prop("disabled", false);
        
      });
      $('input[id="4.yes"]:checked').on( "click", function() {
        $('input[id="4_2other"]').prop("disabled", true);
        $('input[id="4_2other"]').val('');
        $('input[id="2other2"]').prop("disabled", true);
        $('input[id="2other2"]').val('');
        $('input[id="acetaminophen"]').prop("disabled", true);
        $('input[id="aspirin"]').prop("disabled", true);
        $('input[id="ibuprofen"]').prop("disabled", true);
        $('input[id="excedrin"]').prop("disabled", true);
        $('input[id="4.other"]').prop("disabled", true);
        $('input[id="acetaminophen"]').prop("checked", false);
        $('input[id="aspirin"]').prop("checked", false);
        $('input[id="ibuprofen"]').prop("checked", false);
        $('input[id="excedrin"]').prop("checked", false);
        $('input[id="4.other"]').prop("checked", false);
        
      });
      $( 'input[id="4.no"]').on( "click", function() {
        $('input[id="4.yes"]').prop("checked", false);
        $('input[id="4_2other"]').prop("disabled", true);
        $('input[id="4_2other"]').val('');
        $('input[id="acetaminophen"]').prop("disabled", true);
        $('input[id="aspirin"]').prop("disabled", true);
        $('input[id="ibuprofen"]').prop("disabled", true);
        $('input[id="excedrin"]').prop("disabled", true);
        $('input[id="4.other"]').prop("disabled", true);
        $('input[id="acetaminophen"]').prop("checked", false);
        $('input[id="aspirin"]').prop("checked", false);
        $('input[id="ibuprofen"]').prop("checked", false);
        $('input[id="excedrin"]').prop("checked", false);
        $('input[id="4.other"]').prop("checked", false);
        
      });
      


      $('input[id="9.yes"]').on( "click", function() {
        $('input[id="9.no"]').prop("checked", false);

        $('input[id="every_3"]').prop("disabled", false);
        $('input[id="averaging_one_in_2"]').prop("disabled", false);
        $('input[id="averaging_once_month"]').prop("disabled", false);
        $('input[id="9.1.yes"]').prop("disabled", false);
        $('input[id="9.1.no"]').prop("disabled", false);
        
      });
      $('input[id="9.yes"]:checked').on( "click", function() {
        $('input[id="9.1.yes"]').prop("disabled", true);
        $('input[id="9.1.no"]').prop("disabled", true);
        $('input[id="9.1.yes"]').prop("checked", false);
        $('input[id="9.1.no"]').prop("checked", false);

        
        $('input[id="every_3"]').prop("disabled", true);
        $('input[id="averaging_one_in_2"]').prop("disabled", true);
        $('input[id="averaging_once_month"]').prop("disabled", true);
        $('input[id="every_3"]').prop("checked", false);
        $('input[id="averaging_one_in_2"]').prop("checked", false);
        $('input[id="averaging_once_month"]').prop("checked", false);
        $('input[id="negative_financial"]').prop("disabled", true);
        $('input[id="interfere_employment"]').prop("disabled", true);
        $('input[id="work-related"]').prop("disabled", true);
        $('input[id="bed"]').prop("disabled", true);
        $('input[id="financial_loss"]').prop("disabled", true);
        $('input[id="negative_financial"]').prop("checked", false);
        $('input[id="interfere_employment"]').prop("checked", false);
        $('input[id="work-related"]').prop("checked", false);
        $('input[id="bed"]').prop("checked", false);
        $('input[id="financial_loss"]').prop("checked", false);

        $('input[id="concentration"]').prop("disabled", true);
        $('input[id="productivity"]').prop("disabled", true);
        $('input[id="finish_work_day"]').prop("disabled", true);
        $('input[id="concentration"]').prop("checked", false);
        $('input[id="productivity"]').prop("checked", false);
        $('input[id="finish_work_day"]').prop("checked", false);
        
        
      });
      $( 'input[id="9.no"]').on( "click", function() {
        $('input[id="9.1.yes"]').prop("disabled", true);
        $('input[id="9.1.no"]').prop("disabled", true);
        $('input[id="9.1.yes"]').prop("checked", false);
        $('input[id="9.1.no"]').prop("checked", false);
        $('input[id="every_3"]').prop("disabled", true);
        $('input[id="averaging_one_in_2"]').prop("disabled", true);
        $('input[id="averaging_once_month"]').prop("disabled", true);
        $('input[id="every_3"]').prop("checked", false);
        $('input[id="averaging_one_in_2"]').prop("checked", false);
        $('input[id="averaging_once_month"]').prop("checked", false);
        $('input[id="negative_financial"]').prop("disabled", true);
        $('input[id="interfere_employment"]').prop("disabled", true);
        $('input[id="work-related"]').prop("disabled", true);
        $('input[id="bed"]').prop("disabled", true);
        $('input[id="financial_loss"]').prop("disabled", true);
        $('input[id="negative_financial"]').prop("checked", false);
        $('input[id="interfere_employment"]').prop("checked", false);
        $('input[id="work-related"]').prop("checked", false);
        $('input[id="bed"]').prop("checked", false);
        $('input[id="financial_loss"]').prop("checked", false);

        $('input[id="concentration"]').prop("disabled", true);
        $('input[id="productivity"]').prop("disabled", true);
        $('input[id="finish_work_day"]').prop("disabled", true);
        $('input[id="concentration"]').prop("checked", false);
        $('input[id="productivity"]').prop("checked", false);
        $('input[id="finish_work_day"]').prop("checked", false);
        
      });


      $('input[id="9.1.yes"]').on( "click", function() {
        $('input[id="9.1.no"]').prop("checked", false);

        $('input[id="negative_financial"]').prop("disabled", false);
        $('input[id="interfere_employment"]').prop("disabled", false);
        $('input[id="work-related"]').prop("disabled", false);
        $('input[id="bed"]').prop("disabled", false);
        $('input[id="financial_loss"]').prop("disabled", false);
        
      });
      $('input[id="9.1.yes"]:checked').on( "click", function() {
        

        $('input[id="negative_financial"]').prop("disabled", true);
        $('input[id="interfere_employment"]').prop("disabled", true);
        $('input[id="work-related"]').prop("disabled", true);
        $('input[id="bed"]').prop("disabled", true);
        $('input[id="financial_loss"]').prop("disabled", true);
        $('input[id="negative_financial"]').prop("checked", false);
        $('input[id="interfere_employment"]').prop("checked", false);
        $('input[id="work-related"]').prop("checked", false);
        $('input[id="bed"]').prop("checked", false);
        $('input[id="financial_loss"]').prop("checked", false);

        $('input[id="concentration"]').prop("disabled", true);
        $('input[id="productivity"]').prop("disabled", true);
        $('input[id="finish_work_day"]').prop("disabled", true);
        $('input[id="concentration"]').prop("checked", false);
        $('input[id="productivity"]').prop("checked", false);
        $('input[id="finish_work_day"]').prop("checked", false);

        
      });
      $( 'input[id="9.1.no"]').on( "click", function() {
        $('input[id="9.1.yes"]').prop("checked", false);

        $('input[id="negative_financial"]').prop("disabled", true);
        $('input[id="interfere_employment"]').prop("disabled", true);
        $('input[id="work-related"]').prop("disabled", true);
        $('input[id="bed"]').prop("disabled", true);
        $('input[id="financial_loss"]').prop("disabled", true);
        $('input[id="negative_financial"]').prop("checked", false);
        $('input[id="interfere_employment"]').prop("checked", false);
        $('input[id="work-related"]').prop("checked", false);
        $('input[id="bed"]').prop("checked", false);
        $('input[id="financial_loss"]').prop("checked", false);

        $('input[id="concentration"]').prop("disabled", true);
        $('input[id="productivity"]').prop("disabled", true);
        $('input[id="finish_work_day"]').prop("disabled", true);
        $('input[id="concentration"]').prop("checked", false);
        $('input[id="productivity"]').prop("checked", false);
        $('input[id="finish_work_day"]').prop("checked", false);
        
      });
      $('input[id="symptoms_include"]').on( "click", function() {
        $('input[id="5.no"]').prop("checked", false);

        $('input[id="nausea"]').prop("disabled", false);
        $('input[id="regurgitation"]').prop("disabled", false);
        $('input[id="prolonged_discomfort"]').prop("disabled", false);
        
        
      });
      $('input[id="symptoms_include"]:checked').on( "click", function() {
        $('input[id="5.no"]').prop("checked", false);

        $('input[id="nausea"]').prop("disabled", true);
        $('input[id="regurgitation"]').prop("disabled", true);
        $('input[id="prolonged_discomfort"]').prop("disabled", true);
        $('input[id="nausea"]').prop("checked", false);
        $('input[id="regurgitation"]').prop("checked", false);
        $('input[id="prolonged_discomfort"]').prop("checked", false);
        
      });

      $('input[id="1.1"]').on( "click", function() {
        
        $('input[id="1.3"]').prop("checked", false);
        $('input[id="1.2"]').prop("checked", false);
        $('input[id="1.4"]').prop("checked", false);
      });
      $('input[id="1.2"]').on( "click", function() {
        
        $('input[id="1.3"]').prop("checked", false);
        $('input[id="1.1"]').prop("checked", false);
        $('input[id="1.4"]').prop("checked", false);
      });
      $('input[id="1.3"]').on( "click", function() {
        
        $('input[id="1.2"]').prop("checked", false);
        $('input[id="1.1"]').prop("checked", false);
        $('input[id="1.4"]').prop("checked", false);
      });
      $('input[id="1.4"]').on( "click", function() {
        
        $('input[id="1.3"]').prop("checked", false);
        $('input[id="1.1"]').prop("checked", false);
        $('input[id="1.2"]').prop("checked", false);
      });
      $('input[id="2.1"]').on( "click", function() {
        
        $('input[id="2.3"]').prop("checked", false);
        $('input[id="2.2"]').prop("checked", false);
        $('input[id="2.4"]').prop("checked", false);
      });
      $('input[id="2.2"]').on( "click", function() {
        
        $('input[id="2.3"]').prop("checked", false);
        $('input[id="2.1"]').prop("checked", false);
        $('input[id="2.4"]').prop("checked", false);
      });
      $('input[id="2.3"]').on( "click", function() {
        
        $('input[id="2.2"]').prop("checked", false);
        $('input[id="2.1"]').prop("checked", false);
        $('input[id="2.4"]').prop("checked", false);
      });
      $('input[id="2.4"]').on( "click", function() {
        
        $('input[id="2.3"]').prop("checked", false);
        $('input[id="2.1"]').prop("checked", false);
        $('input[id="2.2"]').prop("checked", false);
      });
      $('input[id="3.1"]').on( "click", function() {
        
        $('input[id="3.3"]').prop("checked", false);
        $('input[id="3.2"]').prop("checked", false);
        $('input[id="3.4"]').prop("checked", false);
      });
      $('input[id="3.2"]').on( "click", function() {
        
        $('input[id="1.3"]').prop("checked", false);
        $('input[id="3.1"]').prop("checked", false);
        $('input[id="1.4"]').prop("checked", false);
      });
      $('input[id="3.3"]').on( "click", function() {
        
        $('input[id="3.2"]').prop("checked", false);
        $('input[id="3.1"]').prop("checked", false);
        $('input[id="3.4"]').prop("checked", false);
      });
      $('input[id="3.4"]').on( "click", function() {
        
        $('input[id="3.3"]').prop("checked", false);
        $('input[id="3.1"]').prop("checked", false);
        $('input[id="3.2"]').prop("checked", false);
      });
      $('input[id="4.1"]').on( "click", function() {
        
        $('input[id="4.3"]').prop("checked", false);
        $('input[id="4.2"]').prop("checked", false);
        $('input[id="4.4"]').prop("checked", false);
      });
      $('input[id="4.2"]').on( "click", function() {
        
        $('input[id="4.3"]').prop("checked", false);
        $('input[id="4.1"]').prop("checked", false);
        $('input[id="4.4"]').prop("checked", false);
      });
      $('input[id="4.3"]').on( "click", function() {
        
        $('input[id="4.2"]').prop("checked", false);
        $('input[id="4.1"]').prop("checked", false);
        $('input[id="4.4"]').prop("checked", false);
      });
      $('input[id="4.4"]').on( "click", function() {
        
        $('input[id="4.3"]').prop("checked", false);
        $('input[id="4.1"]').prop("checked", false);
        $('input[id="4.2"]').prop("checked", false);
      });
      $('input[id="5.1"]').on( "click", function() {
        
        $('input[id="5.3"]').prop("checked", false);
        $('input[id="5.2"]').prop("checked", false);
        $('input[id="5.4"]').prop("checked", false);
      });
      $('input[id="5.2"]').on( "click", function() {
        
        $('input[id="5.3"]').prop("checked", false);
        $('input[id="5.1"]').prop("checked", false);
        $('input[id="5.4"]').prop("checked", false);
      });
      $('input[id="5.3"]').on( "click", function() {
        
        $('input[id="5.2"]').prop("checked", false);
        $('input[id="5.1"]').prop("checked", false);
        $('input[id="5.4"]').prop("checked", false);
      });
      $('input[id="5.4"]').on( "click", function() {
        
        $('input[id="5.3"]').prop("checked", false);
        $('input[id="5.1"]').prop("checked", false);
        $('input[id="5.2"]').prop("checked", false);
      });



      $('input[id="1.l_1"]').on( "click", function() {
        
        $('input[id="1.19"]').prop("checked", false);
        $('input[id="1.10_more"]').prop("checked", false);
       
      });
      $('input[id="1.19"]').on( "click", function() {
        
        $('input[id="1.l_1"]').prop("checked", false);
        $('input[id="1.10_more"]').prop("checked", false);
       
      });
      $('input[id="1.10_more"]').on( "click", function() {
        
        $('input[id="1.19"]').prop("checked", false);
        $('input[id="1.l_1"]').prop("checked", false);
        
      });

      $('input[id="2.l_1"]').on( "click", function() {
        
        $('input[id="2.19"]').prop("checked", false);
        $('input[id="2.10_more"]').prop("checked", false);
       
      });
      $('input[id="2.19"]').on( "click", function() {
        
        $('input[id="2.l_1"]').prop("checked", false);
        $('input[id="2.10_more"]').prop("checked", false);
       
      });
      $('input[id="2.10_more"]').on( "click", function() {
        
        $('input[id="2.19"]').prop("checked", false);
        $('input[id="2.l_1"]').prop("checked", false);
        
      });

      $('input[id="3.l_1"]').on( "click", function() {
        
        $('input[id="3.10_more"]').prop("checked", false);
        $('input[id="3.19"]').prop("checked", false);
       
      });
      $('input[id="3.19"]').on( "click", function() {
        
        $('input[id="3.10_more"]').prop("checked", false);
        $('input[id="3.l_1"]').prop("checked", false);
       
      });
      $('input[id="3.10_more"]').on( "click", function() {
        
        $('input[id="3.19"]').prop("checked", false);
        $('input[id="3.l_1"]').prop("checked", false);
        
      });


      $('input[id="4.l_1"]').on( "click", function() {
        
        $('input[id="4.19"]').prop("checked", false);
        $('input[id="4.10_more"]').prop("checked", false);
       
      });
      $('input[id="4.19"]').on( "click", function() {
        
        $('input[id="4.10_more"]').prop("checked", false);
        $('input[id="4.l_1"]').prop("checked", false);
       
      });
      $('input[id="4.10_more"]').on( "click", function() {
        
        $('input[id="4.19"]').prop("checked", false);
        $('input[id="4.l_1"]').prop("checked", false);
        
      });
      $('input[id="5.l_1"]').on( "click", function() {
        
        $('input[id="5.19"]').prop("checked", false);
        $('input[id="5.10_more"]').prop("checked", false);
       
      });
      $('input[id="5.19"]').on( "click", function() {
        
        $('input[id="5.l_1"]').prop("checked", false);
        $('input[id="5.10_more"]').prop("checked", false);
       
      });
      $('input[id="5.10_more"]').on( "click", function() {
        
        $('input[id="5.19"]').prop("checked", false);
        $('input[id="5.l_1"]').prop("checked", false);
        
      });

      $('input[id="sleep"]').on( "click", function() {
        $('input[id="1.1"]').prop("disabled", false);
        $('input[id="1.2"]').prop("disabled", false);
        $('input[id="1.3"]').prop("disabled", false);
        $('input[id="1.4"]').prop("disabled", false);
        $('input[id="1.l_1"]').prop("disabled", false);
        $('input[id="1.19"]').prop("disabled", false);
        $('input[id="1.10_more"]').prop("disabled", false);
        
      });
      $('input[id="sleep"]:checked').on( "click", function() {
        $('input[id="1.1"]').prop("disabled", true);
        $('input[id="1.2"]').prop("disabled", true);
        $('input[id="1.3"]').prop("disabled", true);
        $('input[id="1.4"]').prop("disabled", true);
        $('input[id="1.l_1"]').prop("disabled", true);
        $('input[id="1.19"]').prop("disabled", true);
        $('input[id="1.10_more"]').prop("disabled", true);
        
        $('input[id="1.1"]').prop("checked", false);
        $('input[id="1.2"]').prop("checked", false);
        $('input[id="1.3"]').prop("checked", false);
        $('input[id="1.4"]').prop("checked", false);
        $('input[id="1.l_1"]').prop("checked", false);
        $('input[id="1.19"]').prop("checked", false);
        $('input[id="1.10_more"]').prop("checked", false);

      });

      $('input[id="Nausea"]').on( "click", function() {
        $('input[id="2.1"]').prop("disabled", false);
        $('input[id="2.2"]').prop("disabled", false);
        $('input[id="2.3"]').prop("disabled", false);
        $('input[id="2.4"]').prop("disabled", false);
        $('input[id="2.l_1"]').prop("disabled", false);
        $('input[id="2.19"]').prop("disabled", false);
        $('input[id="2.10_more"]').prop("disabled", false);
        
      });
      $('input[id="Nausea"]:checked').on( "click", function() {
        $('input[id="2.1"]').prop("disabled", true);
        $('input[id="2.2"]').prop("disabled", true);
        $('input[id="2.3"]').prop("disabled", true);
        $('input[id="2.4"]').prop("disabled", true);
        $('input[id="2.l_1"]').prop("disabled", true);
        $('input[id="2.19"]').prop("disabled", true);
        $('input[id="2.10_more"]').prop("disabled", true);
        
        $('input[id="2.1"]').prop("checked", false);
        $('input[id="2.2"]').prop("checked", false);
        $('input[id="2.3"]').prop("checked", false);
        $('input[id="2.4"]').prop("checked", false);
        $('input[id="2.l_1"]').prop("checked", false);
        $('input[id="2.19"]').prop("checked", false);
        $('input[id="2.10_more"]').prop("checked", false);

      });

      $('input[id="vomiting"]').on( "click", function() {
        $('input[id="3.1"]').prop("disabled", false);
        $('input[id="3.2"]').prop("disabled", false);
        $('input[id="3.3"]').prop("disabled", false);
        $('input[id="3.4"]').prop("disabled", false);
        $('input[id="3.l_1"]').prop("disabled", false);
        $('input[id="3.19"]').prop("disabled", false);
        $('input[id="3.10_more"]').prop("disabled", false);
        
      });
      $('input[id="vomiting"]:checked').on( "click", function() {
        $('input[id="3.1"]').prop("disabled", true);
        $('input[id="3.2"]').prop("disabled", true);
        $('input[id="3.3"]').prop("disabled", true);
        $('input[id="3.4"]').prop("disabled", true);
        $('input[id="3.l_1"]').prop("disabled", true);
        $('input[id="3.19"]').prop("disabled", true);
        $('input[id="3.10_more"]').prop("disabled", true);
        
        $('input[id="3.1"]').prop("checked", false);
        $('input[id="3.2"]').prop("checked", false);
        $('input[id="3.3"]').prop("checked", false);
        $('input[id="3.4"]').prop("checked", false);
        $('input[id="3.l_1"]').prop("checked", false);
        $('input[id="3.19"]').prop("checked", false);
        $('input[id="3.10_more"]').prop("checked", false);

      });

      $('input[id="hematemesis"]').on( "click", function() {
        $('input[id="4.1"]').prop("disabled", false);
        $('input[id="4.2"]').prop("disabled", false);
        $('input[id="4.3"]').prop("disabled", false);
        $('input[id="4.4"]').prop("disabled", false);
        $('input[id="4.l_1"]').prop("disabled", false);
        $('input[id="4.19"]').prop("disabled", false);
        $('input[id="4.10_more"]').prop("disabled", false);
        
      });
      $('input[id="hematemesis"]:checked').on( "click", function() {
        $('input[id="4.1"]').prop("disabled", true);
        $('input[id="4.2"]').prop("disabled", true);
        $('input[id="4.3"]').prop("disabled", true);
        $('input[id="4.4"]').prop("disabled", true);
        $('input[id="4.l_1"]').prop("disabled", true);
        $('input[id="4.19"]').prop("disabled", true);
        $('input[id="4.10_more"]').prop("disabled", true);
        
        $('input[id="4.1"]').prop("checked", false);
        $('input[id="4.2"]').prop("checked", false);
        $('input[id="4.3"]').prop("checked", false);
        $('input[id="4.4"]').prop("checked", false);
        $('input[id="4.l_1"]').prop("checked", false);
        $('input[id="4.19"]').prop("checked", false);
        $('input[id="4.10_more"]').prop("checked", false);

      });

      $('input[id="moderate_anemia"]').on( "click", function() {
        $('input[id="5.1"]').prop("disabled", false);
        $('input[id="5.2"]').prop("disabled", false);
        $('input[id="5.3"]').prop("disabled", false);
        $('input[id="5.4"]').prop("disabled", false);
        $('input[id="5.l_1"]').prop("disabled", false);
        $('input[id="5.19"]').prop("disabled", false);
        $('input[id="5.10_more"]').prop("disabled", false);
        
      });
      $('input[id="moderate_anemia"]:checked').on( "click", function() {
        $('input[id="5.1"]').prop("disabled", true);
        $('input[id="5.2"]').prop("disabled", true);
        $('input[id="5.3"]').prop("disabled", true);
        $('input[id="5.4"]').prop("disabled", true);
        $('input[id="5.l_1"]').prop("disabled", true);
        $('input[id="5.19"]').prop("disabled", true);
        $('input[id="5.10_more"]').prop("disabled", true);
        
        $('input[id="5.1"]').prop("checked", false);
        $('input[id="5.2"]').prop("checked", false);
        $('input[id="5.3"]').prop("checked", false);
        $('input[id="5.4"]').prop("checked", false);
        $('input[id="5.l_1"]').prop("checked", false);
        $('input[id="5.19"]').prop("checked", false);
        $('input[id="5.10_more"]').prop("checked", false);

      });


      $('input[id="3.other"]').on( "click", function() {
        $('input[id="3_2other"]').prop("disabled", false);
        
        
      });
      $('input[id="3.other"]:checked').on( "click", function() {
        $('input[id="3_2other"]').prop("disabled", true);
        $('input[id="3_2other"]').val('');
      });

      $('input[id="3.yes"]').on( "click", function() {
        $('input[id="3.no"]').prop("checked", false);
        $('input[id="tums"]').prop("disabled", false);
        $('input[id="omeprazole"]').prop("disabled", false);
        $('input[id="esomeprazole"]').prop("disabled", false);
        $('input[id="pantoprazole"]').prop("disabled", false);
        $('input[id="rabeprazole"]').prop("disabled", false);
        $('input[id="famotidine"]').prop("disabled", false);
        
        $('input[id="alka"]').prop("disabled", false);
        $('input[id="maalox"]').prop("disabled", false);
        $('input[id="mylanta"]').prop("disabled", false);
        $('input[id="pepto"]').prop("disabled", false);
        $('input[id="rolaids"]').prop("disabled", false);
        $('input[id="3.other"]').prop("disabled", false);
      });
      $('input[id="3.yes"]:checked').on( "click", function() {
        $('input[id="3_2other"]').prop("disabled", true);
        $('input[id="3_2other"]').val('');
        $('input[id="tums"]').prop("disabled", true);
        $('input[id="omeprazole"]').prop("disabled", true);
        $('input[id="esomeprazole"]').prop("disabled", true);
        $('input[id="pantoprazole"]').prop("disabled", true);
        $('input[id="rabeprazole"]').prop("disabled", true);
        $('input[id="famotidine"]').prop("disabled", true);
        $('input[id="tums"]').prop("checked", false);
        $('input[id="alka"]').prop("disabled", true);
        $('input[id="maalox"]').prop("disabled", true);
        $('input[id="mylanta"]').prop("disabled", true);
        $('input[id="pepto"]').prop("disabled", true);
        $('input[id="rolaids"]').prop("disabled", true);
        $('input[id="3.other"]').prop("disabled", true);

        $('input[id="omeprazole"]').prop("checked", false);
        $('input[id="esomeprazole"]').prop("checked", false);
        $('input[id="pantoprazole"]').prop("checked", false);
        $('input[id="rabeprazole"]').prop("checked", false);
        $('input[id="famotidine"]').prop("checked", false);
        
        $('input[id="alka"]').prop("checked", false);
        $('input[id="maalox"]').prop("checked", false);
        $('input[id="mylanta"]').prop("checked", false);
        $('input[id="pepto"]').prop("checked", false);
        $('input[id="rolaids"]').prop("checked", false);
        $('input[id="3.other"]').prop("checked", false);
      });
      $( 'input[id="3.no"]').on( "click", function() {
        $('input[id="3_2other"]').prop("disabled", true);
        $('input[id="3_2other"]').val('');
        $('input[id="3.yes"]').prop("checked", false);
        $('input[id="tums"]').prop("disabled", true);
        $('input[id="omeprazole"]').prop("disabled", true);
        $('input[id="esomeprazole"]').prop("disabled", true);
        $('input[id="pantoprazole"]').prop("disabled", true);
        $('input[id="rabeprazole"]').prop("disabled", true);
        $('input[id="famotidine"]').prop("disabled", true);
        $('input[id="tums"]').prop("checked", false);
        $('input[id="alka"]').prop("disabled", true);
        $('input[id="maalox"]').prop("disabled", true);
        $('input[id="mylanta"]').prop("disabled", true);
        $('input[id="pepto"]').prop("disabled", true);
        $('input[id="rolaids"]').prop("disabled", true);
        $('input[id="3.other"]').prop("disabled", true);

        $('input[id="omeprazole"]').prop("checked", false);
        $('input[id="esomeprazole"]').prop("checked", false);
        $('input[id="pantoprazole"]').prop("checked", false);
        $('input[id="rabeprazole"]').prop("checked", false);
        $('input[id="famotidine"]').prop("checked", false);
        
        $('input[id="alka"]').prop("checked", false);
        $('input[id="maalox"]').prop("checked", false);
        $('input[id="mylanta"]').prop("checked", false);
        $('input[id="pepto"]').prop("checked", false);
        $('input[id="rolaids"]').prop("checked", false);
        $('input[id="3.other"]').prop("checked", false);
        
      });




      $('input[id="5.yes"]').on( "click", function() {
        $('input[id="5.no"]').prop("checked", false);

        $('input[id="current"]').prop("disabled", false);
        $('input[id="baseline"]').prop("disabled", false);
        
        
        
      });
      $('input[id="5.yes"]:checked').on( "click", function() {
        
        $('input[id="2_baseline"]').val('');
        $('input[id="current"]').prop("disabled", true);
        $('input[id="baseline"]').prop("disabled", true);
        $('input[id="2_baseline"]').prop("disabled", true);
        $('input[id="2_current"]').prop("disabled", true);
        $('input[id="current"]').prop("checked", false);
        $('input[id="baseline"]').prop("checked", false);
        $('input[id="2_baseline"]').prop("checked", false);
        $('input[id="2_current"]').prop("checked", false);
        $('input[id="2_baseline"]').val('');
        $('input[id="2_current"]').val('');
      });
      $( 'input[id="5.no"]').on( "click", function() {
        $('input[id="2_current"]').val('');
        $('input[id="5.yes"]').prop("checked", false);
        $('input[id="2_baseline"]').val('');
        $('input[id="current"]').prop("disabled", true);
        $('input[id="baseline"]').prop("disabled", true);
        $('input[id="2_baseline"]').prop("disabled", true);
        $('input[id="2_current"]').prop("disabled", true);
        $('input[id="current"]').prop("checked", false);
        $('input[id="baseline"]').prop("checked", false);
        $('input[id="2_baseline"]').prop("checked", false);
        $('input[id="2_current"]').prop("checked", false);
        
      });
      $('input[id="baseline"]').on( "click", function() {
        

        
        $('input[id="2_baseline"]').prop("disabled", false);
        
        
        
      });
      $('input[id="baseline"]:checked').on( "click", function() {
        

        
        $('input[id="2_baseline"]').prop("disabled", true);
        $('input[id="2_baseline"]').val('');
        
        
      });
      $('input[id="current"]').on( "click", function() {
        

        
        $('input[id="2_current"]').prop("disabled", false);
        
        
        
      });
      $('input[id="current"]:checked').on( "click", function() {
        

        
        $('input[id="2_current"]').prop("disabled", true);
        $('input[id="2_current"]').val('');
        
        
      });
      
      $('input[id="4.other"]').on( "click", function() {
        $('input[id="4_2other"]').prop("disabled", false);
        
      });
      $('input[id="4.other"]:checked').on( "click", function() {
        $('input[id="4_2other"]').prop("disabled", true);
        $('input[id="4_2other"]').val('');
        
      });

      $('input[id="other_describe"]').on( "click", function() {
        $('input[id="2other_describe"]').prop("disabled", false);
        
      });
      $('input[id="other_describe"]:checked').on( "click", function() {
        $('input[id="2other_describe"]').prop("disabled", true);
        $('input[id="2other_describe"]').val('');
        
      });

      $('input[id="7_other_describe"]').on( "click", function() {
        $('input[id="2_7_other_describe"]').prop("disabled", false);
        
      });
      $('input[id="7_other_describe"]:checked').on( "click", function() {
        $('input[id="2_7_other_describe"]').prop("disabled", true);
        $('input[id="2_7_other_describe"]').val('');
        
      });

      


    
}
setInterval(check,120);