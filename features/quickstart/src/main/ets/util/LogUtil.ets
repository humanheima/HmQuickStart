import hilog from '@ohos.hilog';

/**
 * 鸿蒙 HiLog 日志工具类 (ArkTS实现)
 */
export class LogUtil {
  // 日志域标识，范围是0x0~0xFFFF
  private static readonly DOMAIN: number = 0xFF00;
  // 日志标签
  private static readonly TAG: string = 'MY_APP';
  // 日志开关，发布时可关闭
  private static isLoggable: boolean = true;

  /**
   * 设置日志开关
   * @param enable - 是否启用日志
   */
  static setLoggable(enable: boolean): void {
    LogUtil.isLoggable = enable;
  }

  /**
   * 打印DEBUG级别日志
   * @param msg - 日志内容
   */
  static debug(msg: string): void {
    if (LogUtil.isLoggable) {
      hilog.debug(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s', msg);
    }
  }

  /**
   * 打印INFO级别日志
   * @param msg - 日志内容
   */
  static info(msg: string): void {
    if (LogUtil.isLoggable) {
      hilog.info(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s', msg);
    }
  }

  /**
   * 打印INFO级别日志（格式化）
   * @param format - 格式化字符串
   * @param args - 参数
   */

  /**
   * 打印WARN级别日志
   * @param msg - 日志内容
   */
  static warn(msg: string): void {
    if (LogUtil.isLoggable) {
      hilog.warn(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s', msg);
    }
  }

  /**
   * 打印WARN级别日志（格式化）
   * @param format - 格式化字符串
   * @param args - 参数
   */


  /**
   * 打印WARN级别日志（带异常）
   * @param msg - 日志内容
   * @param error - 错误对象
   */
  static warnWithError(msg: string, error: Error): void {
    if (LogUtil.isLoggable) {
      hilog.warn(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s: %{public}s', msg, error.message);
    }
  }

  /**
   * 打印ERROR级别日志
   * @param msg - 日志内容
   */
  static error(msg: string): void {
    if (LogUtil.isLoggable) {
      hilog.error(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s', msg);
    }
  }


  /**
   * 打印ERROR级别日志（带异常）
   * @param msg - 日志内容
   * @param error - 错误对象
   */
  static errorWithError(msg: string, error: Error): void {
    if (LogUtil.isLoggable) {
      hilog.error(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s: %{public}s', msg, error.message);
    }
  }

  /**
   * 打印FATAL级别日志
   * @param msg - 日志内容
   */
  static fatal(msg: string): void {
    if (LogUtil.isLoggable) {
      hilog.fatal(LogUtil.DOMAIN, LogUtil.TAG, '%{public}s', msg);
    }
  }

}