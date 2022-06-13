def mapHeadache(datafrompaq):
    print("this is what I have:")
    print(datafrompaq)
    datafordbq={}
    
    history_k32=""
    medicine=""
    functional_impact=""
    for key, value in datafrompaq.items():
        print(key)
        #datafrompaq[key]=value.strip()
        #================q1================        
        if key == 'service_connected':
            if value =='yes':
                datafordbq[key]=True
            else:
                #if they marked no then I have to create a new item
                datafordbq["notserviceconnected"]=True
        #==================================
       
        #================q2================        
        if key == "migraine":
            datafordbq[key]=True
        elif key == "tension":
            datafordbq[key]=True
        elif key == "cluster":
            datafordbq[key]=True
        elif key == "other2" and value == 'other2':
            #insert the 2other_txt
            datafordbq["2other2"]=True
        elif key == 'other2_txt' and value != '':
            datafordbq[key]=value
        elif key == "other2.2" and value == 'other2.2':
            #insert the other2_txt2
            datafordbq[key]=True
        elif key == 'other2.2_txt' and value != '':
            datafordbq['other2_2_txt']=value
        #==================================

        #================q3================        
        if key == "during_service":
            datafordbq[key]=True
            history_k32=history_k32+"Veteran developed this condition during time in service"
        elif key == "progressively_worse":
            datafordbq[key]=True
            history_k32=history_k32+". Veterans condition has progressively become worse over time"
        elif key == "worse_since_exam":
            datafordbq[key]=True
            history_k32=history_k32+". The severity of my condition has become worse since my last physical exam"
        elif key == "dailyLife":
            datafordbq[key]=True
            history_k32=history_k32+". Headache condition affects veterans daily life activities"
        elif key == "medication":
            datafordbq[key]=True
            history_k32=history_k32+". Veteran takes medication for this condition"
        
        if history_k32!='':
            
            if history_k32[0]=='.' and history_k32[1] == ' ':
                history_k32=history_k32[2:(len(history_k32))]
            datafordbq['history_k32']=history_k32
        #==================================
        
        #================q4================        
        if key == "4.medication" and value == 'yes':
            datafordbq['4_medication']=True
        if key == "Acetaminophen":
            datafordbq[key]=True
            medicine=medicine+"Acetaminophen"
        elif key == "Aspirin":
            datafordbq[key]=True
            medicine=medicine+". Aspirin"
        elif key == "Ibuprofen":
            datafordbq[key]=True
            medicine=medicine+". Ibuprofen"
        elif key == "Excedrin":
            datafordbq[key]=True
            medicine=medicine+". Excedrin"
        elif key == "Other_medicine":
            datafordbq[key]=True
            #get the value from other
        elif key == 'other_medicine_txt' and value!='':
            medicine=medicine+". "+value

        if medicine!='':
            if medicine[0]=='.' and medicine[1] == ' ':
                medicine=medicine[2:(len(medicine))]
            datafordbq["medicine_35"]=medicine
        
        if key == "4.medication" and value != 'yes':
            datafordbq["4_notmedication"]=True
        #==================================

        #================q5================        
        if key == "5.headache" and value == 'yes':
            datafordbq['5_headache']=True
        if key == "constant_pain":
            datafordbq[key]=True
        elif key == "pulsating_pain":
            datafordbq[key]=True
        elif key == "localized_pain":
            datafordbq[key]=True
        elif key == "pain_on_sides":
            datafordbq[key]=True
        elif key == "worse_with_activity":
            datafordbq[key]=True
            #get the value from other
        # elif key == 'other_5_txt' and value != '':
        #     datafordbq[key]=value

        if key == "5.headache" and value != 'yes':
            datafordbq["5_notheadache"]=True
        #==================================

        #================q6================        
        if key == "q6" and value == 'yes':
            datafordbq['q6_yes']=True
        
        if key == "6_Nausea":
            datafordbq[key]=True
        elif key == "6_Vomiting":
            datafordbq[key]=True
        elif key == "6_sensitivity_light":
            datafordbq[key]=True
        elif key == "6_sensitivity_sound":
            datafordbq[key]=True
        elif key == "6_changes_in_vision":
            datafordbq[key]=True
        elif key == "6_sensory_changes":
            datafordbq[key]=True
        elif key == "6_other":
            datafordbq[key]=True
        
        if key == "6_other_txt" and value != "":
            print("hey")
            #get the value from other
            datafordbq['6othertxt']=value
    
        if key == "q6" and value != 'yes':
            datafordbq['q6_no']=True
        #==================================

        #================q7================        
        if key == "q7" and value == '7_less_than_day':
            datafordbq['7_less_than_day']=True
        elif key == "q7" and value == '7_1to2days':
            datafordbq['7_1to2days']=True
        elif key == "q7" and value == '7_more_than_2_days':
            datafordbq['7_more_than_2_days']=True
        elif key == "q7" and value == '7_other':
            #get the value from other
            datafordbq['7_other']=True
        
        if key == "q7_txt" and value != '':
            datafordbq['7_other']=True
            datafordbq['q7_txt']=value

        #==================================

        #================q8================        
        if key == "q8" and value == '8.right_side':
            datafordbq['8_right_side']=True
        elif key == "q8" and value == '8.left_side':
            datafordbq['8_left_side']=True
        elif key == "q8" and value == '8.both_sides':
            datafordbq['8_both_sides']=True
        elif key == "q8" and value == '8.other':
            #get the value from other
            datafordbq['8_other']=True
        
        if key == "q8.txt" and value != '':
            datafordbq['q8_txt']=value
            datafordbq['8_other']=True
        #==================================

        #================q9================        
        if key == "q9" and value == 'yes':
            datafordbq['q9_yes']=True

        if key == "q9" and value != 'yes':
            datafordbq["notq9_no"]=True
        
        if key == "9_one_every_three_months":
            datafordbq[key]=True
        elif key == "9_averaging_in2_month":
            datafordbq[key]=True
        elif key == "9_once_month":
            datafordbq[key]=True
            
        if key == "2.q9" and value == 'yes':
            #marks double
            datafordbq['2_q9']=True
            datafordbq['2q9_2']=True

        if key == "2.q9" and value != 'yes':
            datafordbq['not2_q9']=True
        
        elif key == "9.missing_work":
            functional_impact=functional_impact+"Missing work due to symptoms has caused a negative financial effect. "
        elif key == "9.unaemployed_interfere":
            functional_impact=functional_impact+"Veteran's symptoms and frequency of symptoms would likely interfere with employment. "
        elif key == "9.work_problems":
            functional_impact=functional_impact+"Symptoms have caused work-related problems such as: "
        elif key == "9.2.1_concentration":
            functional_impact=functional_impact+"Issues with concentration. "
        elif key == "9.2.1_productivity":
            functional_impact=functional_impact+"Lack in productivity. "
        elif key == "9.2.1_finish_work":
            functional_impact=functional_impact+"Inability to finish out the work day. "
        elif key == "9.severe_symptoms":
            functional_impact=functional_impact+"Severe symptoms has caused the veteran to be unable to get out of bed and has to call out of work. "
        elif key == "9.financial_loss":
            functional_impact=functional_impact+"Condition causes financial loss. "    
        

        if functional_impact!='':
            if functional_impact[0]=='.' and functional_impact[1] == ' ':
                functional_impact=functional_impact[2:(len(functional_impact))]
            
            datafordbq["functional_impact"]=functional_impact
       
        #==================================

        #================q10================        
        if key == "10.service_connected" and value == 'yes':
            datafordbq['10_service_connected']=True
            datafordbq['11_scar_II']=True
            
        if key == "10.service_connected" and value != "yes":
            datafordbq["not10_serviceconnected"]=True
            
        if key == "10.describe_condition" and value != '':
            datafordbq['10_describe_condition']=value
        #==================================
        
        #================q11================        
        if key == "11.scar" and value == 'yes':
            datafordbq['11_scar']=True
        if key == "11.location":
            datafordbq['11_location']=value
        if key == "11.Length":
            datafordbq['11_Length']=value
        if key == "11.Width":
            datafordbq['11_Width']=value
        
        if key == "11.scar" and value != 'yes':
            datafordbq["notscar"]=True
        #==================================

    print("this is what I'll return")
    print(datafordbq)
    return datafordbq

# old  -- ignore
def dbq_generator(data_dict,record_id):
    print("You are calling the DBQ Generator")
    #access pdf and set up answers
    pdf_template="media/va_files/back_mazi.pdf" #put variable here to make it dynamic
    pdf_result=f"media/results/{record_id}.pdf"
    output_pdf_path=''

    #creat pdfrw object
    template_pdf = pdfrw.PdfReader(pdf_template)

    #print(template_pdf) # => everything available in the PDF

    #get the form fields of the PDF we created
    ANNOT_KEY = '/Annots'
    ANNOT_FIELD_KEY = '/T'
    ANNOT_VAL_KEY = '/V'
    ANNOT_RECT_KEY = '/Rect'
    SUBTYPE_KEY = '/Subtype'
    WIDGET_SUBTYPE_KEY = '/Widget'

    print(muscle_spasms)
    muscle_spasms=True if muscle_spasms=='muscle_spasms' else False
    print(muscle_spasms)
    
    #perhaps use the other data dictionary mentioned above where there is one per dbq
    data_dict = {
        'name': name,
        'Yes_muscle': True,
    }

    #review each page
    print("========================This are the available spots to wirte on:========================")
    for page in template_pdf.pages:
        annotations = page[ANNOT_KEY]
        try:
            for annotation in annotations:
                if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                    if annotation[ANNOT_FIELD_KEY]:
                        key = annotation[ANNOT_FIELD_KEY][1:-1]
                        print(key)
                        if key in data_dict.keys():
                                print(key+"in dictionary")
                                if type(data_dict[key]) == bool:
                                    print("key is boolean")
                                    if data_dict[key] == True:
                                        print(key+"it's true")
                                        annotation.update(pdfrw.PdfDict(
                                            AS=pdfrw.PdfName('Yes')))
                                        print(key+"marked as yes")
                                else:
                                    annotation.update(
                                        pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                                    )
                                    annotation.update(pdfrw.PdfDict(AP=''))
        except:
            print("seems like there are no annotations here. No spot to write on")

    template_pdf.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject('true')))
    pdfrw.PdfWriter().write(pdf_result, template_pdf)

    file=open(f"media/results/{record_id}.pdf",mode="rb")

    
    #azure note
    print("Azure Blob Storage v" + __version__ + " - Python quickstart sample")

    # Create the BlobServiceClient object which will be used to create a container client
    blob_service_client = BlobServiceClient.from_connection_string(BLOB_CONNECTION_STRING)
    
    # Create a blob client using the local file name as the name for the blob
    blob_client = blob_service_client.get_blob_client(container=BLOB_FILES_CONTAINER, blob=f"{record_id}.pdf")

    #upload file 
    blob_client.upload_blob(file)
    
    #download file
    elem=download(blob_service_client,record_id)
    response=HttpResponse(elem.readall(),content_type="application/pdf ")
    response["Content-Disposition"] = "attachment;filename=something.pdf"
    return response
    