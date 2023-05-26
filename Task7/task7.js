//parentList
var itemList= document.querySelector('#items');
console.log(itemList.parentElement);

//lastElementchild
console.log(itemList.lastElementChild);

//lastchild
console.log(itemList.lastChild);

//firstelementchild
console.log(itemList.firstElementChild);

//firstchild
console.log(itemList.firstChild);

//nextsibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);

//createelement
var newdiv= document.createElement('div');

newdiv.className='hello';
newdiv.id='hello12';

//setAttribute
newdiv.setAttribute('title','hello div');

//createtesxtnode
var newdivTextNode= document.createTextNode("Hello world");

//appendchild
newdiv.append(newdivTextNode);
console.log(newdiv);
