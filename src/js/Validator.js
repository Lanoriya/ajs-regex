export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let check = /^(?!.*[\d]{4,})(?![\d_-])(?!.*[\d_-]$)[\w-]+$/.test(this.name);
    return check;
  }
}
