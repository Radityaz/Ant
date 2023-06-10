setInterval(() => {
    document.getElementById("ResourceProgress").value = Data.resource
    document.getElementById("ResourceDisplay").innerHTML = Data.resource

    document.getElementById("WorkerProgress").value = Data.worker
    document.getElementById("WorkerDisplay").innerHTML = Data.worker


}, 0);