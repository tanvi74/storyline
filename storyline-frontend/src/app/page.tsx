import { FC } from 'react';
import RichEditor from '../components/richTextEditor';

interface Props {}

const Home: FC<Props> = () => 
{
  return <div>
    <RichEditor/>
  </div>
}

export default Home;