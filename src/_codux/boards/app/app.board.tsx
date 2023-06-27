import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 694,
        windowHeight: 1105,
        canvasWidth: 1912,
        canvasHeight: 1080,
    },
});
