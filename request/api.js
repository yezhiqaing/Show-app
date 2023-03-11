 import request from '../request/request'

//  请求首页数据
export const GethomeData=()=>request('/index/index')

// 请求 搜索页面的  热门和历史记录数据
export const Gethistroyapi=()=>request('/search/index')

// 清除搜索记录
export const ClearHistoryapi=(params)=>request('/search/clearhistory',params)

// 搜索商品请求
export const goodsSearch=(params)=>request('/goods/list',params)

// 实时搜索
export const Tipslist=(params)=>request('/search/helper',params)

// 登陆
export const GetLogo=(params)=>request('/auth/loginByWeb',params)

//  产品明细
export const Getdetail=(params)=>request('/goods/detail',params)
//   相关产品

export const Goodlistx=(params)=> request('/goods/related',params)

//  加入购物车
export const addCart=(params)=>request('/cart/add',params)

// 获取购物车 数量

export const cartshu=(params)=>request('/cart/goodscount',params)

//  购物车数据

export const cartdata=()=> request('/cart/index')

//   选中和全选
export const  checkadd=(params)=>request('/cart/checked',params)
 
//  数量 加减请求
export const  steepchecked=(params)=>request('/cart/update',params)

// 删除
export const  detailchecked=(params)=>request('/cart/delete',params)
// 专题数据
export const  Specialdata=(params)=>request('/topic/list',params)

// 分类
export const  Catery=()=>request('/catalog/index')
// 获取当前分类数据
export const  getCat=(params)=>request('/catalog/index',params)
 
// 分类tab
export const  brotherCategory=(params)=>request('/goods/category',params)

export const goodsList=(params)=>request('/goods/list',params)
 
// 获取收获地址
export const getaie=(params)=>request('/address/list',params)




