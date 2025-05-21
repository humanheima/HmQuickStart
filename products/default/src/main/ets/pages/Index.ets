import { QuickStartPage } from 'quickstart'

@Component
@Entry
struct Index {
  build() {
    Column() {
      QuickStartPage()
    }
    .backgroundColor('#F1F3F5')
    .padding({ top: 36, bottom: 28 })
  }
}