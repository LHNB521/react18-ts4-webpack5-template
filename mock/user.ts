import Mock from 'mockjs'
const Random = Mock.Random
const getData = Mock.mock('/getData', 'post', () => {
  console.log('getData')
  const ret = Mock.mock({ username: '@cname', age: Random.integer(60, 100), ID: Random.id() })
  return {
    status: 200,
    data: ret
  }
})

export { getData }
