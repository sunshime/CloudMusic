// pages/uplink/uplink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: '我的',
        list: [
          '时光年轮一圈圈转着',
          '现在，他站在原地，回首望去，从前点点滴滴，琐琐碎碎',
          '猛然发现，自己已走过了这么多',
          '他想，如果再次遇到下雪天，他会毫不犹豫迎上去',
          '因为那里，有旧时光味道。他仍在怀念，仍在留恋。怀念，白雪纷扬日子。'
        ]
      }, {
        name: '发现',
        list: [
          '友情是每个人都应有的东西，而且相当的珍贵',
          '在朋友之间，难免会产生分歧，让友情结冰',
          '但我现在知道，友情上消融的冰雪是暖的。'
        ]
      },
      {
        name: '云村',
        list: [
          '有人安于某种生活，有人不能',
          '因此能安于自已目前处境的不妨就如此生活下去，不能的只好努力另找出路',
          '你无法断言哪里才是成功的，也无法肯定当自已到达了某一点之后，会不会快乐',
          '有些人永远不会感到满足，他的快乐只建立在不断地追求与争取的过程之中',
          '因此，他的目标不断地向远处推移。这种人的快乐可能少，但成就可能大。'
        ]
      },
      {
        name: '视频',
        list: [
          '加加加有人安于某种生活，有人不能',
          '因此能安于自已目前处境的不妨就如此生活下去，不能的只好努力另找出路',
          '你无法断言哪里才是成功的，也无法肯定当自已到达了某一点之后，会不会快乐',
          '有些人永远不会感到满足，他的快乐只建立在不断地追求与争取的过程之中',
          '因此，他的目标不断地向远处推移。这种人的快乐可能少，但成就可能大。'
        ]
      }
    ],
    curIndex: 1,
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