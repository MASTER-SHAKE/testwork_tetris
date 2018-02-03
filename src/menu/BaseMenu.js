
import {Text, TextStyle, Graphics} from 'pixi.js';

import State from '../utils/State';

export const fancyTextStyle = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 42,
    fontWeight: 'bold',
    fill: ['#a9206f', '#34cb1b'],
    stroke: '#000000',
    strokeThickness: 4});

export const simpleTextStyle = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 18,
    fill: '#a9206f',
    stroke: '#07ff05',
    strokeThickness: 4});



/**
 * Display Game Over screen
 */
export default class BaseMenu extends State {
    constructor(game, titleText = 'TETRIS', infoText = 'Press SPACE to play') {
        super();
        
        this.game = game;
        
        this.background = new Graphics();
        this.background.beginFill(0xbbafb5, 0.5);
        this.background.drawRect(0, 0, this.game.app.renderer.width, this.game.app.renderer.height);
        this.background.endFill();
        this.addChild(this.background);
        
        this.title = new Text(titleText, fancyTextStyle);
        this.title.anchor.set(0.5);
        this.title.x = this.game.app.view.width * 0.5;
        this.title.y = this.game.app.renderer.height * 0.20;
        this.addChild(this.title);
        
        this.info = new Text(infoText, simpleTextStyle);
        this.info.anchor.set(0.5);
        this.info.x = this.game.app.view.width * 0.5;
        this.info.y = this.game.app.renderer.height * 0.90;
        this.addChild(this.info);
        this.infoVisibilityCounter = 20;
        
    }
    
    update(dt) {
        if (--this.infoVisibilityCounter == 0) {
            this.infoVisibilityCounter = 45;
            this.info.visible = !this.info.visible;
        }
    }
}
