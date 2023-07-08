import { createBoard } from '@wixc3/react-board';
import { ParallaxTitle } from '../../../components/parallax-title/parallax-title';

export default createBoard({
    name: 'ParallaxTitle',
    Board: () => <ParallaxTitle />,
    environmentProps: {
        windowWidth: 1918,
        windowHeight: 1080,
        canvasWidth: 2218,
        canvasHeight: 1080,
    },
});
