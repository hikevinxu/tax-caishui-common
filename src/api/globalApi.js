import { fetchPost, fetchGet } from './axios'
import qs from 'qs'

export default {
  /**
   * 获取区县列表
   * @function getAddressAreas
   * @type 'Get'
   * @param provinceCode Number
   * @param cityCode Number
   */
  getAddressAreas (params) {
    return fetchGet('/address/areas', params)
  },
  /**
   * 获取城市列表
   * @function getAddressCitys
   * @type 'Get'
   * @param provinceCode Number
   */
  getAddressCitys (params) {
    return fetchGet('/address/citys', params)
  },
  /**
   * 获取省份列表
   * @function getAddressProvinces
   * @type 'Get'
   */
  getAddressProvinces (params) {
    return fetchGet('/address/provinces', params)
  },
  /**
   * 获取所有地址列表
   * @function getAddressTrees
   * @type 'Get'
   */
  getAddressTrees (params) {
    return fetchGet('/address/trees', params)
  },
  /**
   * 上传图片
   * @function getFileuploadUpload
   * @type 'POST'
   */
  getFileuploadUpload (params) {
    return fetchPost('/fileupload/upload', params)
  },
  
  /**
   * 短信验证码登录
   * @function authVerifycodeLogin
   * @type 'POST'
   */
  authVerifycodeLogin (params) {
    return fetchPost('/auth/verifycode/login', params)
  },
  /**
   * 发送登录验证码
   * @function authLogin
   * @type 'POST'
   */
  sendVerifycode (params) {
    return fetchPost('/auth/verifycode/login/send_verifycode', params)
  },
  /**
   * 落地页推广模版
   * @function channelPageObtainDetail
   * @type 'Get'
   */
  channelPageObtainDetail (params) {
    return fetchGet('/api/channelPage/obtainDetail', params)
  },
  /**
   * 落地页推广模版-意向收集
   * @function channelPageObtainFormSave
   * @type 'Post'
   */
  channelPageObtainFormSave (params) {
    let paramsString = qs.stringify(params)
    return fetchPost('/api/channelPage/obtainForm/save', paramsString)
  }
}