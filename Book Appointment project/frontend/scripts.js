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
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    
    obj={
        name:formData["name"],
        email:formData["email"],
        number:formData["number"]
    }
    axios.post("https://localhost:2000/",obj);
    console.log("Data Saved...")
    return formData;
    
}



 window.addEventListener("DOMContentLoaded", async()=>{ 
    const response= await axios.get("https://localhost:2000/");
    
        
         for(var i=0; i<response.data.length;i++)
         {   
            
            var table = document.getElementById("List").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = response.data[i].name;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = response.data[i].email;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = response.data[i].number;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = 
            `<a onClick="onEdit(this)">Edit</a>
            <a onClick="onDelete(this)">Delete</a>`;

         }

});


function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}


function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;

    obj={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value
    }

      console.log(obj);

    var email=selectedRow.cells[1];
    var a=email.innerHTML;

    axios.get("https://localhost:2000/")
    .then(response => {

        for(var i=0; i<response.data.length;i++)
        {
            if(response.data[i].email==a){
                console.log("fetching id");
                axios.put("https://localhost:2000/"+response.data[i]._id,obj)
                .then(response => {
                    console.log("Data updated....");
                }) 
            }

              
        }
        
    })

    

   
}
function updateRecord(formData) {
    
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);       
        var email=row.cells[1];
        var a=email.innerHTML;
        
         console.log(a);
       
        axios.get("https://localhost:2000/")
        .then(response => {

            for(var i=0; i<response.data.length;i++)
            {
                if(response.data[i].email==a){
                    console.log("True");
                   axios.delete("https://localhost:2000/"+response.data[i]._id)
                    .then(response => {
                        console.log("True");
                    })
                }
                  
            }
            
        })
        
        resetForm();

    }
}
