
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  
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
      
      // Mouse movement effect with simplified tracking
      let mouseX = 0;
      let mouseY = 0;
      let isMouseMoving = false;
      
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        isMouseMoving = true;
        
        // Auto-reset mouse movement flag after delay to prevent stuttering
        setTimeout(() => {
          isMouseMoving = false;
        }, 100);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
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
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        
        try {
          // Rotate particles more gently
          particlesMesh.rotation.x += 0.0001;
          particlesMesh.rotation.y += 0.0001;
          
          // Rotate spheres
          sphere1.rotation.x += 0.0005;
          sphere1.rotation.y += 0.0008;
          
          sphere2.rotation.x += 0.0008;
          sphere2.rotation.y += 0.0005;
          
          // Mouse effect only when mouse is actually moving
          if (isMouseMoving) {
            particlesMesh.rotation.x += mouseY * 0.0001;
            particlesMesh.rotation.y += mouseX * 0.0001;
          }
          
          renderer.render(scene, camera);
        } catch (e) {
          console.error('Animation error:', e);
          cancelAnimationFrame(frameId);
          setHasWebGL(false);
        }
      };
      
      animate();
      
      // Cleanup
      return () => {
        console.log('Cleaning up Three.js resources');
        cancelAnimationFrame(frameId);
        window.removeEventListener('mousemove', handleMouseMove);
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
  
  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default HeroCanvas;
