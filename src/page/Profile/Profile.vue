<template>
  <div>
          <!-- 创建顶部标题容器 -->
    <div class="top-title-wrapper">
        <span class="top-title">我的</span>
    </div>
    <!-- 创建头部个人信息外部容器 -->
    <header class="info-wrapper">
        <div class="left">
            <img src="../imgs/super_member.png">
        </div>
        <div class="right">
            <div class="info-id">
                mly795532713
            </div>
            <div class="info-phone">
                <span class="number">185****6435</span>
                <span class="set">
                    <i class="iconfont icon-xiugai"></i>
                    修改
                </span>
            </div>
        </div>
    </header>
    <!-- 创建个人服务功能列表外部容器 -->
    <nav class="service-centre-wrapper">
        <!-- 创建服务功能列表 -->
        <ul class="service-centre-list">
            <li>
                <div class="left">
                    <i class="iconfont icon-jinbi"></i>
                    <div>我的金币</div>
                    <div>
                        <span class="highlight">10</span>
                        金币，可抵0.1元
                    </div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-hongbao"></i>
                    <div>美团红包</div>
                    <div>
                        <span class="dangerous">3</span>
                        张
                    </div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-daijinquan"></i>
                    <div>商家代金券</div>
                    <div>
                        <span class="dangerous">5</span>
                        张
                    </div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-daijinquan"></i>
                    <div>拼好饭代金券</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-jineqiandaiyueshangjin"></i>
                    <div>津贴</div>
                    <div>
                        津贴余额
                        <span class="highlight">8</span>
                        元
                    </div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-weizhi"></i>
                    <div>我的位置</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-guanzhu"></i>
                    <div>我的关注</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-pingjia"></i>
                    <div>我的评价</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-fapiao"></i>
                    <div>发票助手</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-qiye"></i>
                    <div>企业订单</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-liwu"></i>
                    <div>邀请有奖</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-kefu"></i>
                    <div>客服中心</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-help"></i>
                    <div>帮助和反馈</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-jiuyexieyi"></i>
                    <div>协议和说明</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-shouji54"></i>
                    <div>修改手机号</div>
                </div>
                <div>
                    <span class="number">185***6435</span>
                    <i class="iconfont icon-youjiantou_huaban"></i>
                </div>
            </li>
            <li>
                <div class="left">
                    <i class="iconfont icon-jiameng"></i>
                    <div>餐饮加盟</div>
                </div>
                <i class="iconfont icon-youjiantou_huaban"></i>
            </li>
        </ul>
    </nav>
    <!-- 退出账号外部容器 -->
    <div class="logout-wrapper">
        <span>退出账号</span>
    </div>
    <!-- 创建空白区域 -->
    <div class="space"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  font-size: 100/375 * 40vw;
  min-width: 375px;
  box-sizing: border-box;
}
html body {
  position: relative;
  height: 667px;
  background-color: #f4f4f4;
}
html body .top-title-wrapper {
  height: 2rem;
  padding: 0.75rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  background-image: linear-gradient(to right, #ffe14e, #ffc84d);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
html body .info-wrapper {
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(to right, #ffe14e, #ffc84d);
  position: fixed;
  top: 3.5rem;
  width: 100%;
  z-index: 3;
}
html body .info-wrapper .left img {
  width: 4.5rem;
  border-radius: 50%;
}
html body .info-wrapper .right {
  padding-left: 1rem;
}
html body .info-wrapper .right .info-id {
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: bold;
}
html body .info-wrapper .right .info-phone {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
html body .info-wrapper .right .info-phone .number {
  font-size: 1.2rem;
  padding-right: 0.4rem;
}
html body .info-wrapper .right .info-phone .set {
  font-size: 0.75rem;
  background-color: #fee8af;
  padding: 3px;
  border-radius: 0.4rem;
}
html body .info-wrapper .right .info-phone .set .icon-xiugai {
  font-size: 0.75rem;
  font-weight: bold;
}
html body .service-centre-wrapper {
  margin-top: 9.5rem;
  background-color: #f4f4f4;
  padding: 0.75rem 0;
}
html body .service-centre-wrapper .service-centre-list {
  padding-top: 0.75rem;
  overflow: hidden;
  background-color: #fff;
}
html body .service-centre-wrapper .service-centre-list li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #f3f3f3;
}
html body .service-centre-wrapper .service-centre-list li .left {
  display: flex;
  align-items: center;
}
html body .service-centre-wrapper .service-centre-list li .left .iconfont {
  color: #8b8d8e;
}
html
  body
  .service-centre-wrapper
  .service-centre-list
  li
  .left
  .iconfont
  + div {
  color: #454545;
  padding: 0 1rem;
}
html
  body
  .service-centre-wrapper
  .service-centre-list
  li
  .left
  .iconfont
  + div
  + div {
  font-size: 0.8rem;
  color: #939495;
}
html
  body
  .service-centre-wrapper
  .service-centre-list
  li
  .left
  .iconfont
  + div
  + div
  .highlight {
  font-size: 1rem;
  color: #ef7d65;
}
html
  body
  .service-centre-wrapper
  .service-centre-list
  li
  .left
  .iconfont
  + div
  + div
  .dangerous {
  font-size: 1.4rem;
  color: #f05c53;
}
html body .service-centre-wrapper .service-centre-list li .left + * {
  color: #a5a5a5;
  font-size: 0.8rem;
}
html body .logout-wrapper {
  background-color: #fff;
  color: #454545;
  font-size: 1.1rem;
  padding: 1rem 0;
  text-align: center;
}
html body .space {
  height: 10rem;
  background-color: #f4f4f4;
}
</style>