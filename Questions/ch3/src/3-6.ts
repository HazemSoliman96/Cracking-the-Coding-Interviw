export default class AnimalQueue {

  private animals: string[];
  private types: string[];

  constructor() {
    this.animals = [];
    this.types = [];
  }

  enqueue(animal: string, type: string): void {
    this.animals.push(animal);
    this.types.push(type);
  }

  dequeueAny(): string {
    this.types.shift();
    return this.animals.shift();
  }

  dequeueDog(): string {
    const index: number = this.types.indexOf('dog');
    this.types.splice(index, 1);
    return this.animals.splice(index, 1).join('');
  }

  dequeueCat(): string {
    const index: number = this.types.indexOf('cat');
    this.types.splice(index, 1);
    return this.animals.splice(index, 1).join('');
  }
}