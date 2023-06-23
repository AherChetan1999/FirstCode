var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["price"] = document.getElementById("price").value;
    formData["p_name"] = document.getElementById("p_name").value;

    obj={
        selling_price:formData["price"],
        product_name:formData["p_name"]
    }
    axios.post("https://crudcrud.com/api/80d0a027e7014fd3828090bb36b58289/productdata",obj);
    
    document.getElementById("demo").innerHTML = "Rs."+formData["price"];
    return formData;
}

 

function insertNewRecord(data) {

    axios.get("https://crudcrud.com/api/80d0a027e7014fd3828090bb36b58289/productdata")
    .then(response => {
        
         for(var i=0; i<response.data.length;i++)
         {   
            
            var table = document.getElementById("List").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = response.data[i].selling_price;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = response.data[i].product_name;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML =` <a onClick="onDelete(this)">Delete</a>`;

         }

    })


}

function resetForm() {
    document.getElementById("price").value = "";
    document.getElementById("p_name").value = "";
    selectedRow = null;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        

        console.log(td.rowIndex);

       
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
       
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("price").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}