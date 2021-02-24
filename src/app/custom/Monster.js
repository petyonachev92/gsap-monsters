import EventEmitter from "eventemitter3";
import gsap from "gsap/gsap-core";

export default class Monster extends EventEmitter {
    constructor() {
        super()
        this.id = null;
        this.ref = null;
    }

    expand() {
        gsap.to(`#monster${this.id}`, {width: "80%", duration: 0.5, id: expand})
    }

    contract() {
        gsap.to(`#monster${this.id}`, {width: "4%", duration: 0.5, id: contract})
    }

    reset() {
        gsap.to(`#monster${this.id}`, {width: "16.6%", duration: 0.5, id: reset})
    }
}