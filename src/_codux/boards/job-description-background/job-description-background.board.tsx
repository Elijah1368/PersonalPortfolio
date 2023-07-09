import { createBoard } from '@wixc3/react-board';
import { JobDescriptionBackground } from '../../../components/experience/experience-item/job-description-background/job-description-background';

export default createBoard({
    name: 'JobDescriptionBackground',
    Board: () => <JobDescriptionBackground />
});
