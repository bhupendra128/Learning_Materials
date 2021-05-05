
//An example of the singleton class
class FoodLogger {
    constructor() {
     this.logs = [];
    }
    log(order) {
      this.logs.push(order);
    }
  }
  
  class FoodLoggerSingleton {
    constructor(){
      if(!FoodLoggerSingleton.instance){
        FoodLoggerSingleton.instance =  new FoodLogger();
      }
    }
    getFoodLoggerInstance() {
      return FoodLoggerSingleton.instance;
    }
  }
  
  module.exports = FoodLoggerSingleton;
  
  
  const FoodLogger = require('./FoodLogger')
  
  const foodLogger = new FoodLogger().getFoodLoggerInstance()
  
  class Customer {
    constructor(order) {
      this.price = order.price
      this.food = order.foodItem
      foodLogger.log(order)
    }
    
    // other cool stuff happening for the customer
  }
  
  //An example of the strategy pattern implementation
  
  class PaymentMethodStrategy {
  
    const customerInfoType = {
      country: string
      emailAddress: string
      name: string
      accountNumber?: number
      address?: string
      cardNumber?: number
      city?: string
      routingNumber?: number
      state?: string
    }
    
    static BankAccount(customerInfo: customerInfoType) {
      const { name, accountNumber, routingNumber } = customerInfo
      // do stuff to get payment
    }
    
    static BitCoin(customerInfo: customerInfoType) {
      const { emailAddress, accountNumber } = customerInfo
      // do stuff to get payment
    }
    
    static CreditCard(customerInfo: customerInfoType) {
      const { name, cardNumber, emailAddress } = customerInfo
      // do stuff to get payment
    }
    
    static MailIn(customerInfo: customerInfoType) {
      const { name, address, city, state, country } = customerInfo
      // do stuff to get payment
    }
    
    static PayPal(customerInfo: customerInfoType) {
      const { emailAddress } = customerInfo
      // do stuff to get payment
    }
  }