import { KnowledgeBlock } from "./KnowledgeBlock"

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