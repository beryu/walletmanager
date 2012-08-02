/**
 * お財布管理 Ver.2
 */
(function(global) {
	// 初期化処理
	$(function() {
		// 取引モデルの定義
		var Deal = Backbone.Model.extend({});
		
		// 取引のコレクションの定義
		var DealList = Backbone.Collection.extend({
			model: Deal
		});
		
		// ビューの定義
		var WalletView = Backbone.View.extend({
			events: {
				'click #add': 'addToClient', // DOMイベントを監視
				'click #remove': 'removeFromClient'
			},
			initialize: function(options) {
				_.bindAll(this, 'addToClient', 'removeFromClient');
				
				this.collection.on('add', this.addToServer);
				this.collection.on('remove', this.removeFromServer);
				
				this.render();
			},
			render: function() {
				$(this.el).html(_.template($('#form_add'), {}));
			},
			addToClient: function(event) {
				var model = new Deal();
				this.collection.add(model); // this.appendItem
			},
			removeFromClient: function(event) {
				console.log('TODO:Remove the deal from collection.');
			},
			addToServer: function(model) {
				console.log('TODO:Regist the deal to DB.');
			},
			removeFromServer: function(model) {
				console.log('TODO:Remove the deal from DB.');
			}
		});
		
		var dealList = new DealList();
		var walletView = new WalletView({
			el: '#container',
			collection: dealList
		});
	})
})(window);