({
	handleShowModal : function(component, event, helper) 
	{
		var modalBody;
		var recordId=component.get("v.recordId");
		console.log("id"+recordId);
		$A.createComponent("c:modelContent",{recordId:recordId},
             function(content,status)
             {
             	if(status==="SUCCESS")
             	{
					modalBody=content;
					component.find('overlayLib').showCustomModal({
					header:"Account creation",
					body:modalBody,
					showCloseButton:true,
					cssClass:"mymodal",
					closeCallback:function()
						{
						alert('you have closed the modal');
						}
				  });
                }
             })
	}
})