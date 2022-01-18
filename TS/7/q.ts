class One {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Two extends One {
  job: string;
  constructor(name: string, age: number, job: string) {
    super(name, age);
    this.job = job;
  }
}
