var categoryNumber = 1;
var maxCategory = 10; //When we have a database, we'll pull the number of categories from there

function arrow(direction) {
	var i = 0;
	var forms = [];
	var category = [];
	var categoryName = "";
	if (direction === 1 && categoryNumber < maxCategory) { //forwards
		categoryNumber++;
	}
	else if (direction === 0 && categoryNumber > 1) { //backwards
		categoryNumber--;
	}
	else { //cannot go past max category or under category 1
		return;
	}
	category = document.querySelector(".category");
	categoryName = document.getElementById("js-category-name");
	forms = category.getElementsByTagName("form");
	for (i = 0; i < forms.length; i++) {
		forms[i].action="category"+categoryNumber+"/game"+(i+1)+".html";
		forms[i].firstChild.value = "CATEGORY"+categoryNumber+" GAME"+(i+1); 
	}
	categoryName.innerHTML = "CATEGORY"+categoryNumber;
	return;
}



