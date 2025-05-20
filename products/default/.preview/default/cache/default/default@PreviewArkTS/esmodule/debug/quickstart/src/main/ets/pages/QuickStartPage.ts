if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface QuickStartPage_Params {
}
import { Banner } from "@normalized:N&&&quickstart/src/main/ets/view/Banner&1.0.0";
import { EnablementView } from "@normalized:N&&&quickstart/src/main/ets/view/EnablementView&1.0.0";
import { TutorialView } from "@normalized:N&&&quickstart/src/main/ets/view/TutorialView&1.0.0";
export class QuickStartPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: QuickStartPage_Params) {
    }
    updateStateVars(params: QuickStartPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(9:5)", "quickstart");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("快速入门");
            Text.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(10:7)", "quickstart");
            Text.fontSize(24);
            Text.fontWeight(700);
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.lineHeight(33);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(19:7)", "quickstart");
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
            Scroll.align(Alignment.TopStart);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(20:9)", "quickstart");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Banner(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 21, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Banner" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new EnablementView(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 22, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "EnablementView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TutorialView(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 23, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TutorialView" });
        }
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
