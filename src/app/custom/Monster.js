import EventEmitter from "eventemitter3";
import gsap from "gsap/gsap-core";

export default class Monster extends EventEmitter {
    constructor() {
        super()
        this.id = null;
        this.ref = null;
    }

    expand() {
        this.contract()
        gsap.to(`#monster${this.id}`, {width: "80%", duration: 0.1})
    }

    contract() {
        gsap.to(".monster", {width: "4%", duration: 0.1})
    }

    reset() {
        gsap.to(".monster", {width: "16.6%", duration: 0.1})
    }
}