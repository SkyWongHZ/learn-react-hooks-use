// import { useBoolean } from 'ahooks';
import { useBoolean } from '../utils';

export default () => {
  console.log('环境', process.env.NODE_ENV);
  const [state, { toggle, setTrue, setFalse }] = useBoolean();
  return (
    <>
      <p>Effect:{JSON.stringify(state)}</p>
      <p>
        <button onClick={toggle}>toggle</button>
        <button onClick={setTrue} style={{ marginLeft: '16px' }}>
          set true
        </button>
        <button onClick={setFalse} style={{ marginLeft: '16px' }}>
          set false
        </button>
      </p>
    </>
  );
};
