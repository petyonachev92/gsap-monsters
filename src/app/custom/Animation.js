import Monster from "./Monster"
import gsap from "gsap/all"

export default class Animation {
    constructor(){
        this.monsters = []

    }

    createMonsters() {
        let arr = document.getElementsByClassName("monster")
        for (let i = 0; i < arr.length; i++){
            let monster = new Monster()
            monster.id = i;
            monster.name = arr[i].textContent;
            arr[i].id = 'monster' + i;
            monster.ref = document.getElementById(`monster${i}`)
            this.monsters.push(monster);
        }
    }

    init() {
        this.createMonsters()
        this.monsters.forEach(monster => {
            monster.ref.addEventListener("mouseenter", () => monster.expand())
            monster.ref.addEventListener("mouseleave", () => monster.contract())
            monster.ref.addEventListener("mouseleave", () => monster.reset())
        });
                
    }
}