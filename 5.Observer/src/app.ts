interface ISubject {
  subscribe(fn: Function): void
  unsubscribe(fn: Function): void
  triger(): void
}

interface IUser {
  name: string
}

class Subject implements ISubject {
  private usersData: IUser[] = [{ name: 'Krystian' }, { name: 'Paweł' }]
  private observer: Function[] = []

  subscribe(fn: Function) {
    this.observer.push(fn)
  }

  unsubscribe(fn: Function) {
    this.observer = this.observer.filter(obsFn => obsFn !== fn)
  }

  triger() {
    this.observer.forEach(fn => fn.call(this, this.usersData))
  }
}

const subject = new Subject()

const observer1 = (args: IUser[]) => console.log(`${args.map(({ name }) => name)} observer 1`)

const observer2 = (args: IUser[]) => console.log(`${args.map(({ name }) => name)} observer 2`)

const observer3 = (args: IUser[]) => console.log(`${args.map(({ name }) => name)} observer 3`)

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.subscribe(observer3)

subject.triger()

subject.unsubscribe(observer2)

subject.triger()
