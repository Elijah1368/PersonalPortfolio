import { createBoard } from '@wixc3/react-board';
import { JobDescriptionContainer } from '../../../components/experience/experience-item/job-description-container/job-description-container';

export default createBoard({
    name: 'JobDescriptionContainer',
    Board: () => <JobDescriptionContainer />
});
