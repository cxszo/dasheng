import numeral from 'numeral';
import ChartCard from './ChartCard';
import Bar from './Bar';
import Pie from './Pie';
import Radar from './Radar';
import Gauge from './Gauge';
import MiniArea from './MiniArea';
import MiniBar from './MiniBar';
import MiniProgress from './MiniProgress';
import Field from './Field';
import WaterWave from './WaterWave';
import TagCloud from './TagCloud';
import TimelineChart from './TimelineChart';
import Donut from './Donut'
import TrendLine from './TrendLine'
import TrendBar from './TrendBar'
import LineChart from './LineChart'
import Column from './Column'
const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export default {
  yuan,
  Bar,
  Pie,
  Gauge,
  Radar,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  WaterWave,
  TagCloud,
  TimelineChart,
  TrendLine,
  TrendBar,
  Donut,//环图
  LineChart,//折线
  Column,//柱状图
};
