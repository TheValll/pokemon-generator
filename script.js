const pokemonContainer = document.getElementById("pokemonContainer");
const next = document.getElementById("next");
const addedPokemonNumbers = ["pikachu"];

const addCard = async () => {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 150 + 1);
  const capitalizeFLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      if (!addedPokemonNumbers.includes(data.name)) {
        addedPokemonNumbers.push(data.name);
        pokemonContainer.innerHTML += `
    <div class="pokemon electric ${data.types[0].type.name}">
        <div class="imgContainer">
        <img
            src="${data.sprites.front_default}"
            alt="${data.name}"
         />
        </div>
        <div class="info">
        <h3 class="name">${capitalizeFLetter(data.name)}</h3>
        <span class="type">Type: <span>${data.types[0].type.name}</span></span>
        </div>
    </div>
    `;
      }
    });
};

for (i = 0; i < 14; i++) {
  addCard();
}

next.addEventListener("click", () => {
  for (i = 0; i < 14; i++) {
    addCard();
  }
});
