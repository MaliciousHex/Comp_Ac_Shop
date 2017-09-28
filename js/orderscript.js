function validate() 
{
	var username = document.getElementById('usernameId').value;
	var male = document.getElementById('maleId').checked;
	var female = document.getElementById('femaleId').checked;
	var phone = document.getElementById('phoneId').value;
	var address = document.getElementById('addressId').value;
	var qty = document.getElementById('qtyId').value;
	var error = document.getElementById("messageId");
	var product = document.getElementById('productId').value;

	// alert(phone.length);
	if(username.trim() == "" || username == null)
	{
		error.innerHTML = "Username Must be filled";
	}
	else if(!male && !female)
	{
		error.innerHTML = "Gender Must be choose";
	}
	else if(phone.length < 11)
	{
		error.innerHTML = "Phone must be more than 10 digit";	
	}
	else if(qty < 1)
	{
		error.innerHTML = "Quantity must more than 0";
	}
	else if(!address.endsWith("street"))
	{
		error.innerHTML = "Address must ended with 'street'";
	}
	else if(product == 0)
	{
		error.innerHTML = "Product must be choose";
	}
	else
	{
		error.innerHTML = "Success Order Product";	
	}
}