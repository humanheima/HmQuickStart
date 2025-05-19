import { Banner } from './Banner';

@Entry
@Component
struct Index {
  @State message: string = '快速入门';

  build() {
    Column() {
      Text(this.message)
        .fontSize(24)
        .fontWeight(700)
        .width('100%')
        .textAlign(TextAlign.Start)
        .padding({left:16})
        .fontFamily('HarmonyHeiTi-Bold')
        .lineHeight(33)

      Banner()

    }
    .height('100%')
    .width('100%')
    .backgroundColor('#F1F3F5')
  }
}