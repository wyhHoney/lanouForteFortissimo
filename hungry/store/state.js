let state={
  name:'',
  id:'',
  // 根据关键词搜索后的地址name
  afterSearchName:'',
  //经纬度
  weizhi:'',
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
  //用户名id
  ueseId:Number,
  proArr:{},
  //存取地址
  waimaiAddress:'',
  //商品分类的类名
  foodKindName:"",

  //王义豪声明的vuex变量
  UserName11:'',
  GetName:{},//存储添加所选的收货地址
  UserNameA:'',//存储添加地址收获人名字

  //曾光声明的vuex变量
  zg_name:'',//用户名传值
  nameArrAdjustIn:[],//定义数组判断是否登陆过
};
export default state
