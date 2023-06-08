

setInterval(() => {
    document.getElementById("FoodProgress").value = Data.food
    document.getElementById("FoodDislay").innerHTML = Data.food

    document.getElementById("WorkerProgress").value = Data.worker
    document.getElementById("WorkerDisplay").innerHTML = Data.worker

    document.getElementById("LarvaProgress").value = Data.larva
    document.getElementById("LarvaDisplay").innerHTML = Data.larva


}, 0);


function ActiveButton(index) {
    if (index == 1) {
        document.getElementById("Nav1").classList.add("navactive")
        document.getElementById("Nav2").classList.remove("navactive")
        document.getElementById("Nav3").classList.remove("navactive")
    }

    if (index == 2) {
        document.getElementById("Nav2").classList.add("navactive")
        document.getElementById("Nav1").classList.remove("navactive")
        document.getElementById("Nav3").classList.remove("navactive")
    }

    if (index == 3) {
        document.getElementById("Nav3").classList.add("navactive")
        document.getElementById("Nav2").classList.remove("navactive")
        document.getElementById("Nav1").classList.remove("navactive")
    }


}
