if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TutorialItem_Params {
    title?: string;
    brief?: string;
    tutorialItem?: ArticleClass;
}
interface TutorialView_Params {
    tutorialList?: Array<ArticleClass>;
}
import { ArticleClass } from "@normalized:N&&&quickstart/src/main/ets/model/ArticleClass&1.0.0";
export class TutorialView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tutorialList = new ObservedPropertyObjectPU([
            new ArticleClass('1', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step1 环境的搭建', '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('2', { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step2 使用Swiper构建运营广告位', 'Swiper组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('3', { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step3 创建和组合视图', 'Item定义子组件相关特征。相关组件支持使用条件渲染、循环渲染、懒加载等方式生成子组件。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('4', { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step4 网格和列表组建的使用', '网格和列表组件中，当Item达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能，适合用于呈现同类数据类型或数据类型集', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('5', { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step5 应用架构设计基础', 'ArkUI采取MVVM = Model + View + ViewModel模式，将数据与视图绑定在一起，更新数据的时候直接更新视图。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('6', { "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step6 ArkWeb页面适配', 'ArkWeb（方舟Web）提供了Web组件，用于在应用程序中显示Web页面内容，为开发者提供页面加载、页面交互、页面调试等能力。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('7', { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step7 数据驱动UI更新', '数据更新的同时会直接驱动UI的改变', 'xxx'),
            new ArticleClass('8', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step8 设置组件导航', 'Navigation组件适用于模块内页面切换，一次开发，多端部署场景。通过组件级路由能力实现更加自然流畅的转场体验，并提供多种标题栏样式来呈现更好的标题和内容联动效果。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('9', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step9 原生智能：AI语音朗读', '文本转语音服务提供将文本信息转换为语音并进行播报的能力，便于用户与设备进行互动，实现实时语音交互，文本播报。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('10', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step10 原生互联：分布式流转', '流转能力打破设备界限，多设备联动，使用户应用程序可分可合、可流转，实现如邮件跨设备编辑、多设备协同健身、多屏游戏等分布式业务。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
            new ArticleClass('11', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" }, 'Step11 一次开发，多端部署', '一套代码工程，一次开发上架，多端按需部署。支撑开发者快速高效的开发支持多种终端设备形态的应用，实现对不同设备兼容的同时，提供跨设备的流转、迁移和协同的分布式体验。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
        ], this, "tutorialList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TutorialView_Params) {
        if (params.tutorialList !== undefined) {
            this.tutorialList = params.tutorialList;
        }
    }
    updateStateVars(params: TutorialView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tutorialList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tutorialList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tutorialList: ObservedPropertyObjectPU<Array<ArticleClass>>;
    get tutorialList() {
        return this.__tutorialList.get();
    }
    set tutorialList(newValue: Array<ArticleClass>) {
        this.__tutorialList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(42:5)", "quickstart");
            Column.margin({ top: 18, bottom: 18 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("入门教程");
            Text.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(43:7)", "quickstart");
            Text.fontColor('#182431');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.fontFamily('HarmonyHeiTi-medium');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.margin({ bottom: 8.5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(52:7)", "quickstart");
            List.scrollBar(BarState.Off);
            List.padding({ left: 16, right: 16 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(55:11)", "quickstart");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new TutorialItem(this, { tutorialItem: item }, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/view/TutorialView.ets", line: 56, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            tutorialItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        tutorialItem: item
                                    });
                                }
                            }, { name: "TutorialItem" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.tutorialList, forEachItemGenFunction, (item: ArticleClass) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TutorialItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = 'Step1 快速入门介绍';
        this.brief = '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序 。';
        this.__tutorialItem = new SynchedPropertyObjectOneWayPU(params.tutorialItem, this, "tutorialItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TutorialItem_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.brief !== undefined) {
            this.brief = params.brief;
        }
    }
    updateStateVars(params: TutorialItem_Params) {
        this.__tutorialItem.reset(params.tutorialItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tutorialItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tutorialItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private brief: string;
    private __tutorialItem: SynchedPropertySimpleOneWayPU<ArticleClass>;
    get tutorialItem() {
        return this.__tutorialItem.get();
    }
    set tutorialItem(newValue: ArticleClass) {
        this.__tutorialItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(81:5)", "quickstart");
            Row.width('100%');
            Row.height(88);
            Row.borderRadius(16);
            Row.backgroundColor(Color.White);
            Row.padding(12);
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(82:7)", "quickstart");
            Column.height('100%');
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ right: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(83:9)", "quickstart");
            Text.height(19);
            Text.width('100%');
            Text.fontSize(14);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.fontWeight(400);
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.brief);
            Text.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(94:9)", "quickstart");
            Text.height(32);
            Text.width('100%');
            Text.fontSize(12);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.fontWeight(400);
            Text.fontColor('rgba(0, 0, 0, 0.6)');
            Text.margin({ top: 5 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.tutorialItem.imageSrc);
            Image.debugLine("features/quickstart/src/main/ets/view/TutorialView.ets(112:7)", "quickstart");
            Image.objectFit(ImageFit.Cover);
            Image.height(64);
            Image.width(108);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
