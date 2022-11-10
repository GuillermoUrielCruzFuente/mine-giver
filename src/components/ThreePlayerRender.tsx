import styles from "@/styles/components/ThreePlayerRender.module.scss";
import { useEffect, useRef } from "react";
import {
	BoxGeometry,
	Mesh,
	MeshNormalMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";

const ThreePlayerRender = () => {
	const refRenderer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new Scene();
		const camera = new PerspectiveCamera();
		const renderer = new WebGLRenderer();
		renderer.setSize(350, 350);
		renderer.setClearColor(0x140236);
		refRenderer.current?.appendChild(renderer.domElement);

		const geometry = new BoxGeometry(1, 1, 1);
		const material = new MeshNormalMaterial();
		const box = new Mesh(geometry, material);
		scene.add(box);

		camera.position.z = 2;

		const animate = () => {
			requestAnimationFrame(animate);

			box.rotation.x += 0.02;
			box.rotation.y += 0.02;

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			scene.clear();
			refRenderer.current!.removeChild(renderer.domElement);
		};
	}, []);

	return <div className={styles.renderContainer} ref={refRenderer}></div>;
};

export default ThreePlayerRender;
