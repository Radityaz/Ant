var Data = {};
var DataKey = ["food", "worker", "larva","day","resource"];

if ("ant.newplayer" in localStorage) {
  OldPlayer();
} else {
  NewPlayer();
}

function NewPlayer() {
  localStorage.setItem("ant.newplayer", " ");
  Data.food = 500;
  Data.worker = 25;
  Data.larva = 5;
  Data.day = 1
  Data.resource = 250;

  for (let index = 0; index < Object.keys(Data).length; index++) {
    localStorage.setItem("ant.data" + index, Object.values(Data)[index]);
  }
}

function OldPlayer() {
  for (let index = 0; index < DataKey.length; index++) {
    Data[DataKey[index]] = localStorage.getItem("ant.data" + index);
  }
}

setInterval(() => {
    for (let index = 0; index < Object.keys(Data).length; index++) {
        localStorage.setItem("ant.data" + index, Object.values(Data)[index]);
      }
      console.log(Data)
}, 1000);
