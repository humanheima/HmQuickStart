interface KnowledgeBaseItem {

  type: string,
  title: string
}

interface Material {

  subtitle: string,
  knowledgeBase: KnowledgeBaseItem[]
}

export interface Section {

  title: string,
  brief: string,
  materials: Material[]

}

const TypeMapIcon: Record<string, string> = {
  '指南': 'app.media.ic_guide',
  '准备': 'app.media.ic_prepare',
  '学习与获取证书': 'app.media.ic_medals',
  '视频教程': 'app.media.ic_video',
}


@Component
export struct KnowledgeBlock {
  @Prop material: Material

  build() {
    Column() {
      Text(this.material.subtitle)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontSize(14)
        .fontWeight(500)
        .margin({ bottom: 8 })

      List({ space: 12 }) {
        ForEach(this.material.knowledgeBase, (item: KnowledgeBaseItem, index: number) => {
          ListItem() {
            KnowledgeBlockLine({ knowledgeBaseItem: item })
          }
        }
          , (item: KnowledgeBaseItem, index: number) => item.title
        )
      }.backgroundColor(Color.White)
      .borderRadius(16)
      .padding({ left: 12, right: 12 })
      .divider({
        strokeWidth: 0.5,
        startMargin: 38,
        endMargin: 0,
        color: '#F2F2F2'
      })

    }
    .width('100%')
    .margin({ top: 28 })
    .alignItems(HorizontalAlign.Start)
  }
}


@Component
export struct KnowledgeBlockLine {
  // @State navBarItem: NavBarItemType = {
  //   order: '01',
  //   title: '准备与学习'
  // }

  @Prop knowledgeBaseItem: KnowledgeBaseItem

  build() {
    Row() {

      Image($r(TypeMapIcon[this.knowledgeBaseItem.type]))
        .width(20)
        .height(20)

      Column() {

        // Text(this.knowledgeBaseItem.type)
        //   .margin({ right: 6 })
        //   .fontFamily('HarmonyHeiTi-Bold')
        //   .fontSize(21)
        //   .fontColor('#182431')
        //   .textAlign(TextAlign.Start)
        //   .lineHeight(22)
        //   .fontWeight(700)

        Text(this.knowledgeBaseItem.title)
          .fontFamily('HarmonyHeiTi-Medium')
          .fontSize(16)
          .fontColor('#182431')
          .fontWeight(500)

      }.alignItems(HorizontalAlign.Start)
      .margin({ left: 18 })

      Blank()

      Image($r('app.media.ic_arrow'))
        .width(12)
        .height(24)

    }
    .width('100%')
    .height(64)
    .alignItems(VerticalAlign.Center)
  }
}


@Preview
@Component
export struct KnowledgeMapContent {
  @State section: Section = {
    "title": "准备与学习",
    "brief": "加入HarmonyOS生态，注册成为开发者，通过HarmonyOS课程了解基本概念和基础知识，轻松开启HarmonyOS的开发旅程。",
    "materials": [
      {
        "subtitle": "HarmonyOS简介",
        "knowledgeBase": [
          { "type": "准备", "title": "注册账号" },
          { "type": "准备", "title": "实名认证" },
          { "type": "学习与获取证书", "title": "HarmonyOS第一课" },
          { "type": "学习与获取证书", "title": "HarmonyOS应用开发者基础认证" }
        ]
      },
      {
        "subtitle": "赋能套件介绍",
        "knowledgeBase": [
          { "type": "指南", "title": "开发" },
          { "type": "指南", "title": "最佳实践" },
          { "type": "指南", "title": "API参考" },
          { "type": "指南", "title": "视频课程" },
          { "type": "指南", "title": "Codelabs" },
          { "type": "指南", "title": "FAQ" }
        ]
      }
    ]
  };

  // @Builder
  // KnowledgeBlockLine(knowledgeBaseItem:KnowledgeBaseItem){
  //
  //
  //
  // }


  build() {

    Scroll() {
      Column() {
        Text(this.section?.title)
          .fontFamily('HarmonyHeiTi-Bold')
          .fontSize(20)
          .fontWeight(700)
          .fontColor(Color.Black)
          .width('100%')

        Text(this.section?.brief)

        ForEach(this.section.materials, (item: Material) => {
          KnowledgeBlock({ material: item })
        }, (item: Material) => item.subtitle
        )
      }
    }
    .align(Alignment.TopStart)
    .constraintSize({ minHeight: '100%' })
    .edgeEffect(EdgeEffect.Spring)
    .scrollable(ScrollDirection.Vertical)
    .scrollBar(BarState.Auto)
    .backgroundColor('#F1F3F5')
  }
}