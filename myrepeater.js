/**
 * Created by woqpw on 13.10.14.
 */
(
    function(){
        var kendo = window.kendo,
            ui = kendo.ui,
            Widget = ui.Widget,
            CHANGE = "change";
        var Repeater = Widget.extend({
            init: function(element,options)
            {
                var that = this;
                kendo.ui.Widget.fn.init.call(that,element,options);
                that.template = kendo.template(that.options.template||"<p>#= data #</p>");
                that._dataSource();
            },
            options:
            {
                name:"Repeater",
                autoBind: true,
                template: ""
            },
            refresh: function() {
                var that = this,
                view = that.dataSource.view(),
                html = kendo.render(that.template,view);
                that.element.html(html);
                },
            _dataSource: function(){
                var that = this;
                that.dataSource = kendo.data.DataSource.create(that.options.dataSource);
                that.dataSource.bind(CHANGE,function(){that.refresh();});
                if (that.options.autoBind)
                {
                    that.dataSource.fetch();
                }
            }
        });
        ui.plugin(Repeater);
    }
    )(jQuery);