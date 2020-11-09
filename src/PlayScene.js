import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const { height, width } = this.game.config;
    this.gameSpeed = 10;

    this.ground = this.add.tileSprite(0, height, width, 26, 'ground').setOrigin(0, 1)
    this.dino = this.physics.add.sprite(0, height, 'dino-idle')
      .setCollideWorldBounds(true)
      .setGravityY(5000)
      .setOrigin(0, 1);

    this.createControll();
  }

  createControll() {
    this.input.keyboard.on('keydown_SPACE', () => {
      if (!this.dino.body.onFloor()) { return; }

      this.dino.setVelocityY(-1600);
    })
  }

  update() {
    this.ground.tilePositionX += this.gameSpeed;
  }
}

export default PlayScene;
