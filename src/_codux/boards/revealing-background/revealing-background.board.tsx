import { createBoard } from '@wixc3/react-board';
import { RevealingBackground } from '../../../components/revealing-background/revealing-background';

export default createBoard({
    name: 'RevealingBackground',
    Board: () => <RevealingBackground />
});
