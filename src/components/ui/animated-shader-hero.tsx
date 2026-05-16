import React, { useRef, useEffect } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface HeroProps {
  trustBadge?: { text: string; icon?: string };
  headline: { line1: string; line2: string };
  subtitle: string;
  buttons?: {
    primary?: { text: string; onClick?: () => void };
    secondary?: { text: string; onClick?: () => void };
  };
  className?: string;
}

// ── WebGL shader (red-tuned nebula) ───────────────────────────────────────────

const SHADER_SRC = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}

void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    /* Red-biased nebula — weight R channel, suppress G/B */
    col+=.00125/d*(cos(sin(i)*vec3(3.,.4,.15))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    /* Crimson fog: high red, low green/blue */
    col=mix(col,vec3(bg*.32,bg*.04,bg*.03),d);
  }
  O=vec4(col,1);
}`;

// ── Shader hook ───────────────────────────────────────────────────────────────

function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const vertSrc = [
      '#version 300 es',
      'precision highp float;',
      'in vec4 position;',
      'void main(){gl_Position=position;}',
    ].join('\n');

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, SHADER_SRC));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes  = gl.getUniformLocation(prog, 'resolution');
    const uTime = gl.getUniformLocation(prog, 'time');

    const resize = () => {
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const loop = (now: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return canvasRef;
}

// ── Hero component ────────────────────────────────────────────────────────────

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = '',
}) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
      />

      {/* Subtle dark vignette so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white">

        {/* Trust badge */}
        {trustBadge && (
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-6 py-2.5 text-sm backdrop-blur-md">
              {trustBadge.icon && <span>{trustBadge.icon}</span>}
              <span className="text-red-200">{trustBadge.text}</span>
            </div>
          </div>
        )}

        {/* Headline */}
        <div className="space-y-1 text-center">
          <h1 className="animate-fade-in-up animation-delay-200 bg-gradient-to-r from-red-200 via-rose-300 to-red-400 bg-clip-text text-6xl font-extrabold uppercase tracking-tight text-transparent md:text-8xl lg:text-9xl">
            {headline.line1}
          </h1>
          <h1 className="animate-fade-in-up animation-delay-400 bg-gradient-to-r from-rose-400 via-red-500 to-red-700 bg-clip-text text-6xl font-extrabold uppercase tracking-tight text-transparent md:text-8xl lg:text-9xl">
            {headline.line2}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="animate-fade-in-up animation-delay-600 mx-auto mt-8 max-w-2xl text-center text-lg font-light leading-relaxed text-red-100/80 md:text-xl">
          {subtitle}
        </p>

        {/* Buttons */}
        {buttons && (
          <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-col gap-4 sm:flex-row">
            {buttons.primary && (
              <button
                onClick={buttons.primary.onClick}
                className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-9 py-4 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,16,46,0.5)]"
              >
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button
                onClick={buttons.secondary.onClick}
                className="rounded-full border border-red-400/40 bg-red-500/10 px-9 py-4 text-base font-bold uppercase tracking-wider text-red-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-400/70 hover:bg-red-500/20"
              >
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
