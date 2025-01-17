import maccms from '@/assets/maccms.ico';

export const tabs = [
  {
    icon: 'main',
    name: '主页',
    app: [{
      size: '2x4',
      name: '天气',
      component: 'weather'
    }, {
      size: '2x4',
      name: '热搜榜',
      component: 'hotsearch'
    }, {
      size: '2x2',
      name: '星座运势',
      component: 'constellation'
    }, {
      size: '2x2',
      name: '日历',
      component: 'calendar'
    },
    // {
    //   size: '2x2',
    //   name: '备忘录',
    //   component: 'note'
    // }, 
    {
      size: '1x1',
      name: '豆包',
      icon: 'https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
      bgColor: '',
      link: 'https://tj.shshinfo.com/tz/pcw/db1406.html'
    }, {
      size: '1x1',
      name: '抖音',
      icon: 'https://files.codelife.cc/website/douyin.svg',
      bgColor: '#1c0b1a',
      link: 'https://tj.shshinfo.com/tz/pcw/douyin6008.html'
    }, {
      size: '1x1',
      name: 'Kimi',
      icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
      bgColor: '',
      link: 'https://tj.shshinfo.com/tz/pcw/Kimi1001.html'
    }, {
      size: '1x1',
      name: '百度',
      icon: 'https://files.codelife.cc/icons/baidu.svg',
      bgColor: '#346efd',
      link: 'https://www.xzcciioz.com/ezc/index.html'
    }, {
      size: '1x1',
      name: '秘塔写作猫',
      icon: 'https://files.codelife.cc/icons/xiezuocat.com.svg',
      bgColor: '#fefefe',
      link: 'https://xiezuocat.com'
    }, {
      size: '1x1',
      name: '淘宝',
      icon: 'https://files.codelife.cc/icons/taobao.svg',
      bgColor: '#ff5c00',
      link: 'https://www.taobao.com/?bc_fl_src=tbsite_VXHOUdsQ'
    }, {
      size: '1x1',
      name: '京东商城',
      icon: 'https://files.codelife.cc/icons/jd.svg',
      bgColor: '#ff0000',
      link: 'https://cfe.m.jd.com/privatedomain/risk_handler/03101900/?returnurl=http%3A%2F%2Flist.jd.com%2Flist.html%3Fcat%3D670%26cu%3Dtrue%26utm_source%3Dlianmeng__10__www.itab.link%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_1000360070_%26utm_term%3D7571f427d0af4d38a315299b48390339&evtype=2&rpid=rp-191308886-10382-1735266990494&evapi=hold_search_php&evext='
    }, {
      size: '1x1',
      name: '天猫精选',
      icon: 'https://files.codelife.cc/icons/tmall.svg',
      bgColor: '#ff0030',
      link: 'https://www.tmall.com/'
    }, {
      size: '1x1',
      name: '爱奇艺',
      icon: 'https://files.codelife.cc/icons/iqiyi.svg',
      bgColor: '#00cc4c',
      link: 'https://www.iqiyi.com/?vfm=f_432_dhm&fv=8648154ddd63e0af'
    }, {
      size: '1x1',
      name: '哔哩哔哩',
      icon: 'https://files.codelife.cc/icons/bilibili2.svg',
      bgColor: '#fe65a6',
      link: 'https://www.bilibili.com/'
    }, {
      size: '1x1',
      name: '斗鱼',
      icon: 'https://files.codelife.cc/icons/douyu.svg',
      bgColor: '#ff6a2d',
      link: 'https://www.douyu.com/'
    }, {
      size: '1x1',
      name: '新浪微博',
      icon: 'https://files.codelife.cc/icons/weibo.svg',
      bgColor: '#ffd850',
      link: 'https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F'
    }, {
      size: '1x1',
      name: '知乎',
      icon: 'https://files.codelife.cc/icons/zhihu.svg',
      bgColor: '#0c6dfe',
      link: 'https://www.zhihu.com/'
    }, {
      size: '1x1',
      name: 'MacCMS',
      icon: maccms,
      bgColor: '#fff',
      link: 'http://vod.iwantc.cyou/'
    }, {
      size: '1x1',
      name: 'AIPPT',
      icon: 'https://files.codelife.cc/icons/mindshow.fun.svg',
      bgColor: '#fefefe',
      link: 'https://www.mindshow.fun/#/home'
    }, {
      size: '1x1',
      name: '专业AI论文写作',
      icon: 'https://files.codelife.cc/icons/biling.cn.svg',
      bgColor: '#fefefe',
      link: 'https://ibiling.cn/paper'
    }, {
      size: '1x1',
      name: '智谱清言',
      icon: 'https://files.codelife.cc/icons/chatglm.cn.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
      bgColor: '#fefefe',
      link: 'https://chatglm.cn/main/alltoolsdetail?image=https://sfile.chatglm.cn/activeimg/bdms/66b97e348217030036f486f1&lang=zh'
    }, {
      size: '1x1',
      name: '好123',
      icon: 'https://www.hao123.com/favicon.ico',
      bgColor: '#fff',
      link: 'https://www.xzcciioz.com/ezc/eindex.html'
    }, {
      size: '1x1',
      name: '阿里绘蛙',
      icon: 'https://files.codelife.cc/icons/ihuiwa.jpg?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
      bgColor: '#fefefe',
      link: 'https://www.ihuiwa.com/invite'
    }, {
      size: '1x1',
      name: '博思AIPPT',
      icon: 'https://files.codelife.cc/icons/pptgo.cn.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
      bgColor: '#fefefe',
      link: 'https://pptgo.cn'
    },]
  },
  {
    icon: 'recreation',
    name: '娱乐',
    app: [
      {
        size: '1x1',
        name: 'MacCMS',
        icon: maccms,
        bgColor: '#fff',
        link: 'http://vod.iwantc.cyou/'
      }, {
        size: '1x1',
        name: '斗鱼',
        icon: 'https://files.codelife.cc/icons/douyu.svg',
        bgColor: '#ff6a2d',
        link: 'https://www.douyu.com/'
      }, {
        size: '1x1',
        name: '抖音',
        icon: 'https://files.codelife.cc/website/douyin.svg',
        bgColor: '#1c0b1a',
        link: 'https://tj.shshinfo.com/tz/pcw/douyin6008.html'
      }, {
        size: '1x1',
        name: '爱奇艺',
        icon: 'https://files.codelife.cc/icons/iqiyi.svg',
        bgColor: '#00cc4c',
        link: 'https://www.iqiyi.com/?vfm=f_432_dhm&fv=8648154ddd63e0af'
      }, {
        size: '1x1',
        name: '哔哩哔哩',
        icon: 'https://files.codelife.cc/icons/bilibili2.svg',
        bgColor: '#fe65a6',
        link: 'https://www.bilibili.com/'
      }
    ]
  }, {
    icon: 'shopping',
    name: '购物',
    app: [
      {
        size: '1x1',
        name: '淘宝',
        icon: 'https://files.codelife.cc/icons/taobao.svg',
        bgColor: '#ff5c00',
        link: 'https://www.taobao.com/?bc_fl_src=tbsite_VXHOUdsQ'
      }, {
        size: '1x1',
        name: '京东商城',
        icon: 'https://files.codelife.cc/icons/jd.svg',
        bgColor: '#ff0000',
        link: 'https://cfe.m.jd.com/privatedomain/risk_handler/03101900/?returnurl=http%3A%2F%2Flist.jd.com%2Flist.html%3Fcat%3D670%26cu%3Dtrue%26utm_source%3Dlianmeng__10__www.itab.link%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_1000360070_%26utm_term%3D7571f427d0af4d38a315299b48390339&evtype=2&rpid=rp-191308886-10382-1735266990494&evapi=hold_search_php&evext='
      }, {
        size: '1x1',
        name: '天猫精选',
        icon: 'https://files.codelife.cc/icons/tmall.svg',
        bgColor: '#ff0030',
        link: 'https://www.tmall.com/'
      },
    ]
  }, {
    icon: 'tool',
    name: '工具',
    app: [
      {
        size: '1x1',
        name: '豆包',
        icon: 'https://files.codelife.cc/icons/doubao.com.webp?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        bgColor: '',
        link: 'https://tj.shshinfo.com/tz/pcw/db1406.html'
      },
      {
        size: '1x1',
        name: 'Kimi',
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        bgColor: '',
        link: 'https://tj.shshinfo.com/tz/pcw/Kimi1001.html'
      },
    ]
  },
]