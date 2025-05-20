import { util } from '@kit.ArkTS';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { LogUtil } from './LogUtil';

export function bufferToString(buffer: Uint8Array): string {

  let textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM: true })

  let result = textDecoder.decodeToString(buffer)

  LogUtil.debug(result)

  return result;
}