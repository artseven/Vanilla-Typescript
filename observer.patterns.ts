
interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

interface Observer{
    update(temperature: number);
}

// subject
class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[]=[];

    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    public registerObserver(o: Observer) {
        this.observers.push(o);
    }

    public removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    public notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
// observer
class TemperatureDisplay {

}