class Spaceship {
  constructor(object) {
    this.name = object.name
    this.id = object.id
    this.phasers = object.phasers
    this.shields = object.shields
    this.cloaked = false;
    this.warpDrive = 'disengaged'
    this.docked = true
    this.phasersCharge = "uncharged"
    Store.data.spaceships.push(this)
  }
   
}
