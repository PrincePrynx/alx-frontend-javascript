export default class Pricing {
    constructor(amount, currency) {
      this._amount = amount;
      this._currency = currency;
    }
  
    get amount() {
      return this._amount;
    }
  
    set amount(quantity) {
      this._amount = quantity;
    }
  
    get currency() {
      return this._currency;
    }
  
    set currency(quantity) {
      this._currency = quantity;
    }
  
    displayFullPrice() {
      return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
  
    static convertPrice(amount, conversionRate) {
      return amount * conversionRate;
    }
  }
  