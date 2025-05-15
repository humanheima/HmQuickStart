import { BannerClass } from "../model/BannerClass"
import { bufferToString } from "../util/BufferUtil"
import { hilog } from "@kit.PerformanceAnalysisKit"

const TAG = 'Banner';

@Component
export struct Banner {
  @State bannerList: Array<BannerClass> = []

  aboutToAppear(): void {

    this.getBannerDataFromJSON()
  }

  getBannerDataFromJSON() {

    //由于ResourceManager获取到的是Uint8Array类型的内容，
    //所以需要将对应的内容转换为字符串，并将字符串解析为对应的数据结构
    getContext(this).resourceManager.getRawFileContent('BannerData.json')
      .then(value => {
        // 转换为字符串
        let res: string = bufferToString(value)
        // 解析为数据结构
        this.bannerList = JSON.parse(res) as BannerClass[];
        hilog.debug(0x0000, TAG, 'this.bannerList.size  =  %{public}s', this.bannerList.toString())
      })
  }

  build() {

    Swiper() {
      ForEach(this.bannerList, (item: BannerClass) => {

        Image($r(item.imageSrc))
          .objectFit(ImageFit.Contain)
          .width('100%')
          .padding({ top: 11, left: 16, right: 16 })
          .borderRadius(16)
      },
        (item: BannerClass) => {
          return item.id
        }
      )
    }

    .autoPlay(true)
    .loop(true)
    .indicator(new DotIndicator().color('#1a000000').selectedColor('#0A59F7'))

  }
}