const dataSource = [];

for(var i = 0; i<52; i++){
  dataSource.push({
    key: i,
    date: '2017-12-7',
    name: '有鱼贷王'+i,
    uv: '2000'+i,
    prePush: '440'+i,
    pushOrder: '200'+i,
    examine: '100'+i,
    pass: '20'+i,
    signFinish: '100'+i,
    loanSuccess: '20'+i,
    loanMoney: '3000'+i,
    earning: '￥300',
    arpu: '￥8',
    cost: '￥10'
  })
}




export default {
  dataSource
}