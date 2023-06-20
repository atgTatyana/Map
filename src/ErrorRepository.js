export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Alarm Indication Signal'],
      [4, 'Remote Alarm Indication'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
