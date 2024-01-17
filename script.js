function getComputerChoice () {
    // 生成一个介于0至2的随机整数
    const randomNum = Math.floor(Math.random() * 3)

    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

const computerSelection = getComputerChoice();
console.log("计算机选择了：" + computerSelection);

function gameResult(playerSelection, computerSelection) {
    //平局
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    //玩家获胜
    else if (
        (playerSelection=="Rock" && computerSelection=="Scissors") ||
        (playerSelection=="Paper" && computerSelection=="Rock") ||
        (playerSelection=="Scissors" && computerSelection=="Paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    //电脑获胜
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

// 示例用法
// const playerSelection = "Rock"; 
// const result = gameResult(playerSelection, computerSelection);
// console.log(result)

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounsToWin = 3;

    // 游戏开始！！！
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);

        const playerSelection = prompt("Please enter your choice:")
        const computerSelection = getComputerChoice()

        console.log(`Computer chose: ${computerSelection}`);

        const result = gameResult(playerSelection, playerSelection)
        console.log(result);

    // 根据结果更新分数
    if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
  
      console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);

    // 判断是否有一方达到三次胜利
    if (playerScore === roundsToWin || computerScore === roundsToWin) {
        break;
      }

    }
    
    // 判断最终胜者
    if (playerScore > computerScore) {
        onsole.log("Congratulations! You win the game!");
     } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie. No clear winner.");
  }

}

game()