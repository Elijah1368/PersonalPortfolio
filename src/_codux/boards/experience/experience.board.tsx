import { createBoard } from '@wixc3/react-board';
import { Experience } from '../../../components/experience/experience';

export default createBoard({
    name: 'Experience',
    Board: () => <Experience />
});
