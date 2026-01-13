"use strict";

import { TSprite } from "libSprite";

export class TObstacle{
    #spUP;
    #spDown;
    constructor(aSpcvs, aSPI){
        this.#spDown = new TSprite(aSpcvs, aSPI, 200, 0);
    }

    draw(){
        this.#spDown.draw();
    }
} //End of class TObstacle