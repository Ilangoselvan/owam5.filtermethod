const employees = [
	 { name: "David Carlson", age: 30 },
	 { name: "John Cena", age: 34 },
	 { name: "Mike Sheridan", age: 25 },
	 { name: "John Carte", age: 50 }
];
b=[];
employees.forEach(function(jon){
	if(jon.age>30){
		b.push(jon);
	}
})
console.log(b);