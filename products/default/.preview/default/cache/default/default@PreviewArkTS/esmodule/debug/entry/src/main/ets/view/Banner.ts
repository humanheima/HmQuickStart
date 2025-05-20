if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Banner_Params {
    bannerList?: Array<BannerClass>;
}
import { BannerClass } from "@normalized:N&&&entry/src/main/ets/model/BannerClass&";
import { bufferToString } from "@normalized:N&&&entry/src/main/ets/util/BufferUtil&";
import hilog from "@ohos:hilog";
const TAG = 'Banner';
export class Banner extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bannerList = new ObservedPropertyObjectPU([
            new BannerClass('pic0', 'app.media.banner_pic0', 'https://developer.huawei.com/consumer/cn/training/course/video/C101718352529709527'),
            new BannerClass('pic1', 'app.media.banner_pic1', 'https://developer.huawei.com/consumer/cn/'),
            new BannerClass('pic2', 'app.media.banner_pic2', 'https://developer.huawei.com/consumer/cn/deveco-studio/'),
            new BannerClass('pic3', 'app.media.banner_pic3', 'https://developer.huawei.com/consumer/cn/arkts/'),
            new BannerClass('pic4', 'app.media.banner_pic4', 'https://developer.huawei.com/consumer/cn/arkui/'),
            new BannerClass('pic5', 'app.media.banner_pic5', 'https://developer.huawei.com/consumer/cn/sdk')
        ], this, "bannerList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Banner_Params) {
        if (params.bannerList !== undefined) {
            this.bannerList = params.bannerList;
        }
    }
    updateStateVars(params: Banner_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bannerList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bannerList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bannerList: ObservedPropertyObjectPU<Array<BannerClass>>;
    get bannerList() {
        return this.__bannerList.get();
    }
    set bannerList(newValue: Array<BannerClass>) {
        this.__bannerList.set(newValue);
    }
    aboutToAppear(): void {
        //this.getBannerDataFromJSON()
    }
    getBannerDataFromJSON() {
        //由于ResourceManager获取到的是Uint8Array类型的内容，
        //所以需要将对应的内容转换为字符串，并将字符串解析为对应的数据结构
        getContext(this).resourceManager.getRawFileContent('BannerData.json')
            .then(value => {
            // 转换为字符串
            let res: string = bufferToString(value);
            // 解析为数据结构
            this.bannerList = JSON.parse(res) as BannerClass[];
            hilog.debug(0x0000, TAG, 'this.bannerList.size  =  %{public}s', this.bannerList.toString());
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("entry/src/main/ets/view/Banner.ets(45:5)", "entry");
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.indicator(new DotIndicator().color('#1a000000').selectedColor('#0A59F7'));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": -1, "type": -1, params: [item.imageSrc], "bundleName": "com.example.quickstart", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/view/Banner.ets(48:9)", "entry");
                    Image.objectFit(ImageFit.Contain);
                    Image.width('100%');
                    Image.padding({ top: 11, left: 16, right: 16 });
                    Image.borderRadius(16);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.bannerList, forEachItemGenFunction, (item: BannerClass) => {
                return item.id;
            }, false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
