import {createRoot} from 'react-dom/client';
import * as THREE from 'three';
import {Canvas} from 'react-three-fiber';

import {App} from './app';
import Blog from './components/Blog/Blog';

const Background = () => {
    return (
        <Canvas
            className="three-canvas"
            onCreated={({gl}) => {
                gl.setClearColor(new THREE.Color('#000000'));
            }}
            camera={{position: new THREE.Vector3(0, 0, 6)}}
        >
            <App />
        </Canvas>
    );
};

const Content = () => {
    return <Blog />;
};

const backgroundElement = document.getElementById('background-root');
createRoot(backgroundElement).render(<Background />);

const contentElement = document.getElementById('content-root');
createRoot(contentElement).render(<Content />);
