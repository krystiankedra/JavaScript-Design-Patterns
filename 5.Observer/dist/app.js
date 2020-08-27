class Subject {
    constructor() {
        this.usersData = [{ name: 'Krystian' }, { name: 'Paweł' }];
        this.observer = [];
    }
    subscribe(fn) {
        this.observer.push(fn);
    }
    unsubscribe(fn) {
        this.observer = this.observer.filter(obsFn => obsFn !== fn);
    }
    triger() {
        this.observer.forEach(fn => fn.call(this, this.usersData));
    }
}
const subject = new Subject();
const observer1 = (args) => console.log(`${args.map(({ name }) => name)} observer 1`);
const observer2 = (args) => console.log(`${args.map(({ name }) => name)} observer 2`);
const observer3 = (args) => console.log(`${args.map(({ name }) => name)} observer 3`);
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.triger();
subject.unsubscribe(observer2);
subject.triger();
//# sourceMappingURL=app.js.map