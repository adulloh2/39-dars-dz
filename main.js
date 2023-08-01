let name = document.getElementById("name");
let price = document.getElementById("price");
let kg = document.getElementById("kg");
let submit = document.getElementById("submit");
let tbody = document.getElementById("tbody");
let totalSumma = document.querySelector("strong");
let i = 1;

function summa() {
    let total = 0;
    let summ = document.querySelectorAll(".sum");
    summ.forEach(item => {
        total += +item.innerHTML;
    });
    totalSumma.innerHTML = total;
}

function dell() {
    let dell = document.querySelectorAll(".del");
    dell.forEach(item => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
            summa();
        })
    });
}

submit.addEventListener("click", () => {
    if (name.value == "" || price.value == "" || kg.value == "") {
        alert("Formani to'ldiring");
    } else {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        td5.classList.add("sum");
        let td6 = document.createElement("td");
        td6.classList.add("del");

        td1.innerHTML = i;
        td2.innerHTML = name.value;
        td3.innerHTML = price.value;
        td4.innerHTML = kg.value;
        td5.innerHTML = kg.value * price.value;
        td6.innerHTML = "Delete";
        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
        i++;
        summa();
        dell();
        name.value = "";
        price.value = "";
        kg.value = "";
    }
})

