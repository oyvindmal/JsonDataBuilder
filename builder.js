$(document).ready(
	function () 
	{
	
		var temp = 
		{
			"foo" : "bar",
			"bar" : "foo"
		}

		
		$("#test").click(function()
		{
			$("#output").text(JSON.stringify(temp));
		});
		
		$("#modal").click(function () { showModal();});

		function showModal()
		{
			var modalBackground = $("<div />");
			modalBackground.addClass("modalBackground");
			var modal = $("<div />");
			modal.addClass("modal");
			modal.appendTo(modalBackground);
			modalBackground.appendTo("body");
		}
	});
