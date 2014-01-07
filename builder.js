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
			var obj = $("<div />");
			obj.addClass("modalBack");

			obj.appendTo("body");
		}
	});
