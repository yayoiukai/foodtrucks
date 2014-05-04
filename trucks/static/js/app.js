var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"categories/:category": "categoryDetails"
	},

	initialize: function  () {
		this.menuItemView = new MenuItemDetails(
			{
				category: 'Entreé', 
				imagepath: 'garden-salad.jpg'
			}
		);
		
		this.menuView = new MenuView(
			{
				items: [
					"Garden Salad",
					"Pizza",
					"Cheesecake"
				]
			}
		);
		
		this.menuCategoryView = new MenuCategoryView(
			{
				category: 'Entreé',
				images: [
					"carrots.jpg",
					"green-beans.jpg",
					"mashed-potatoes.jpg"
				]
			}
		);
	},

	list: function () {
		$('#app').html(this.menuView.render().el);
	},

	itemDetails: function (item) {
		this.menuItemView.options.name = item;
		$('#app').html(this.menuItemView.render().el);
	},

	categoryDetails: function  (category) {
		this.menuCategoryView.options.category = category;
		$('#app').html(this.menuCategoryView.render().el);
	},

	itemForm: function () {
		$('#app').html('New item form');
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});