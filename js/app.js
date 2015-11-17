var data = [
	{
		title:"Bread"
	},
	{
		title:"Milk"
	}
];
var notes = "";

var addItemList = function(item, index){
	$('#listItem').append('<li><span>'
	 + item.title + 
	 '</span> <button data-list-id="'+
	 index+'" class="btnDelete">x</button></li>');
};
	
	var populateList = function(items){

		$('#listItem').html('');
		items.forEach(function(item, index){
			addItemList(item, index);
		});
		$('.btnDelete').click(function(e){
			var id = $(this).data('listId');
			data.splice(id,1);
			populateList(data);
		});
	};

$(document).ready(function() {
	populateList(data);
	$('.btnItem').click(function(){
		var newItem = {};
		newItem.title = $('#txtNewItem').val();
		data.push(newItem);
		populateList(data);
	});
	
	$('#textArea').keyup(function(){
		notes = $('#textArea').val();
	});

	$('#textArea').val(notes);
});

	$(span).css('color', 'green');
