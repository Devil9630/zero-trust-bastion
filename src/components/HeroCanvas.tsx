
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Check WebGL availability first
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported, falling back to static background');
      setHasWebGL(false);
      return;
    }
    
    // Create renderer with better error handling
    let renderer;
    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Create renderer with proper error handling
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        canvas: canvas,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      mountRef.current.appendChild(renderer.domElement);
      
      // Create a grid of particles with lower count for better performance
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 500; // Reduced for better performance
      
      const posArray = new Float32Array(particleCount * 3);
      
      // Fill positions array with more conservative distribution
      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 20;      // x
        posArray[i + 1] = (Math.random() - 0.5) * 12;  // y
        posArray[i + 2] = (Math.random() - 0.5) * 8;   // z
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      // Simpler material for better performance
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x00a8ff,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      
      // Create mesh
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      
      // Add a grid for a professional look but with simplified parameters
      const gridHelper = new THREE.GridHelper(20, 20, 0x00a8ff, 0x00a8ff);
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.05;
      gridHelper.position.y = -5;
      scene.add(gridHelper);
      
      // Simplified sphere objects
      const sphere1Geo = new THREE.SphereGeometry(1, 16, 16); // Reduced complexity
      const sphere1Mat = new THREE.MeshBasicMaterial({
        color: 0x00a8ff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const sphere1 = new THREE.Mesh(sphere1Geo, sphere1Mat);
      sphere1.position.set(-5, 2, -8);
      scene.add(sphere1);
      
      const sphere2Geo = new THREE.SphereGeometry(0.6, 16, 16); // Reduced complexity
      const sphere2Mat = new THREE.MeshBasicMaterial({
        color: 0x00a8ff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const sphere2 = new THREE.Mesh(sphere2Geo, sphere2Mat);
      sphere2.position.set(4, -2, -6);
      scene.add(sphere2);
      
      // Position camera
      camera.position.z = 5;
      
      // Enhanced mouse movement effect
      let mouseX = 0;
      let mouseY = 0;
      let lastMousePosition = { x: 0, y: 0 };
      let targetParticleRotationX = 0;
      let targetParticleRotationY = 0;
      let isMouseActive = false;
      const interactiveParticles: THREE.Vector3[] = [];
      
      // Create interactive particles that will follow the mouse
      for (let i = 0; i < 10; i++) {
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8
        );
        interactiveParticles.push(position);
      }
      
      // Create a raycaster for mouse interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      
      // Improved mouse move handler with smoother transitions
      const handleMouseMove = (event: MouseEvent) => {
        // Normalize mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Set mouse position for cursor effects
        mouseX = mouse.x;
        mouseY = mouse.y;
        
        // Track velocity for momentum effect
        const velocity = {
          x: event.clientX - lastMousePosition.x,
          y: event.clientY - lastMousePosition.y
        };
        
        lastMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
        
        // Set target rotations with momentum
        targetParticleRotationX += velocity.y * 0.0002;
        targetParticleRotationY += velocity.x * 0.0002;
        
        // Update cursor position for potential UI effects
        setCursorPosition({ x: event.clientX, y: event.clientY });
        
        isMouseActive = true;
        
        // Cast ray for potential interactions
        raycaster.setFromCamera(mouse, camera);
      };
      
      const handleMouseEnter = () => {
        isMouseActive = true;
      };
      
      const handleMouseLeave = () => {
        isMouseActive = false;
      };
      
      // Add mouse event listeners
      window.addEventListener('mousemove', handleMouseMove);
      mountRef.current.addEventListener('mouseenter', handleMouseEnter);
      mountRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      // Add touch support for mobile devices
      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) {
          const touch = event.touches[0];
          mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
          
          mouseX = mouse.x;
          mouseY = mouse.y;
          
          isMouseActive = true;
          
          setCursorPosition({ x: touch.clientX, y: touch.clientY });
          raycaster.setFromCamera(mouse, camera);
        }
      };
      
      window.addEventListener('touchmove', handleTouchMove);
      
      // Handle window resize with throttling
      let resizeTimeout: number | null = null;
      const handleResize = () => {
        if (resizeTimeout) return;
        
        resizeTimeout = window.setTimeout(() => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          
          renderer.setSize(width, height);
          resizeTimeout = null;
        }, 200);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation loop with performance monitoring
      let frameId: number;
      let lastTime = 0;
      const animate = (time: number) => {
        frameId = requestAnimationFrame(animate);
        
        try {
          // Calculate delta time for smooth animations
          const delta = (time - lastTime) * 0.001;
          lastTime = time;
          
          // Smooth rotation transitions
          if (isMouseActive) {
            particlesMesh.rotation.x += (targetParticleRotationX - particlesMesh.rotation.x) * 0.05;
            particlesMesh.rotation.y += (targetParticleRotationY - particlesMesh.rotation.y) * 0.05;
            
            // Rotate based on mouse position with damping
            sphere1.rotation.x += (mouseY * 0.5 - sphere1.rotation.x) * 0.02;
            sphere1.rotation.y += (mouseX * 0.5 - sphere1.rotation.y) * 0.02;
            
            sphere2.rotation.x += (mouseY * 0.3 - sphere2.rotation.x) * 0.03;
            sphere2.rotation.y += (mouseX * 0.3 - sphere2.rotation.y) * 0.03;
          } else {
            // Auto rotation when mouse is inactive
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            
            sphere1.rotation.x += 0.0005;
            sphere1.rotation.y += 0.0008;
            
            sphere2.rotation.x += 0.0008;
            sphere2.rotation.y += 0.0005;
          }
          
          // Update grid to create a subtle wave effect
          if (gridHelper.material instanceof THREE.Material) {
            gridHelper.position.y = -5 + Math.sin(time * 0.0005) * 0.2;
          }
          
          renderer.render(scene, camera);
        } catch (e) {
          console.error('Animation error:', e);
          cancelAnimationFrame(frameId);
          setHasWebGL(false);
        }
      };
      
      animate(0);
      
      // Cleanup
      return () => {
        console.log('Cleaning up Three.js resources');
        cancelAnimationFrame(frameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        mountRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        mountRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', handleResize);
        
        if (mountRef.current && renderer) {
          mountRef.current.removeChild(renderer.domElement);
        }
        
        // Dispose of geometries and materials
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        sphere1Geo.dispose();
        sphere1Mat.dispose();
        sphere2Geo.dispose();
        sphere2Mat.dispose();
        
        // Clear renderer
        if (renderer) {
          renderer.dispose();
        }
      };
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      setHasWebGL(false);
      return () => {};
    }
  }, []);
  
  // Render static fallback if WebGL is not available
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 z-0 bg-cyber-darker">
        <div className="absolute inset-0 z-0 opacity-20 bg-circuit-pattern"></div>
      </div>
    );
  }
  
  // Custom cursor effect (optional)
  return (
    <>
      <div ref={mountRef} className="absolute inset-0 z-0" />
      {/* Add a subtle cursor effect */}
      <div 
        className="fixed w-4 h-4 rounded-full bg-cyber-blue opacity-50 pointer-events-none mix-blend-screen"
        style={{
          transform: `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`,
          transition: 'transform 0.1s ease-out',
          boxShadow: '0 0 15px 5px rgba(0, 168, 255, 0.3)',
          zIndex: 9999
        }}
      />
    </>
  );
};

export default HeroCanvas;
