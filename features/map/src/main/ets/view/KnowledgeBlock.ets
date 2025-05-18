import { KnowledgeBlockLine } from "./KnowledgeBlockLine"
import { KnowledgeBaseItem, Material } from "./KnowledgeMapContent"

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