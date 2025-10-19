export class Board {

    constructor() {
        this.element = document.getElementById("XO-game");
        this.X = document.createElement("img");
        this.X.src = "https://th.bing.com/th/id/R.2358d9b0f3ff010be29776d69e0ae74a?rik=RNziEsLZiD6Swg&riu=http%3a%2f%2fwww.drodd.com%2fimages15%2fred-x21.jpg&ehk=clX0s%2fYDqB0vAPY1Y%2bW%2fWJPp%2fddsH6J9Ez8NaPW6lpw%3d&risl=&pid=ImgRaw&r=0";
        this.O = document.createElement("img");
        this.O.src = "https://th.bing.com/th?id=OIF.RxSGc9%2fbQeAzHnSHEACOeg&o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
        this.turn = 0


        this.isCreated = false;
        this.gameOver = false;



    }

    createBoard() {
        if (this.isCreated) return
        this.isCreated = true;
        const table = document.createElement("table");
        for (let i = 0; i < 3; i++) {
            const row = document.createElement("tr")
            row.style.width = "33%"
            for (let j = 0; j < 3; j++) {
                const column = document.createElement("td")

                this.setCurrentSymbol(column)


                row.appendChild(column)
            }
            table.appendChild(row)
        }
        this.element.appendChild(table)
    }

    getCurrentSymbol() {
        return this.turn % 2 === 0 ? this.X : this.O;
    }

    setCurrentSymbol(column) {
        column.addEventListener("click", () => {
            if (this.gameOver) return;
            if (column.children.length === 0) {
                const symbol = this.getCurrentSymbol().cloneNode(true);
                column.appendChild(symbol);
                this.turn++;

                setTimeout(() => {
                    const winner = this.isWin();
                    if (winner) {
                        alert(`${winner === this.X.src ? "X" : "O"} winner`);
                        this.gameOver = true;
                    }
                }, 200)

            }

        });


    }

    isWin() {
        const table = this.element.querySelector("table");
        if (!table) return null;

        const cells = Array.from(table.querySelectorAll("td"));
        if (cells.length !== 9) return null;

        const get = (r, c) => {
            const cell = cells[r * 3 + c];
            return cell && cell.children[0] ? cell.children[0].src : null;
        };

        for (let i = 0; i < 3; i++) {

            if (get(i, 0) && get(i, 0) === get(i, 1) && get(i, 1) === get(i, 2)) return get(i, 0);

            if (get(0, i) && get(0, i) === get(1, i) && get(1, i) === get(2, i)) return get(0, i);
        }


        if (get(0, 0) && get(0, 0) === get(1, 1) && get(1, 1) === get(2, 2)) return get(0, 0);
        if (get(0, 2) && get(0, 2) === get(1, 1) && get(1, 1) === get(2, 0)) return get(0, 2);

        return null;
    }
}






