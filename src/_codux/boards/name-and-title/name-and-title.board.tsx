import { createBoard } from '@wixc3/react-board';
import { NameAndTitle } from '../../../components/name-and-title/name-and-title';

export default createBoard({
    name: 'NameAndTitle',
    Board: () => <NameAndTitle />
});
