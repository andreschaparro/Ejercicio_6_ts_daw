class Main implements EventListenerObject {
    private _myf:MyFramework;

    handleEvent(evt:Event): void {
        console.log("handleEvent");
        console.log("this en handleEvent:");
        console.log(this);
    }

    main(): void {
        this._myf = new MyFramework();
        let b:HTMLElement = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        console.log("this en main:");
        console.log(this);
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};