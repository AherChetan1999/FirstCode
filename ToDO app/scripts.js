
var selectedRow = null


function onFormSubmit() {
   
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["quantity"] = document.getElementById("quantity").value;
    
   
    return formData;
}



 window.addEventListener("DOMContentLoaded", async()=>{ 
   const response= await axios.get("https://crudcrud.com/api/2dc13f35c7454d8aa49af0e0d69f6f08/data");
    
        
         for(var i=0; i<response.data.length;i++)
         {   
            
            var table = document.getElementById("List").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = response.data[i].name;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = response.data[i].description;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = response.data[i].price;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = response.data[i].quantity;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<a onClick="onEdit(this)">Buy</a>`;

         }

});

function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantity;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Buy</a>`;
                       
    obj={
            name:data.name,
            description:data.description,
            price:data.price,
            quantity:data.quantity

        }
       axios.post("https://crudcrud.com/api/2dc13f35c7454d8aa49af0e0d69f6f08/data",obj);
}


function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    selectedRow = null;
}



function updateRecord(formData) {
    
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.quantity;

    //selectedRow = td.parentElement.parentElement;

    obj={
        name: selectedRow.cells[0].innerHTML ,
        email:selectedRow.cells[1].innerHTML ,
        number:selectedRow.cells[2].innerHTML ,
        number:selectedRow.cells[3].innerHTML 

    }

      console.log(obj);

    var description=selectedRow.cells[1];
    var a=description.innerHTML;

    axios.get("https://crudcrud.com/api/2dc13f35c7454d8aa49af0e0d69f6f08/data")
    .then(response => {

        for(var i=0; i<response.data.length;i++)
        {
            if(response.data[i].description==a){
                console.log("fetching id");
                axios.put("https://crudcrud.com/api/2dc13f35c7454d8aa49af0e0d69f6f08/data/"+response.data[i]._id,obj)
                .then(response => {
                    console.log("Data updated....");
                })
                
            }

              
        }
        
    })  
    
}


