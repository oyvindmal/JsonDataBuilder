$(document).ready(
	function () 
	{
	
		var workingObject;

		
		$("#test").click(function()
		{
			$("#output").text(JSON.stringify(workingObject));
		});
		
		$("#textmodal").click(
		function ()
		{
			showModal("Test", "Little bit more of testing", function () {});
		});

		$("#modal").click(
			function () 
			{
				var tempobj = $("<p />");
				tempobj.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."); 
				showModal("What is Lorem Ipsum?", tempobj, function () { console.log("Modal is live");  });
			});

		
		$("#btnImport").click(
			function() 
			{
				var importContainer = $("<div />");
				var importArea = $("<textarea />");
				var importButton = $("<button />");
				importButton.text("Import");
				importButton.click(
				function () 
				{ 
					importCallback(importArea.val());  
					closeModals();
				});
				
				importArea.appendTo(importContainer);
				importButton.appendTo(importContainer);
				showModal("Import JSON", importContainer, function () {});
			});

		function importCallback(data)
		{
			console.log("importCallback");
			console.log("Got data: " + data);
			workingObject = (jQuery.parseJSON(data));
		}	
		function showModal(title, dataobject, callback)
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
			closeModals();
			});
			var heading = $("<h3 />");
			heading.text(title);
			var content = $("<div />");
			content.addClass("modalContent");
			if(dataobject.jquery)
			{
				dataobject.appendTo(content);
			}

			else 
			{
				content.html(dataobject);
			}
			btn.appendTo(modal);
			heading.appendTo(modal);
			content.appendTo(modal);
			modal.appendTo(modalBackground);
			modalBackground.appendTo("body");

			callback();
		}

		function closeModals()
		{
			 $(".modalBackground").remove();
		}
	});
