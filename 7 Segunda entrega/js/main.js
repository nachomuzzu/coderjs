let items = [
    ['¿Se rompió la pantalla de tu celular?', 'Desde $10.000', '¡Traelo y lo arreglamos por vos!', 'img/roto.jpg'],
    ['¿Se rompió la pantalla de tu celular?', 'Desde $10.000', '¡Traelo y lo arreglamos por vos!', 'img/roto.jpg'],

  ]
  
  let content = '';
  
  items.forEach(p => {
    content += `
      <div id="container" class="col-md-4 mt-2">
                <div class="card" style="width: 90%;">
                    <img src="${p[3]}" class="card-img-top img-fluid" alt="celular roto">
                    <div class="card-body text-white">
                        <h5 class="card-title" id="itemName">${p[0]}</h5>
                        <p class="card-text" id="itemDesc">${p[2]}</p>
                        <p class="card-text">${p[1]}</p>
                        <a href="#contacto" class="btn btnBg" id="addCart">Contactar</a>
                    </div>
                </div>
            </div>
    `
  });
  
  document.querySelector("#shop").innerHTML = content;