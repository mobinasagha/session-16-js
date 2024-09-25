const container = document.querySelector(".container");
const difficulty = document.getElementById("difficulty");

const play = document.getElementById("play");

async function question() {
  try {
    const request = await fetch("https://opentdb.com/api.php?amount=10");
    const json = await request.json();
    // localStorage.getItem("questions", JSON.stringify(json));

    play.style.opacity = "50%";
    const orderList = document.createElement("ol");
    json.results.forEach((item) => {
      localStorage.getItem("questions", JSON.stringify(json));

      difficultyHandler = () => {
        if (item.difficulty === difficulty.value) {
          play.style.opacity = 100;
          play.setAttribute("href", "./Pages/play.html");
        }
        // } else {
        //   play.style.opacity = "50%";
        //   play.removeAttribute("href", "./Pages/play.html");
        // }
      };
      difficulty.addEventListener("click", difficultyHandler);
      const listItem = document.createElement("li");
      listItem.innerText = item.question;

      orderList.appendChild(listItem);
    });
    container.appendChild(orderList);
  } catch (error) {}
}

question();
