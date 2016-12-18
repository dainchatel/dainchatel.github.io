class Alien {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  react() {
    if (this.health <= 0) {
      $('.alien').attr('class', 'alien death');
      $('.shadow').css('display', 'none');
    }
    else if (this.health <= 30 && this.health > 0) {
      $('.alien').attr('id', 'hurting');
    }
    else if (this.health > 30 && this.health < 70) {
      $('.alien').attr('id', 'standard');
    }
    else if (this.health >= 70 && this.health < 100) {
      $('.alien').attr('id', 'happy');
    }
    else if (this.health >= 100) {
      $('.alien').attr('class', 'alien winner');
      $('.shadow').css('display', 'none');
    }
  }

}
