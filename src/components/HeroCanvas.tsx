
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene, camera, renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a grid of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800; // Reduced particle count for a cleaner look
    
    const posArray = new Float32Array(particleCount * 3);
    
    // Fill positions array with random values in a more structured pattern
    for (let i = 0; i < particleCount * 3; i += 3) {
      // More structured distribution for professional look
      posArray[i] = (Math.random() - 0.5) * 25;      // x
      posArray[i + 1] = (Math.random() - 0.5) * 15;  // y
      posArray[i + 2] = (Math.random() - 0.5) * 10;  // z
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create materials with more subtle coloring
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add a grid for a more professional cybersecurity look
    const gridHelper = new THREE.GridHelper(30, 30, 0x00a8ff, 0x00a8ff);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.1;
    gridHelper.position.y = -7;
    scene.add(gridHelper);
    
    // Add spheres with more subtle effects
    const sphere1Geo = new THREE.SphereGeometry(1.2, 32, 32);
    const sphere1Mat = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const sphere1 = new THREE.Mesh(sphere1Geo, sphere1Mat);
    sphere1.position.set(-6, 2, -10);
    scene.add(sphere1);
    
    const sphere2Geo = new THREE.SphereGeometry(0.8, 32, 32);
    const sphere2Mat = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const sphere2 = new THREE.Mesh(sphere2Geo, sphere2Mat);
    sphere2.position.set(5, -2, -8);
    scene.add(sphere2);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse movement effect with reduced sensitivity for subtlety
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles with slower, more subtle movement
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0002;
      
      // Rotate spheres
      sphere1.rotation.x += 0.001;
      sphere1.rotation.y += 0.0015;
      
      sphere2.rotation.x += 0.0015;
      sphere2.rotation.y += 0.001;
      
      // Mouse effect with reduced sensitivity
      particlesMesh.rotation.x += mouseY * 0.0002;
      particlesMesh.rotation.y += mouseX * 0.0002;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default HeroCanvas;
