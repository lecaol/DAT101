"use strict";

import { TSprite } from "libSprite"; 

export class THero extends TSprite{
#gravity;
#speed;
    constructor(aSpcvs, aSPI) {
        super(aSpcvs, aSPI, 100, 200)
        this.animationSpeed = 10;
        this.#gravity = 9.81 / 100; 
        this.#speed = 0;
    }

    animate(){
        if (this.y < 400 - this.height){
        this.#speed += this.#gravity;       //Increase speed due to gravity
        this.y += this.#speed;              //Update position based on speed
        if(this.rotation < 90){             //limit max rotation
        this.rotation = this.#speed * 25;   //tilt based on speed
        }
        }
    } //End of animate

    flap(){
        this.#speed = -5;
    }
}