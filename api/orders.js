let faker = require('faker')
let generateOrders = () => {
  let orders = []

  for (let id = 0; id < 30; id++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email()
    const statusList = ['Ordered', 'Pending', 'Canceled', 'Complete']
    let status = statusList[Math.floor(Math.random() * statusList.length)]
    const date = faker.date.between('2019-10-15', `${faker.date.recent()}`)
    orders.push({
      id: id,
      order_status: status,
      request_date: date,
      company_name: email,
      contact_person: `${firstName} ${lastName}`,
      carbon_quantity: faker.random.number(),
      carbon_price: faker.random.number()
    })
  }

  return { orders: orders }
}

module.exports = generateOrders
