import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

//张鹏配置的路由
import SpecificAddress from '../components/SpecificAddress'
import zpposition from '../components/zp_position'
import ZpTakeOut from '../components/zpcomponent/ZpTakeOut'
import InShop from '../components/zpcomponent/InShop'
import Shop from '../components/zpcomponent/Shop'
import SureOrder from '../components/zpcomponent/SureOrder'
import InVoice from '../components/zpcomponent/Invoice'
import ChoodeAddress from '../components/zpcomponent/ChooseAdress'
import AddNewAddress from '../components/zpcomponent/AddNewAddress'

//曾光配置的路由
import register from '../components/G-login/zg_register'//重置密码页面的路由
import glogin from '../components/G-login/G-login'//登录页面的路由
import explain from '../components/zg_AccountInformation/Explain'
import basice from '../components/zg_AccountInformation/zg_basic'
import Payment from '../components/zg_AccountInformation/Payment'//在线支付页面
import exchangeMembers from '../components/zg_AccountInformation/ExchangeMembers'//兑换记录路由
import PurchaseHistory from '../components/zg_AccountInformation/PurchaseHistory'
import seek from '../components/Zg_seek/Zg_seek'//收索页面
import TheMoneyThat from '../components/zg_AccountInformation/TheMoneyThat'//红包说明

//王义豪配置的路由
import Balance from '../components/MyPage/SubPage/wyh_Balance'
import Discount from '../components/MyPage/SubPage/wyh_Discount'
import Integral from '../components/MyPage/SubPage/wyh_Integral'
import MyHomePage from '../components/MyPage/MyHomePage'
import BalanceProblem from '../components/MyPage/SubPage/wyn_balanceProblem'
import ServiceCenter from '../components/MyPage/SubPage/wyh_serviceCenter'
import DownloadAPP from '../components/MyPage/SubPage/wyh_DownloadAPP'
import PublicPrompt from '../components/MyPage/CommonComponents/wyh_PublicPrompt'
import TheOrderPage from '../components/MyPage/SubPage/wyh_TheOrderPage'
import PublicHeader from '../components/G-login/wyh_LoginPage'
import AccountInformation from '../components/MyPage/SubPage/wyh_AccountInformation'
import AmendUserName from '../components/MyPage/SubPage/wyh_AmendUserName'
import TakeSite from '../components/TakeSite/wyh_CompileSite'
import AddLocation from '../components/TakeSite/wyh_AddLocation'



export default new Router({
  routes: [
    //  王义豪配置的路由
    {path: '/myhomepage', component: MyHomePage}, //我的页面
    {path: '/balance', component: Balance},
    {path: '/discount', component: Discount},
    {path: '/integral', component: Integral},
    {path: '/balanceProblem', component: BalanceProblem},
    {path: '/serviceCenter', component: ServiceCenter},//服务中心
    {path: '/downloadapp', component: DownloadAPP},//下载饿了么
    {path: '/publicprompt', component: PublicPrompt},//提示框路由
    {path: '/theorderoage', component: TheOrderPage},//订单页面
    {path: '/publicheader', component: PublicHeader},//登陆页面
    {path: '/accountinformation', component: AccountInformation},//账户信息页面
    {path: '/amendusername', component: AmendUserName},//修改用户名页面
    {path: '/takesite', component: TakeSite},//编辑地址页面
    {path:'/AddLocation',component:AddLocation},//新增地址页面

    //张鹏配置的路由
    {path: '', component: zpposition},
    {path: '/city', component: SpecificAddress},
    {path: '/toCity', component: zpposition},
    {path: '/zp_toMyHome', component: ZpTakeOut},
    {path: '/zpMine', component: MyHomePage},
    {path: '/intoShop', component: InShop},
    {path: '/toshop', component: Shop},
    {path: '/toinshop', component: InShop},
    {path:'/tosureorder',component:SureOrder},
    {path:'/toinvoice',component:InVoice},
    {path:'/tochooseaddress',component:ChoodeAddress},
    {path:'/toaddnewaddress',component:AddNewAddress},
    //曾光配置的路由

    {path: '/register', component: register}, //跳转到重置密码的路由
    {path: '/glogin', component: glogin},//登录界面
    {path: '/basice', component: basice, children: []},//会员特权返回会员中心的路由
    {path: '/explain', component: explain},//我的优惠
    {path: '/Payment', component: Payment},//购买会员付款界面
    {path: '/exchangeMembers', component: exchangeMembers},//帐号注册
    {path: '/PurchaseHistory', component: PurchaseHistory},//购买记录
    {path: '/seek', component: seek},//搜索食物页面
    {path:'/TheMoneyThat',component:TheMoneyThat}

  ]
})
