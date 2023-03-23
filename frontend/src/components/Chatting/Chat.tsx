import {useCallback} from 'react';
import {useAppDispatch, useAppSelector, wrapper} from 'store';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'; // getServerSideProps type
import {increment, decrement, fetchAsync} from 'store/api/features/countSlice';

// SSR: 서버에서 구동되는 영역
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    // 서버 영역에서 Redux 사용
    // await store.dispatch(fetchAsync());
    // 전달할 props가 있으면 전달
    return {
      props: {
        message: 'SSR!!'
      }
    };
  });

const Chat = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div className='flex justify-center text-white '>
      <h1>Chatting</h1>
    </div>
  );
};

export default Chat;