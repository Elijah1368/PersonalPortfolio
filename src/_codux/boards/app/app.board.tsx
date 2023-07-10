import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 922,
        canvasWidth: 2754,
        canvasHeight: 1188,
    },
});
