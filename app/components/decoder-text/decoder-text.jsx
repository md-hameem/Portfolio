import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './decoder-text.module.css';

// prettier-ignore
const glyphs = [
  '编程', '代码', '程序', '软件', '硬件',
  '数据', '算法', '函数', '变量', '类',
  '对象', '接口', '线程', '模块', '包',
  '调试', '编译', '解释', '测试', '版本',
  '框架', '库', '方法', '事件', '属性',
  '资源', '文件', '网络', '安全', '数据库',
  '表单', '视图', '控制器', 'API', '服务',
  '映射', '序列化', '反序列化', '标识符',
  '日志', '环境', '事务', '端点', '响应',
  '请求', '会话', '中间件', '缓存', '引擎',
  '指针', '引用', '类型', '枚举', '泛型',
  '同步', '异步', '回调', '集合', '队列',
  '栈', '堆', '算术', '位运算', '流',
  '错误', '异常', '捕获', '抛出', '终止',
  '初始化', '清理', '注释', '文档', '依赖'
];


const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
