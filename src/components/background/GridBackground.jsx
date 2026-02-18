import { useEffect, useRef } from 'react';

const GridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Grid parameters
        const spacing = 40; // Space between lines
        let offset = 0; // Movement offset

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Vertical Lines
            // Slightly darker than background
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'; // Increased visibility slightly
            ctx.lineWidth = 1;

            const totalWidth = canvas.width + spacing;

            // Loop for vertical lines
            for (let x = offset % spacing; x < totalWidth; x += spacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Move right to left
            offset -= 0.5; // Speed

            animationFrameId = requestAnimationFrame(drawGrid);
        };

        drawGrid();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ backgroundColor: 'var(--background)' }}
        />
    );
};

export default GridBackground;
