const data = [
  {
    "id": 1,
    "name": "John Doe",
    "status": 1
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2
  },
  {
    "id": 3,
    "name": "Adam Rocket",
    "status": 2
  },
  {
    "id": 4,
    "name": "Luis Rocket",
    "status": 1
  }
]

/**
 * Serino - Data manipulation
 * the test is to create a function that processes `data` into an output that looks like below:
 * {
 * "status-1": [
 *     {
 *       "id": 1,
 *       "name": "John Doe",
 *       "status": 1
 *     },
 *     {
 *       "id": 4,
 *       "name": "Luis Rocket",
 *       "status": 1
 *     }
 *   ],
 *   "status-2": [
 *     {
 *       "id": 2,
 *       "name": "Jane Doe",
 *       "status": 2
 *     },
 *     {
 *       "id": 3,
 *       "name": "Adam Rocket",
 *       "status": 2
 *     }
 *   ]
 * }
 * 
 * =============================================
 * initial thoughts:
 * 
 * function signature: 
 *  groupByStatus(data)
 * 
 * psuedocode:
 *  result = {}
 *  for item in data:
 *    result[`status-${item.status}`].push(item)
 *  
 *  return result
 * 
 * =============================================
 * 
 * Running the solution:
 *  $ node .\dataManipulation.js
 */

function groupByStatus(data) {
  // data validation
  if (!data || !Array.isArray(data)) throw new Error('invalid data')

  const result = {}

  for (let item of data) {
    // invalid data check
    if (!item?.status) continue

    // custom key from status
    const key = `status-${item.status}`

    // create initial array if there is no existing record
    if (!result[key]) result[key] = []

    // push the item to the grouped status
    result[key].push(item)
  }

  return result
}

console.log('===')
console.log(groupByStatus(data))
console.log('===')

// invalid data test
const invalidData = [
  {
    id: 1,
    name: 'john'
  },
  {
    id: 2,
    name: 'doe'
  }
]

console.log('\n\n')
console.log('===')
console.log('invalid data test: passing data without "status" key')
console.log(groupByStatus(invalidData))
console.log('===')

console.log('\n\n')
console.log('===')
console.log('invalid data test: passing non-array data')
console.log(groupByStatus({}))
console.log('===')
