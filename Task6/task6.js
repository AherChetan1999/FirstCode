var items1= document.getElementsByClassName('list-group-item');
//Make the 2nd item have green background color
items1[1].style.backgroundColor='green';

//Make the 3rd item invisible
items1[2].style.visibility= 'hidden';

var secondItem= document.querySelector('.list-group-item:nth-child(2)');
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
secondItem.style.color='green';

//Choose all the odd elements and make their background green using QuerySelectorALL
var odd= document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='green';
}