import { Banner } from '../view/Banner'
import { EnablementView } from '../view/EnablementView'
import { TutorialView } from '../view/TutorialView'

@Entry
@Component
struct Index {

  build() {
    Column() {
      Text($r("app.string.fast_begin"))
        .fontSize(24)
        .fontWeight(700)
        .width('100%')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .fontFamily('HarmonyHeiTi-Bold')
        .lineHeight(33)

      Scroll() {
        Column() {
          Banner()
          EnablementView()
          TutorialView()
        }
      }
      .layoutWeight(1)
      .scrollBar(BarState.Off)
      .align(Alignment.TopStart)

    }
    .height('100%')
    .width('100%')
    .backgroundColor('#F1F3F5')
  }
}





