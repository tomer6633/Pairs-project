function hendleLevel(ev) {
    try {
        ev.preventDefault();
        var level = ev.target.elements.levels.value;
        showRelevntLevels(level);
    }
    catch (error) {
        console.error(error);
    }
}
// let level=prompt("choose a level");
function showRelevntLevels(level) {
    try {
        if (level == "level1") {
            var boxes = document.querySelectorAll(".level1");
            document.querySelectorAll(".level2,.level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            playGame(boxes);
        }
        if (level == "level2") {
            var boxes = document.querySelectorAll(".level1,.level2");
            document.querySelectorAll(".level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            playGame(boxes);
        }
        if (level == "level3") {
            var boxes = document.querySelectorAll(".level1,.level2,.level3");
            playGame(boxes);
        }
    }
    catch (error) {
        console.error(error);
    }
}
var scoreDisplay = document.querySelector("#score");
var first;
var second;
var matchCounter = 0;
var score = 0;
function playGame(boxes) {
    try {
        boxes.forEach(function (box) {
            // מסדר את הbox במסך בסדר אקראי לפי מספר
            var randomNum = Math.floor(Math.random() * 12);
            box.style.order = randomNum;
            scoreDisplay.textContent = "score:" + score;
            box.addEventListener("click", function Game() {
                if (!first && !second) {
                    first = box;
                    box.classList.add("show");
                }
                else if (first && !second) {
                    second = box;
                    box.classList.add("show");
                    if (first.innerHTML === second.innerHTML) {
                        first.style.pointerEvents = "none";
                        second.style.pointerEvents = "none";
                        first = null;
                        second = null;
                        matchCounter++;
                        score += 10;
                        scoreDisplay.textContent = "score:" + score;
                        if (matchCounter >= 6)
                            setTimeout(function () {
                                return alert("Game done! Your score is " + score + " Refresh page to replay.");
                            }, 2000);
                    }
                    else {
                        first.classList.add("hide");
                        second.classList.add("hide");
                        setTimeout(function () {
                            first.classList.remove("show");
                            second.classList.remove("show");
                            first.classList.remove("hide");
                            second.classList.remove("hide");
                            first = null;
                            second = null;
                            score -= 2;
                            if (score < 0)
                                score = 0;
                            scoreDisplay.textContent = "score:" + score;
                        }, 2000);
                    }
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
