

const url = 'http://data.9188.group'
// const url = 'http://10.0.10.2:3000'
// const url = 'http://192.168.0.101:3000'

const admin = {
  dataAll: `${url}/admin/zhuj`,
  login: `${url}/admin/login`,
  queryCurrent: `${url}/admin/userinfo`,
  edit: `${url}/admin/edit`,
}

export default {
  ...admin
}