/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget', 'N/record'],
function(serverWidget, record) {
    function onRequest(context) {
        var form = serverWidget.createForm({title: 'My SuiteLet Form'});

        var button = serverWidget.createButton({
            id: 'my_button',
            label: 'Click Me!',
            functionName: 'myButtonClick'
        });
        form.addButton(button);

        context.response.writePage(form);
    }

    function myButtonClick() {
        var customForm = record.load({
            type: record.Type.CUSTOM_RECORD,
            id: 'customform_test_sdf_form',
            isDynamic: true
        });
        var ownerField = customForm.getField({fieldId: 'OWNER'});
        ownerField.isDisplay = false;
        customForm.save({
            enableSourcing: false,
            ignoreMandatoryFields: true
        });
    }

    return {
        onRequest: onRequest,
        myButtonClick: myButtonClick
    };
});
