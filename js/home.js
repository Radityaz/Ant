

setInterval(() => {
    document.getElementById("FoodProgress").value = Data.food
    document.getElementById("FoodDislay").innerHTML = Data.food

    document.getElementById("WorkerProgress").value = Data.worker
    document.getElementById("WorkerDisplay").innerHTML = Data.worker

    document.getElementById("LarvaProgress").value = Data.larva
    document.getElementById("LarvaDisplay").innerHTML = Data.larva


}, 0);
