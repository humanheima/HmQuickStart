@Preview
@Component
export struct Banner {
  build() {

    Image($r('app.media.banner_pic1'))
      .objectFit(ImageFit.Contain)
      .width('100%')
      .padding({ top: 11, left: 16, right: 16 })
      .borderRadius(16)

  }
}