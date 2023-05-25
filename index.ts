import type { BaseServer } from "./BaseServer";

class Test{
    public base: BaseServer = BaseServer();

    constructor(){
        this.base.show();
    }
}

var x = new Test();