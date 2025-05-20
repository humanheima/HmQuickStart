if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
}
import { KnowledgeMapContent } from "@normalized:N&&&map/Index&1.0.0";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Scroll(){
            //   Column() {
            //     //QuickStartPage()
            //     //CourseLearning()
            //     KnowledgeMap()
            //   }
            // }
            // .backgroundColor('#F1F3F5')
            // .align(Alignment.TopStart)
            // .constraintSize({minHeight:'100%'})
            // .edgeEffect(EdgeEffect.Spring)
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/Index.ets(25:5)", "default");
            // Scroll(){
            //   Column() {
            //     //QuickStartPage()
            //     //CourseLearning()
            //     KnowledgeMap()
            //   }
            // }
            // .backgroundColor('#F1F3F5')
            // .align(Alignment.TopStart)
            // .constraintSize({minHeight:'100%'})
            // .edgeEffect(EdgeEffect.Spring)
            Column.backgroundColor('#F1F3F5');
            // Scroll(){
            //   Column() {
            //     //QuickStartPage()
            //     //CourseLearning()
            //     KnowledgeMap()
            //   }
            // }
            // .backgroundColor('#F1F3F5')
            // .align(Alignment.TopStart)
            // .constraintSize({minHeight:'100%'})
            // .edgeEffect(EdgeEffect.Spring)
            Column.padding({ top: 36, bottom: 28 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new KnowledgeMapContent(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 26, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "KnowledgeMapContent" });
        }
        // Scroll(){
        //   Column() {
        //     //QuickStartPage()
        //     //CourseLearning()
        //     KnowledgeMap()
        //   }
        // }
        // .backgroundColor('#F1F3F5')
        // .align(Alignment.TopStart)
        // .constraintSize({minHeight:'100%'})
        // .edgeEffect(EdgeEffect.Spring)
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.quickstart", moduleName: "default", pagePath: "pages/Index", pageFullPath: "products/default/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
