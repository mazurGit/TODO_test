import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(localizedFormat);
    dayjs.locale('uk');
  };

  public init = () => {
    this.dayJsInit();
  };
}

export {AppService};
