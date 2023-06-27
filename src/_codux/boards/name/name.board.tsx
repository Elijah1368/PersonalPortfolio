import { createBoard } from '@wixc3/react-board';
import { Name } from '../../../components/name/name';

export default createBoard({
    name: 'Name',
    Board: () => <Name />,
    environmentProps: {
        windowHeight: 640,
    },
});
