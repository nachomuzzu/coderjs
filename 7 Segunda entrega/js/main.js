function tableFromJson() {

	let mapData = 
		[
			[
				"1. [DM] SKooD - Closer",
				"t1 7, t2 0",
				"Adidas'eP (3)",
				"Adidas'eP (5)",
				"Adidas'eP (6)",
				"Adidas'eP (7)"
			],
			[
				"2. TESTMAP",
				"t1 15, t2 0",
				"Adidas'eP (10 + 1)",
				"Adidas'eP (12 + 1)",
				"Adidas'eP (13 + 1)",
				"Adidas'eP (14 + 1)"
			],
			[
				"3. TESTMAP2",
				"t1 23, t2 0",
				"Adidas'eP (18 + 1)",
				"Adidas'eP (20 + 1)",
				"Adidas'eP (21 + 1)",
				"Adidas'eP (22 + 1)"
			]
		]


	let col = [];
	for (let i = 0; i < mapData.length; i++) {
		for (let key in mapData[i]) {
			col.indexOf(key) === -1 &&
				col.push(key);

		}
	}

	let table = document.createElement("table");
	table.setAttribute('class', 'cEF_table')

	let tr = table.insertRow(-1);                //fila 

	for (let i = 0; i < col.length; i++) {
		let th = document.createElement("th");  //header
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	//Añadir data del json como filas

	for (let i = 0; i < mapData.length; i++) {

		tr = table.insertRow(-1);                

		for (let j = 0; j < col.length; j++) {
			let tabCell = tr.insertCell(-1);
			tabCell.innerHTML = mapData[i][col[j]];
		}
	}

	let divShowData = document.getElementById('showData');
	divShowData.innerHTML = "";
	divShowData.appendChild(table);

}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
	tableFromJson();
	Toastify({
		text: "Tabla creada",
		duration: 1700,
		style: {
			background: "linear-gradient(to right, #880000, #660000)",
		},
	}).showToast();
})



let button2 = document.getElementById("btn2");
button.addEventListener("click", () => {
	tableFromJson();
	Toastify({
		text: "Tabla creada",
		duration: 1700,
		style: {
			background: "linear-gradient(to right, #880000, #660000)",
		},
	}).showToast();
})


