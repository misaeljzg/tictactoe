let currentTurn = "X"

const Gameboard = (function () {
    let _board = [];
    _board.push(document.getElementById("c1"));
    _board.push(document.getElementById("c2"));
    _board.push(document.getElementById("c3"));
    _board.push(document.getElementById("c4"));
    _board.push(document.getElementById("c5"));
    _board.push(document.getElementById("c6"));
    _board.push(document.getElementById("c7"));
    _board.push(document.getElementById("c8"));
    _board.push(document.getElementById("c9"));

    function setListeners() {
       _board.forEach(element => {
            element.addEventListener("click", e => _toggleEvent(e));
       });
    }

    function _toggleEvent(element) {
        if (element.target.innerHTML === "") {
            element.target.innerHTML = currentTurn;
            currentTurn = currentTurn === "X" ? "O" : "X"
            _checkIfWon();
        }
    }

    function _checkIfWon() {
        
    }

    function show() {

    }

    return {
        setListeners,
    }

})();

Gameboard.setListeners();


const Player = (name, level) => {
    const getName = () => name;
    return { getName };
};