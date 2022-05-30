const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        do{this.prevGuesses.push(this.getGuess());
          this.render();} while 
          (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum);
          this.prevGuesses.push(this.getGuess())
    },
    getGuess: function(){
      let guess
      while(!guess || guess < this.smallestNum || guess > this.biggestNum)
      {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      }
      return guess;
    },
    render: function(){
      let notice = ''
      if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum){
        notice = (`Congrats! You guessed th number in ${this.prevGuesses.length}!`)
      } else{
        notice = (`Your guess is not correct. Previous guesses: ${this.prevGuesses.join(', ')}`)
      }
      alert(notice)
    }
  }

game.play()

  

