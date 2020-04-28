let faker = require('faker')
const moment = require('moment')
let generateOrders = () => {
  let orders = []
  let sum_carbon_price = 0
  let sum_carbon_quantity = 0

  for (let id = 0; id < 30; id++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    const statusList = ['Ordered', 'Pending', 'Canceled', 'Complete']
    let status = statusList[Math.floor(Math.random() * statusList.length)]
    const date = faker.date.between(
      '2019-12-15',
      `${moment().format('YYYY-MM-DD')}`
    )
    const carbon_quantity = faker.random.number()
    const carbon_price = faker.random.number() * 10
    sum_carbon_quantity += carbon_quantity
    sum_carbon_price += carbon_price
    orders.push({
      id: id,
      order_status: status,
      request_date: date,
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      contact_person: `${firstName} ${lastName}`,
      carbon_quantity: carbon_quantity,
      carbon_price: carbon_price,
      company_name: faker.company.companyName(),
      source_of_carbon: faker.hacker.noun()
    })
  }
  // const summary = {
  //   total_carbon_stock: 200000,
  //   total_carbon_reserve: 200000,
  //   sum_carbon_sold: 200000,
  //   sum_carbon_income: 200000
  // }
  const summary = {
    total_carbon_stock: sum_carbon_quantity * 1.2,
    total_carbon_reserve: (sum_carbon_quantity * 1.2) / 2,
    sum_carbon_sold: sum_carbon_quantity,
    sum_carbon_income: sum_carbon_price
  }
  return { orders: orders, summary: summary }
}

module.exports = generateOrders
