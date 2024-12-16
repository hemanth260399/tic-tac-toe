let box = document.getElementById("tboxes");
let boxarray = ["", "", "", "", "", "", "", "", ""]
let flag = false
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let checkWin = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        let condition = winningConditions[i]
        let temparray = boxarray.every((data) => data !== "")
        if (temparray) {
            alert("It's a draw!")
            return true
        }
        if (boxarray[condition[0]] === boxarray[condition[1]] && boxarray[condition[1]] === boxarray[condition[2]] && boxarray[condition[1]] !== "") {
            alert(`Player ${boxarray[condition[0]]} wins!`)
            return { winner: boxarray[condition], status: true }
        }
    }
    return false
}
box.addEventListener("click", (event) => {
    if (boxarray[event.target.id] === "") {
        if (flag === false) {
            boxarray[event.target.id] = "X"
            event.target.innerText = "X"
            flag = true
        } else {
            boxarray[event.target.id] = "O"
            event.target.innerText = "O"
            flag = false
        }
        checkWin()
    }
})

console.log(boxarray)