 class Chronometer {
  constructor() {
    this.currentTime = 0;  
    this.intervalId = null; 
  } 
  
  start(callback) {
    this.intervalId = setInterval(() => { 
      this.currentTime++;
      if(callback){
        callback();
      }
    }, 1000 ); 
    return this.intervalId;
  }

  getMinutes() {
    return  Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber() {
    if (value > 10) {
      return "0" + value 
    }
      return $(value); 
  }

  stop() {
   return  clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    const seconds = this.computeTwoDigitNumber( this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `$(minutes):$(seconds)`;
  }
} 




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
