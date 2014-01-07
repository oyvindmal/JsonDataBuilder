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
		
		$("#modal").click(function () { showModal("lol", function () { alert("Modal is live");  });});

		function showModal(stringdata, callback)
		{
			var modalBackground = $("<div />");
			modalBackground.addClass("modalBackground");
			var modal = $("<div />");
			modal.addClass("modal");
			
			var btn = $("<button />");
			btn.text("Close");
			btn.click(
			function ()
			{
				$(".modalBackground").remove();
			});

			var content = $("<div />");
			content.html(stringdata);
			btn.appendTo(modal);
			content.appendTo(modal);
			modal.appendTo(modalBackground);
			modalBackground.appendTo("body");

			callback();
		}
	});
