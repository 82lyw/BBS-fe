import {request} from './request.js'

// 验证邮箱或用户名是否存在
function testExist({key, value}) {
  return request({
    url: '/api/testexist',
    params: {key, value}
  })
}

// 注册
function register(email, username, password) {
  return request({
    url: '/register',
    method: 'post',
    data: {
      email,
      username,
      password
    }
  })
}

export default {
  register,
  testExist
}