export interface KnowledgeBaseItem {

  type: string,
  title: string
}

export interface Material {

  subtitle: string,
  knowledgeBase: KnowledgeBaseItem[]
}

export interface Section {

  title: string,
  brief: string,
  materials: Material[]

}

export const TypeMapIcon: Record<string, string> = {
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
  scroller: Scroller = new Scroller();
  @Prop section: Section;

  build() {

    NavDestination() {
      Scroll(this.scroller) {
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
    }.hideTitleBar(true)
  }
}