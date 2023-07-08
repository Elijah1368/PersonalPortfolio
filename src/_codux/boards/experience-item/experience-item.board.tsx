import { createBoard } from '@wixc3/react-board';
import { ExperienceItem } from '../../../components/experience/experience-item/experience-item';

export default createBoard({
    name: 'ExperienceItem',
    Board: () => <ExperienceItem />
});
