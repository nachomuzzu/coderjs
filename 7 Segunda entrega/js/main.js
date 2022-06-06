	function tableFromJson() {

		let mapData = [[
			"1. Bc ft. SebastiaN - Bang Bang",
			"XpR 3, eP 4",
			"Narumiya'eP! (3)",
			"XpRRon (2)",
			"PCHZYeP! (1)",
			"XpRNaval (1)"
		],
		[
			"2. Gteatero - Insidious Deeps II",
			"XpR 5, eP 10",
			"[q+e]sheldon (4)",
			"Narumiya'eP! (5)",
			"XTempR\/\/ (1)",
			"XpRRon (3)"
		],
		[
			"3.  stan ft ShondeX - Arkaster Reign II",
			"XpR 9, eP 13",
			"XpRRon (6)",
			"burnout|ep (2)",
			"[q+e]sheldon (5)",
			"XTempR\/\/ (2)"
		],
		[
			"4.  ShondeX ft. Goku ft. stan - The Deep Abyss II",
			"XpR 15, eP 14",
			"XpRfl0w (3)",
			"XpRRon (8)",
			"XpRNaval (2)",
			"burnout|ep (3)"
		],
		[
			"5.  Gteatero ft. BriaN ft. KarNikkl - Deluxor",
			"XpR 16, eP 18",
			"PCHZYeP! (3)",
			"XpRfl0w (4)",
			"JARI'eP! (1)"
		],
		[
			"6.  facu - Violet Hexagon",
			"XpR 22, eP 24",
			"XpRNaval (6)",
			"[q+e]sheldon (8)",
			"XTempR\/\/ (3)",
			"XpRAkinnius (1)"
		],
		[
			"7.  stan - Overdrive II",
			"XpR 27, eP 28",
			"XpRNaval (10)",
			"Narumiya'eP! (8)",
			"burnout|ep (4)",
			"XpRRon (9)"
		],
		[
			"8.  Arrow feat. Chipy feat. NikotiN - Crash Report II",
			"XpR 34, eP 32",
			"XpRRon (13)",
			"XpRfl0w (7)",
			"Narumiya'eP! (10)",
			"burnout|ep (6)"
		],
		[
			"9.  AquiL ft. ShuX - Sheer Madness II",
			"XpR 38, eP 37",
			"Narumiya'eP! (14)",
			"|-XpR-|CARRETA-FURACAO (6)",
			"XpRNaval (11)",
			"burnout|ep (7)"
		],
		[
			"10.  AbodyRulez ft. TenTimes - Dark Doomsday",
			"XpR 43, eP 39",
			"XpRAkin (4)",
			"|-XpR-|CARRETA-FURACAO (8)",
			"GOTZHAEP (5)",
			"[q+e]sheldon (9)"
		],
		[
			"11.  Bc ft. SebastiaN - Bang Bang",
			"XpR 46, eP 44",
			"[q+e]sheldon (13)",
			"XpRNaval (13)",
			"|-XpR-|CARRETA-FURACAO (9)",
			"[q+e]vicious.ep (1)"
		],
		[
			"12. Gteatero - Insidious Deeps II",
			"XpR 50, eP 47",
			"XpRAkin (7)",
			"[q+e]sheldon (15)",
			"XpRNaval (14)",
			"Narumiya'eP! (15)"
		],
		[
			"13.  stan ft ShondeX - Arkaster Reign II",
			"XpR 54, eP 50",
			"XpRNaval (17)",
			"GOTZHAEP (7)",
			"[q+e]sheldon (16)",
			"|-XpR-|CARRETA-FURACAO (10)"
		],
		[
			"14.  ShondeX ft. Goku ft. stan - The Deep Abyss II",
			"XpR 57, eP 54",
			"PCHZYeP! (6)",
			"XpRNaval (19)",
			"[q+e]sheldon (17)",
			"|-XpR-|CARRETA-FURACAO (11)"
		],
		[
			"15.  Gteatero ft. BriaN ft. KarNikkl - Deluxor",
			"XpR 62, eP 58",
			"XpRNaval (23)",
			"Narumiya'eP! (18)",
			"XpRRon (14)",
			"PCHZYeP! (7)"
		],
		[
			"16.  facu - Violet Hexagon",
			"XpR 67, eP 63",
			"XpRNaval (27)",
			"GOTZHAEP (10)",
			"ToXa^|eP! (2)",
			"XpRRon (15)"
		],
		[
			"17.  stan - Overdrive II",
			"XpR 72, eP 65",
			"XpRNaval (30)",
			"XpRAkin (9)",
			"XpRRon (15)",
			"[q+e]sheldon (19)"
		],
		[
			"18.  Arrow feat. Chipy feat. NikotiN - Crash Report II",
			"XpR 75, eP 73",
			"GOTZHAEP (14)",
			"XpRRon (18)",
			"[q+e]sheldon (21)",
			"ToXa^|eP! (4)"
		],
		[
			"19.  AquiL ft. ShuX - Sheer Madness II",
			"XpR 80, eP 75",
			"XpRfl0w (10)",
			"ToXa^|eP! (6)",
			"XpRAkin (10)",
			"XpRRon (19)"
		],
		[
			"20.  AbodyRulez ft. TenTimes - Dark Doomsday",
			"XpR 87, eP 78",
			"XpRNaval (34)",
			"XpRRon (22)",
			"Narumiya'eP! (20)",
			"ToXa^|eP! (7)"
		]
		]

		let col = [];
		for (let i = 0; i < mapData.length; i++) {
			for (let key in mapData[i]) {
				if (col.indexOf(key) === -1) {
					col.push(key);
				}
			}
		}

		let table = document.createElement("table");
		table.setAttribute('class', 'cEF_table')

		let tr = table.insertRow(-1);                   

		for (let i = 0; i < col.length; i++) {
			let th = document.createElement("th");      
			th.innerHTML = col[i];
			tr.appendChild(th);
		}

		
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

	let button = document.getElementById("button");
	button = document.addEventListener("click", () => {
		tableFromJson();
	})
