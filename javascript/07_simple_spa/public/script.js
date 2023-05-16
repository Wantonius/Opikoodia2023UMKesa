window.onload = function() {
	createForm();
}

createForm = () => {
	let root = document.getElementById("root");
	let form = document.createElement("form");
	form.setAttribute("class","m-3");
	
	//First name input and label
	
	let firstNameInput = document.createElement("input");
	firstNameInput.setAttribute("type","text");
	firstNameInput.setAttribute("id","firstname");
	firstNameInput.setAttribute("name","firstname");
	firstNameInput.setAttribute("class","form-control");
	let firstNameLabel = document.createElement("label");
	firstNameLabel.setAttribute("for","firstname");
	firstNameLabel.setAttribute("class","form-label");
	let firstNameText = document.createTextNode("First Name");
	firstNameLabel.appendChild(firstNameText);
	
	//Last name input and label
	
	let lastNameInput = document.createElement("input");
	lastNameInput.setAttribute("type","text");
	lastNameInput.setAttribute("id","lastname");
	lastNameInput.setAttribute("name","lastname");
	lastNameInput.setAttribute("class","form-control");
	let lastNameLabel = document.createElement("label");
	lastNameLabel.setAttribute("for","lastname");
	lastNameLabel.setAttribute("class","form-label");
	let lastNameText = document.createTextNode("Last Name");
	lastNameLabel.appendChild(lastNameText);

	//Email input and label

	let emailInput = document.createElement("input");
	emailInput.setAttribute("type","email");
	emailInput.setAttribute("id","email");
	emailInput.setAttribute("name","email");
	emailInput.setAttribute("class","form-control");
	let emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	emailLabel.setAttribute("class","form-label");
	let emailText = document.createTextNode("Email");
	emailLabel.appendChild(emailText);
	
	//Phone input and label
	
	let phoneInput = document.createElement("input");
	phoneInput.setAttribute("type","tel");
	phoneInput.setAttribute("id","phone");
	phoneInput.setAttribute("name","phone");
	phoneInput.setAttribute("class","form-control");
	let phoneLabel = document.createElement("label");
	phoneLabel.setAttribute("for","phone");
	phoneLabel.setAttribute("class","form-label");
	let phoneText = document.createTextNode("Phone");
	phoneLabel.appendChild(phoneText);
	
	//submit Button
	
	let submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("id","submitbutton");
	submitButton.setAttribute("class","btn btn-success");
	submitButton.setAttribute("value","Add");
	
	//Append to form
	
	form.append(firstNameLabel,firstNameInput,lastNameLabel,lastNameInput,emailLabel,emailInput,phoneLabel,phoneInput,submitButton);
	form.addEventListener("submit",function(e) {
		e.preventDefault();
		addContact();
	})
	
	//Append to root
	root.appendChild(form);

}

addContact = async () => {
	const firstname = document.getElementById("firstname");
	const lastname = document.getElementById("lastname");
	const email = document.getElementById("email");
	const phone = document.getElementById("phone");
	let contact = {
		"firstname":firstname.value,
		"lastname":lastname.value,
		"email":email.value,
		"phone":phone.value
	}
	let url = "/api/contact";
	let request = {
		"method":"POST",
		"headers":{
			"Content-Type":"application/json"
		},
		"body":JSON.stringify(contact)
	}
	const response = await fetch(url,request);
	if(response.ok) {
		firstname.value = "";
		lastname.value = "";
		email.value = "";
		phone.value = "";
	} else {
		console.log("Server responded with a status "+response.status+" "+response.statusText);
	}
}

