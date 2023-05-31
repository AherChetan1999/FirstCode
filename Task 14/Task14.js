var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event

let user_record= new Array();
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;
  var newItem3 = document.getElementById('item3').value;
 

    
     user_record=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("Users")):[]

     user_record.push({
        "Username":newItem,
        "Email": newItem2,
        "Phone_no": newItem3

     })

     localStorage.setItem(newItem,JSON.stringify(user_record));

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));
  li.appendChild(document.createTextNode(newItem3));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('delete'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  var editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are You Sure?'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);    
      localStorage.removeItem("user_record");
    }
  }
}

// Edit item
function editItem(e)
{
  if(e.target.classList.contains('edit'))
  {
    if(confirm('Are You Sure?'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);    
    }
  }
}


