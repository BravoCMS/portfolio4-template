// обрабатывает формы сайтов.. добавление через админку
function goCompanyForm2(id)
{
	var str = jQuery('#cform' + id).serialize();
	jQuery.getJSON(URL + "ajax/company_form.htm", str + '&cform=' + id, function (data) {
		if (data['error'])
		{
			jQuery("#" + data["error"]).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).focus();
		} else
		{
			alert(data['ok']);
		}
	});
	return false;
}

function goCompanyForm3(id)
{
	var str = jQuery('#cform' + id).serialize();
	jQuery.post(URL + "ajax/company_form.htm", str + '&cform=' + id, function (data) {
		alert(data);
	});
	return false;
}

function goCompanyForm(id)
{
	//check required fields
	var proceed = true;
	jQuery('#cform' + id).find('.js-required').each(function () {
		if (proceed && jQuery(this).val() === "") {
			proceed = false;
			var fieldName = jQuery(this).closest('.input_line_right').find('.label').html();
			if (!fieldName) {
				fieldName = jQuery(this).attr('name');
			}
			alert("Поле " + fieldName + " не заполнено!");
		}
	});

	if (!proceed) {
		return false;
	}

	jQuery('#cform' + id).ajaxSubmit({
		url: URL + "ajax/company_form.htm",
		success: function (data) {
			if (data) {
				alert(data);
			}
			if (data.indexOf('error') == -1) {
				window.location = window.location;
			}
		}
	});
	return false;
}
