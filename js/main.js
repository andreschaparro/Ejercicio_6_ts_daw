class Main {
    handleEvent(evt) {
        console.log("handleEvent");
        console.log("this en handleEvent:");
        console.log(this);
    }
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        console.log("this en main:");
        console.log(this);
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
