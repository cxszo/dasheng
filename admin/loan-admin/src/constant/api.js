


const common = {
  proList: `/notcontrol/loan/data/getAllProduct`
}
const data = {
  dataAll: `/notcontrol/loan/data/queryDataTotal`,
  dataDetail: `/notcontrol/loan/data/queryDataDetailList`
}
const repay = {
  repay: `/notcontrol/loan/data/accountRepay.go`
}
const proSetting = {
  proSettingList: `/notcontrol/loan/data/accountQuery.go`,
  modify: `/notcontrol/loan/data/modify.go`,
  data_all: `/notcontrol/loan/data/queryDataTotal.go`,
}
const trend = {
  dataTrendLine: '/notcontrol/loan/data/queryDataTrendLine.go',
  dataTrendList: '/notcontrol/loan/data/queryDataTrendList.go',
  dataTrendForm: '/notcontrol/loan/data/queryTransformTrend',
  dataTrendFormLine: '/notcontrol/loan/data/queryTransformTrendLine',
  dataTrendFormList: '/notcontrol/loan/data/queryTransformTrendList'
}
export default {
  ...common,
  ...data,
  ...repay,
  ...proSetting,
  ...trend,
}