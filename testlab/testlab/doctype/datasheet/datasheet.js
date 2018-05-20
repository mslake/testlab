// Copyright (c) 2018, Matt Lake and contributors
// For license information, please see license.txt

frappe.ui.form.on('Datasheet', {
	refresh: function(frm) {

	}
});

frappe.listview_settings['Datasheet'] = {
	add_fields: ["test_method", "test_method_rev", "start_date", "end_date"]
};
