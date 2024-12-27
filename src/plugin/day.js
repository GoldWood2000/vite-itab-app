import dayjs from 'dayjs';
import { PluginLunar } from 'dayjs-plugin-lunar';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import 'dayjs/locale/zh-cn'


dayjs.locale('zh-cn')
dayjs.extend(PluginLunar);
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);
