export default class myDog {
  constructor () {
    this.name = 'Max',
    this.sound = 'zzzz',
    this.breed = 'German Shepherd / Mastiff',
    this.fetchedBalls = 0
  }

  barksInTheGarden () {
    this.sound = 'Woof! Woof! WOOF!!'
    return this.sound
  }

  fetchBalls () {
    this.fetchedBalls++
  }
}
