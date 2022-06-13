import os
import pdfrw
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import PAQ
import uuid

def process_paq(request, paq_name, template, mapping_func, disability_name, file_name):
    
    if request.method=="GET":
        #check if there are paqs for this user
        records=PAQ.objects.filter(name=paq_name)
        context={}
        return render(request, template, context)
    
    if request.method=="POST" and not request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest': #POST not AJAX
        
        #collect and clean answers from the form
        datafrompaq={}
        for key, value in request.POST.items():
            if key!='csrfmiddlewaretoken':
                datafrompaq[key]=value.strip()

#=============================================================================================        
        #perform mapping (this has to go after the client pays)
        #paq_data=nonsql.main(instruction='bring_paq',document_id=record_id)
        record_id=str(uuid.uuid4())
        print(f"this will be the name of the file {record_id}")
        datafordbq=mapping_func(datafrompaq)
        base_file=f"media/va_files/{file_name}.pdf"
        response=dbq_generator(datafordbq,base_file,str(record_id)) 
        os.remove(f'media/downloads_temp/{record_id}.pdf')
#=============================================================================================

        #add this PAQ to the cart
        disab=disability_name
        
        # return redirect('paqs:paqs')
        return response
    
def dbq_generator(data_dict,base_file,record_id):
    print("You are calling the DBQ Generator")

    #access pdf and set up answers
    pdf_template=base_file #put variable here to make it dynamic
    pdf_result=f"media/downloads_temp/{record_id}.pdf"

    #creat pdfrw object
    template_pdf = pdfrw.PdfReader(pdf_template)

    #get the form fields of the PDF we created
    ANNOT_KEY = '/Annots'
    ANNOT_FIELD_KEY = '/T'
    ANNOT_VAL_KEY = '/V'
    ANNOT_RECT_KEY = '/Rect'
    SUBTYPE_KEY = '/Subtype'
    WIDGET_SUBTYPE_KEY = '/Widget'

    #review each page
    print("========================This are the available spots to wirte on:========================")
    for page in template_pdf.pages:
        annotations = page.get(ANNOT_KEY)
        try:
            for annotation in annotations:
                if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                    if annotation[ANNOT_FIELD_KEY]:
                        key = annotation[ANNOT_FIELD_KEY][1:-1]
                        print(key)
                        if key in data_dict.keys():
                                if type(data_dict[key]) == bool:
                                    if data_dict[key] == True:
                                        annotation.update(pdfrw.PdfDict(
                                            #V=pdfrw.PdfName('Yes')))
                                            AS=pdfrw.PdfName('Yes'), V=pdfrw.PdfName('Yes')))
                                        #annotation.update(pdfrw.PdfDict(
                                            #AS=pdfrw.PdfName('Yes')))
                                            #pdfrw.PdfDict(AS='{}'.format("Yes"))))
                                        #annotation.update(pdfrw.PdfDict(Ff=1))
                                else:
                                    annotation.update(
                                        pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                                    )
                                    annotation.update(pdfrw.PdfDict(AP=''))
                                    #annotation.update(pdfrw.PdfDict(Ff=1))
        except:
            print("seems like there are no annotations here. No spot to write on")

    template_pdf.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject('true')))
    pdfrw.PdfWriter().write(pdf_result, template_pdf)

    file=open(f"media/downloads_temp/{record_id}.pdf",mode="rb")

    print("using local storage to save $")
    file=open(f"media/downloads_temp/{record_id}.pdf",mode="rb")
    response=HttpResponse(file,content_type="application/pdf ")
    response["Content-Disposition"] = "attachment;filename=something.pdf"

    return response
