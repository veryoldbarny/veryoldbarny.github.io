$(function(){
	var model = kendo.observable({
		dataSource: kendo.data.DataSource.create({
			data: [{1:1}]
		})
	});
	kendo.bind("#view", model);
});