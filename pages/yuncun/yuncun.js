// pages/uplink/uplink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: '广场',
        list: [
          '时光年轮一圈圈转着',
          '现在，他站在原地，回首望去，从前点点滴滴，琐琐碎碎',
          '猛然发现，自己已走过了这么多',
          '他想，如果再次遇到下雪天，他会毫不犹豫迎上去',
          '因为那里，有旧时光味道。他仍在怀念，仍在留恋。怀念，白雪纷扬日子。'
        ]
      }, {
        name: '关注',
        list: [
          '友情是每个人都应有的东西，而且相当的珍贵',
          '在朋友之间，难免会产生分歧，让友情结冰',
          '但我现在知道，友情上消融的冰雪是暖的。'
        ]
      }
    ],
    curIndex: 0,
    scrollLefts: 0,
    duration: 300,
    navItemWidth: 100, // 导航栏每一项的宽度
  },
  // 导航栏滑动
  tabNav(e) {
    let index = e.target.dataset.index;
    this.setData({
      curIndex: index,
      scrollLefts: (index - 2) * this.data.navItemWidth
    })
  },
  // 内容滑动
  changeScroll(e) {
    let index = e.detail.current;
    this.setData({
      curIndex: index,
      scrollLefts: (index - 2) * this.data.navItemWidth
    })
  }
})