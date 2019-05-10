let state={
  name:'',
  id:'',
  // 根据关键词搜索后的地址name
  afterSearchName:'',
  //根据光吃搜索后的经纬度
  afterSearchLatitude:'',
  afterSearchLongitude:'',
  //店铺id
  shopId:Number,
  //购物车所有价格
  allPrice:Number,
  //购物车所有数量
  allNum:Number
  ,//购买特殊食物的数组
  buy_specs_arr: [],
  buy_specs_name: '',//将要购买的物品名称
  buy_specs_kind: '',//将要购买的特殊商品的种类
// 商品页的头
  shop_head_title:'',
//  商品也得描述
  shop_head_description:'',
  //商品评论数
  rating_count:Number,
  //好评率
  satisfy_rate:Number,
  //商品页图片
  image_path:'',

  //王义豪声明的vuex变量
  UserName11:'',
};
export default state
