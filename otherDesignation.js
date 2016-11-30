// Postback support
var prm = Sys.WebForms.PageRequestManager.getInstance();
prm.add_endRequest(EndRequest);

function EndRequest(sender, args) {
    othDesignation();
}

$(document).ready(function () {
    othDesignation();
});

function othDesignation() {
var otherDesignation = $('label:contains("Other Designation")').parent().parent()
$('label:contains("Other Designation")').parent().parent().remove()
$('[id$="trDesignation"]').after(otherDesignation)
$('label:contains("Other Designation")').parent().parent().hide()

if ($('[id$="ddlDesignations"]').val() == "184") {
$('label:contains("Other Designation")').parent().parent().show();
    } else {
        $('label:contains("Other Designation")').parent().parent().hide()
    }

$('[id$="ddlDesignations"]').change(checkState);

function checkState() {
    var ddlDesignations = $('[id$="ddlDesignations"]').val();

    if (ddlDesignations == "184") {
        $('label:contains("Other Designation")').parent().parent().show();
    } else {
        $('label:contains("Other Designation")').parent().parent().hide()
    }
}
}
