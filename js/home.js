window.location.hash = 'Page1';

var questionindex = [
    {
        title: "Nest Gate",
        subtitle: "This is the gate between the ground and nest, Nest gate provide a defend entry so some creature or other can't go to your nest, but beware because some unwanted guest can get in your base, upgrade it to increase it's security rate."
    },
    {
        title: "Post Guard",
        subtitle: "Provide you with second defend if intruder come to your nest. increase the guard ant for maximun defend rate."
    },
    {
        title: "Discovery",
        subtitle: "Stay up to date about the playeground, there so much to discover. send a bunch of worker to get information about the outside world."
    },
    {
        title: "Storage",
        subtitle: "The place to store your resource and food, you need more space for your resource by upgrading this chamber"
    },
    {
        title: "Fungi Farm",
        subtitle: " A simple farm consist of fungi to provide you with stable food for your queen and larva. need resource and honey dew to produce   "
    },
    {
        title: "Honey Pot",
        subtitle: "A perfect place to store honey dew, thank to our fellow honey ant. your need a worker and food to increase its capacity"
    },
    {
        title: "Barrack",
        subtitle: "Your ant maybe a little vulnarable to the danger of outside world, add some strongle mandible and exo-skeleton to your tiny warrior. need resource and honey dew to increase survival rate"
    },
    {
        title: "Queen Ant",
        subtitle: "The queen responsible for the grown of the colony, she produce egg that turn into larva. consume food"
    }, 
    {
        title: "Nursery",
        subtitle: "The cute baby A.K.A larva produce honey dew for the worker ant to slurp it like syrup. it need food to grow into worker ant"
    },
    {
        title: "Worker Hut",
        subtitle: "Busy, crowd and noisy ant fill with Pheromone. The worker is reponsible for the continuation of the colony. Need honey dew to stay alive "
    }
]

setInterval(() => {
    document.getElementById("FoodProgress").value = Data.food
    document.getElementById("FoodDislay").innerHTML = Data.food

    document.getElementById("WorkerProgress").value = Data.worker
    document.getElementById("WorkerDisplay").innerHTML = Data.worker

    document.getElementById("LarvaProgress").value = Data.larva
    document.getElementById("LarvaDisplay").innerHTML = Data.larva


}, 0);

document.getElementById("Nav1").classList.add("navactive")


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

function questionmenu(index) {
    if (index > -1) {
        document.getElementById("questionmenu").classList.add("questiontrue")
        document.getElementById("questionmenu").classList.remove("questionfalse")
    } else {
        document.getElementById("questionmenu").classList.remove("questiontrue")
        document.getElementById("questionmenu").classList.add("questionfalse")
    }

    document.getElementById("q-title").innerHTML = questionindex[index].title
    document.getElementById("q-subtitle").innerHTML = questionindex[index].subtitle

    console.log(index)
}
