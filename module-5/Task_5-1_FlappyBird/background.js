"use strict";
import { TSprite } from "libSprite"; 

export class TBackground{
    #spriteBackground;
    #spriteGround;
    
    constructor(aSpcvs, aSPI){ //aSPI: SpriteInfo
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0, 0);
        this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, aSPI.background.height - aSPI.ground.height);
    }

    draw(){
        this.#spriteBackground.draw();
        this.#spriteGround.draw();
    }
}