const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    playerInput: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        while(this.playerInput = true){
          return prevGuesses.push(getGuess())
          if (this.playerInput = this.secretNum) break
        }
        render()
    },
    getGuess: function(){
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
      while(playerInput <= 100){
        this.playerInput = parseInt(this.playerInput)
        return this.playerInput
        if (this.playerInput <1) break
      }
    }
    render: function({
      if(this.playerInput === this.secretNum){
        console.log(`Congrats! You guessed th number in ${prevGuesses.length}!`)
      } else{
        console.log(`Your guess is too [low][high]. Previous guesses: ${this.prevGuesses.join(', ')}`)
      }
    })
  }

