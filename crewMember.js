class CrewMember {
  constructor(object) {
    this.position = object.position
    this.id = object.id
    this.ship_id = object.ship_id
    this.currentShip = "Looking for a Rig"
    Store.data.crewMembers.push(this)
  }

  assigned_ship(){
    return (this.spaceshipId != undefined) ? true : false
  }

  engageWarpDrive(){
    return (this.assigned_ship() && this.position == 'Pilot') ? this.currentShip.warpDrive = "engaged!" : "had no effect"
  }

  setsInvisibility(){
    return (this.assigned_ship() && this.position == 'Defender') ? this.currentShip.cloaked = true : "had no effect"
  }
  chargePhasers(){
    return (this.assigned_ship()) && this.position === 'Gunner' ? this.currentShip.phasersCharge = "charged!" : "had no effect"
  }

  assignShip(spaceship) {
    this.spaceshipId = spaceship.id
    spaceship.docked = false
    this.currentShip = spaceship
  }
}
