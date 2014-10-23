(function dataTable() {
	var kendo = window.kendo,
		ui = kendo.ui,
		Widget = ui.Widget,
		CHANGE = "change";


	var dataTable = Widget.extend({
		options: {
			name: "DataTable",
			autoBind: true
		},
		init: function(element, options) {
			var that = this;
			Widget.fn.init.call(that, element, options);
			that._dataSource();
			var that = this;
			that.element.dataTable();
        },
		refresh: function() {
			
        },
		_dataSource: function() {
			var that = this;
			
			that.dataSource = kendo.data.DataSource.create(that.options.dataSource);
			
			that.dataSource.bind(CHANGE, function() {
				that.refresh();
			});
			
			if (that.options.autoBind) {    
				that.dataSource.fetch();
			}
		},
		setDataSource: function(dataSource) {
			this.options.dataSource = dataSource;
			this._dataSource();
		},
		items: function() {
			return this.element.children();
		},
		events: ["dataBound", "dataBinding", CHANGE],
	});

	ui.plugin(dataTable);
})();