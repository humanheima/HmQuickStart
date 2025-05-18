import { KnowledgeBaseItem, TypeMapIcon } from "./KnowledgeMapContent"

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