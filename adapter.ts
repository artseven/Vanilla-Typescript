interface iPhone {
    useLightning();
}

interface Android {
    useMicroUSB()
}

class iPhone7  implements iPhone {
    useLightning() {
        console.log('Using lightning port..');
    }
}

class GooglePixel implements Android  {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: iPhone;

    constructor(iphone: iPhone) {
        this.iphoneDevice = iphone;
    }

    public useMicroUSB() {
        console.log('Want to use micro USB, converting to Lightning...');
        this.iphoneDevice.useLightning();
    }
}


let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();