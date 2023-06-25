import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1566,
        windowHeight: 1081,
        canvasWidth: 1912,
        canvasHeight: 1080,
    },
});
