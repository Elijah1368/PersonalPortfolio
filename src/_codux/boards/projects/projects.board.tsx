import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />
});
