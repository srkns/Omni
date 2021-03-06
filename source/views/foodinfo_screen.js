enyo.kind(
{name: "foodinfo_screen",  kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full", 
	style: "background-image: url(\assets/food_services/Panels/background.png);",
	components:
		[
		 	{name:"FoodInfoTitle", content: "Food",  style: "font-size: 60px; margin-left: 35px; color: white; margin-bottom: 20px;"},
		 		 	{kind: "FittableRows", style: "margin-left: 35px;",components:
		 		 		[
		 		 		 {kind:"FittableColumns", components:
		 		 			 [		
				 		 		 {name:"FoodImage", kind: "enyo.Image", style:"max-width:600px;max-height:400px;",src:""}, 
				 		 		{kind: "moon.Scroller", fit: true, style: "max-width: 1200px;",
									components:
									[
										{name:"FoodDescr", kind: "moon.BodyText", style:"font-size: 35px; margin-left: 35px; color: white;", content: "xy"}
									]
								},
		 		 			 	]},		 		 			 	
		 			 		]
		 			 	},
 		 			 	{kind:"FittableColumns", style:"padding: 20px;", components:
		 		 			 [	
		 		 			  		{content: "Order to:", style: "color: white; margin-left: 15px;"},
		 			 	            {name:"room", kind: "moon.FormCheckbox", content: "Room", onchange: "itemChanged", style: "color: white; margin-left: 20px;"},
		 			 	            {name:"table", kind: "moon.FormCheckbox", content: "Table in Restaurant", onchange: "itemChanged",style: "color: white; margin-left: 20px;"},
		 			 	            ]},

		 			 			 	{kind: "FittableColumns", components:
		 			 			 		[
		 			 			 	
		 			 			 	{kind: "moon.BodyText", style: "color: white; margin-left: 30px;", content: "Price:"},
		 	 		 			 	{name:"FoodPrc", kind: "moon.BodyText", style: "color: white;",content: "xy"},
		 	 		 			 	{kind: "moon.BodyText", style: "color: white; margin:0px;", content: "\u20AC"}
		 	 		 			 	]},
		 	{kind: "FittableColumns", style:"padding: 20px;",
 		 		components:
	 			 			[
	 			 			 	{kind: "moon.BodyText", content: "Quantity", style: "margin: 0px;display: inline;", style: "color: white;"},
	 			 			 	{kind: "moon.IconButton", icon: "arrowsmallup", style: "margin-left: 40px;", ontap: "ArrowUpTapped"},
		 			 		 	{name: "quantity", kind: "moon.BodyText", content: "1", style: "margin: 0px; display: inline;", style: "color: white;"},
		 			 		 	{kind: "moon.IconButton", icon: "arrowsmalldown", ontap: "ArrowDownTapped"},
                        	
	 			 			]
	 			 	},
		 	 		 			 {kind: "FittableColumns", style:"padding: 20px;",
		 	 		 		 		components:[
		 	 		 			 {name: "acceptButton", kind: "moon.IconButton", style: "margin-left: 15px;", serviceID: null, serviceName: null, icon: "check", ontap: "onFoodInfoOrderTapped"},
		                        	{kind: "moon.IconButton", icon: "closex", ontap: "onFoodInfoBackTapped"}]}
		 	 		 			 ,
		 			 	            
		 			 	          {name: "confirmOrderPopup", content: "", kind: "moon.Popup", showCloseButton:true,style:"background-image: url(\assets/food_services/Panels/popups.png);",
			 			 			 		components:
			 			 			 			[{name: "confirmOrder", content: null},
					 			 	            {name:"payNow", kind: "moon.FormCheckbox", content: "I would like to pay the order now.", onchange: "itemChanged", style: "color: white;"},
					 			 	            {name:"addToBill", kind: "moon.FormCheckbox", content: "I would like to add the order to the room bill.", onchange: "itemChanged",style: "color: white;"},
					 	
			 			 			 			{kind: "moon.Button", content: "Confirm", ontap: "onConfirmTapped"}
			 			 			 			]},

			 			 		{name: "errorPopup", kind: "moon.Popup", showCloseButton:true,style:"background-image: url(\assets/expenditures/background_popup.png);",
			 			 			 				content:"Please select 1 option."},
			 			 			 				
			 			 			 				{kind:"moon.Popup", showCloseButton:true, name:"paymentPopUp", title:"",style:"background-image: url(\assets/expenditures/background_popup.png);" , 
			 			 			 					components:[
			 			 			 					            {kind:"FittableRows",components:[
			 			 			 		         		     	  		{content:"Please Select you preferable payment method:"},
			 			 			 		         		     	  		
			 			 			 			         		     	  	{kind:"FittableColumns",
			 			 			 		         		     	  			components:[
			 			 			 														{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;", ontap:"onPaymentTapped", popup:"paymentConfirmation", 
			 			 			 																components:
			 			 			 																[
			 			 			 																 	{kind: "enyo.Image", src: "assets/expenditures/apple_pay.png", },
			 			 			 																]
			 			 			 														},
			 			 			 														{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",ontap:"onPaymentTapped", popup:"paymentConfirmation",
			 			 			 															components:
			 			 			 															[
			 			 			 															 	{kind: "enyo.Image", src: "assets/expenditures/google_wallet.png"},
			 			 			 															]
			 			 			 														},
			 			 			 														{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",ontap:"onPaymentTapped", popup:"paymentConfirmation",
			 			 			 															components:
			 			 			 															[
			 			 			 															 	{kind: "enyo.Image", src: "assets/expenditures/paypal.png"},
			 			 			 															]
			 			 			 														}
			 			 			 														]
			 			 			 			         		     	  	}
			 			 			 		         		     	  		]
			 			 			 					            }
			 			 			 					            ]
			 			 			 				},
			 			 			 				{name:"paymentConfirmation", kind:"moon.Popup", style:"background-image: url(\assets/food_services/Panels/popups.png);", 
			 			 			 				  components:[
{name:"closePaymentConfirmationText", kind:"moon.BodyText",content:"Payment was successfull!"},
{kind:"moon.Button", content:"Close", ontap:"closePaymentConfirmationPopup"}]},
			 			 			 														
			 			 		
		 			 	            ],
		
		rendered: function()
		{
		    this.inherited(arguments);
		},
		
		setTitle: function()
		{
		    this.$.FoodInfoTitle.setContent(this.propertyOne);
		    this.$.FoodDescr.setContent(this.propertyTwo);
		    this.$.FoodPrc.setContent(this.propertyFour);
		    // SOLUTION
		    this.$.FoodImage.setSrc(this.propertyThree);
		},
		
		ArrowUpTapped: function(inSender, inEvent)
		{
			var quantity = parseInt(this.$.quantity.content);

			console.log(quantity);
			if(quantity < 10)
			{
				this.$.quantity.setContent(++quantity);
				this.$.FoodPrc.setContent(this.propertyFour * quantity);
			}
			
		},
		
		ArrowDownTapped: function(inSender, inEvent)
		{
			var quantity = parseInt(this.$.quantity.content);

			console.log(quantity);
			if(quantity > 1)
			{
				this.$.quantity.setContent(--quantity);
				this.$.FoodPrc.setContent(this.propertyFour * quantity);
			}
			
			console.log(quantity);
		},
		
		onConfirmTapped: function()
		{
			var id = this.orderToRoom();
			if(this.$.payNow.checked == true && this.$.addToBill.checked == false)
				{
					this.$.paymentPopUp.title = id;
					this.$.paymentPopUp.show();
				}
			else if(this.$.addToBill.checked == true && this.$.payNow.checked == false)
				{
					this.$.confirmOrderPopup.hide();
					this.owner.loadRestaurantScreen();
				}
			else
				this.$.errorPopup.show();
		},
		
		orderToRoom: function()
		{
				try
				{
					var client = {client_id:this.getRoomID()};
					obj = this.webService("roomservice/add/",client);
					console.log(obj);
					var extra = {
							restaurant_order_id: obj.id,
				            food_menu_id: this.propertyFive,
				            promotion_id: this.propertySix,
				            quantity: parseInt(this.$.quantity.content)
							};
					console.log(extra);
					var x = this.webService("roomservice/add/",extra);
					console.log(x);
					return obj.id;
				}
				catch(e)
				{
					console.log(e);
					this.$.closePaymentConfirmationText.setContent("Error!");
					this.$.paymentConfirmation.show();
				}
			
			
			
			
		},
		// Food Info Back Tapped
		onFoodInfoBackTapped: function()
		{
			this.owner.loadRestaurantScreen();
		},
		
		// Food Info Order Tapped
		onFoodInfoOrderTapped: function(inSender, inEvent)
		{
			if(this.$.room.checked == true && this.$.table.checked == false)  
				{
					//order to room
				
				this.$.confirmOrderPopup.setContent(this.propertyOne);
				this.$.confirmOrder.setContent(this.propertyOne + ", price : "+ parseInt(this.$.quantity.content)*this.propertyFour) + "' \u20AC'";
				this.$.confirmOrderPopup.show();
				}
			else if(this.$.room.checked == false && this.$.table.checked == true)
				{
				this.$.closePaymentConfirmationText.setContent("A Table is ordered.");
				this.$.paymentConfirmation.show();
				}
			
			else
			{
			this.$.errorPopup.show();
			}
			
		},
		//payment tapped
    	onPaymentTapped: function(inSender)
    	{
    		console.log(this.$.paymentPopUp.title);
    		payRestaurant = this.webService("payday/restaurant/?id=" +parseInt(this.$.paymentPopUp.title));
    		console.log(payRestaurant);
    		this.$.confirmOrderPopup.hide();
    		
    		var popUp = this.$[inSender.popup];
    		if(popUp.showing)
			{
				popUp.hide();
			}
			else
			{
				popUp.show();
			}
    	
    	},
		getRoomID: function()
		{
			return this.owner.roomID;
		},
		 //payment feedback
    	closePaymentConfirmationPopup: function(inSender)
    	{
    		this.$.paymentConfirmation.hide();
    		this.$.paymentPopUp.hide();
			this.owner.loadRestaurantScreen();
    	},
    	webService: function(URL, data)
    	{
    		return this.owner.webService(URL, data);
    	}
		
}
);