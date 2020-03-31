export class CounterService {
    activeToInactiveCounter = 2;
    inactiveToActiveCounter = 2;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        this.inactiveToActiveCounter--;
        console.log(this.activeToInactiveCounter++);
    }

    incrementInActiveToActive(){
        this.inactiveToActiveCounter++;
        this.activeToInactiveCounter--;
        console.log(this.inactiveToActiveCounter);
    }
}