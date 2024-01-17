//计分
let playerWins = 0;
let computerWins = 0;

//电脑选择
function getComputerChoice() {
    const choices = ["石头", "剪刀", "布"];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "平局！";
    } else if (
      (playerChoice === "石头" && computerChoice === "剪刀") ||
      (playerChoice === "剪刀" && computerChoice === "布") ||
      (playerChoice === "布" && computerChoice === "石头")
    ) {
      return "你赢了！";
    } else {
      return "电脑赢了！";
    }
  }


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('result').innerText = result;

    if (result.includes("你赢了")) {
      playerWins++;
    } else if (result.includes("电脑赢了")) {
      computerWins++;
    }

    document.getElementById('score').innerText = `当前比分： 你 ${playerWins} - ${computerWins} 电脑`;

    if (playerWins === 5 || computerWins === 5) {
      if (playerWins > computerWins) {
        document.getElementById('result').innerText = "你赢得了比赛！";
      } else {
        document.getElementById('result').innerText = "电脑赢得了比赛！";
      }

      // 禁用按钮，比赛结束
      document.getElementById('rock').disabled = true;
      document.getElementById('paper').disabled = true;
      document.getElementById('scissors').disabled = true;
    }
  }


 // 添加事件监听器
 document.getElementById('rock').addEventListener('click', () => playRound('石头'));
 document.getElementById('paper').addEventListener('click', () => playRound('布'));
 document.getElementById('scissors').addEventListener('click', () => playRound('剪刀'));
