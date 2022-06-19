import { Canvas } from '@react-three/fiber';
import {createRoot} from 'react-dom/client';
import * as THREE from 'three';

import {App} from './app';
import Blog from './components/Blog/Blog';

const Background = () => {
    return (
        <Canvas
            className="three-canvas"
            shadows={true}
            gl={{powerPreference: 'high-performance', antialias: false, stencil: false, depth: false}}
            onCreated={({gl}) => {
                gl.setClearColor(new THREE.Color('#0E1723'));
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
