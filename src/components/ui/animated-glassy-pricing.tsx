import React, { useRef, useEffect, useState } from 'react';
import { RippleButton } from '@/components/ui/multi-type-ripple-buttons';

// ── Check icon ────────────────────────────────────────────────────────────────

const CheckIcon = ({ className, color }: { className?: string; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ?? 'currentColor'}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// ── Animated WebGL background ─────────────────────────────────────────────────

const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glBgColorRef = useRef<WebGLUniformLocation | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const [bgColor] = useState([0, 0, 0]); // dark background for DIOS

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;

    const vert = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const frag = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float a){ float c=cos(a),s=sin(a); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff=center-uv;
        float len=length(diff);
        len+=variation(diff,vec2(0.,1.),5.,2.);
        len-=variation(diff,vec2(1.,0.),5.,2.);
        float circle=smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv.x*=1.5; uv.x-=0.25;
        float mask=0.0;
        float radius=.35;
        vec2 center=vec2(.5);
        mask+=paintCircle(uv,center,radius,.035).r;
        mask+=paintCircle(uv,center,radius-.018,.01).r;
        mask+=paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        /* Crimson-shifted foreground: push r up, g down */
        vec3 fg=vec3(v.x*1.4+0.4, v.y*0.4, .5-v.y*v.x);
        vec3 color=mix(uBackgroundColor,fg,mask);
        color=mix(color,vec3(1.),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }`;

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    glProgramRef.current = prog;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(prog, 'iTime');
    const iResLoc = gl.getUniformLocation(prog, 'iResolution');
    glBgColorRef.current = gl.getUniformLocation(prog, 'uBackgroundColor');
    gl.uniform3fv(glBgColorRef.current, new Float32Array(bgColor));

    let raf: number;
    const render = (t: number) => {
      gl.uniform1f(iTimeLoc, t * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    raf = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  );
};

// ── Types ─────────────────────────────────────────────────────────────────────

export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceLabel?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  accentColor?: string;
}

// ── PricingCard ───────────────────────────────────────────────────────────────

export const PricingCard = ({
  planName,
  description,
  price,
  priceLabel = 'min.',
  features,
  buttonText,
  isPopular = false,
  accentColor = '#C8102E',
}: PricingCardProps) => (
  <div
    className={[
      'relative flex flex-1 flex-col rounded-2xl px-7 py-8 transition-all duration-300',
      'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-[14px]',
      isPopular
        ? 'scale-105 shadow-2xl'
        : 'hover:border-white/20',
    ].join(' ')}
    style={isPopular ? { borderColor: `${accentColor}55`, boxShadow: `0 24px 60px -16px ${accentColor}44` } : {}}
  >
    {isPopular && (
      <div
        className="absolute -top-4 right-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
        style={{ backgroundColor: accentColor }}
      >
        Most Popular
      </div>
    )}

    <h2 className="text-2xl font-bold tracking-tight text-white">{planName}</h2>
    <p className="mt-1 text-sm text-white/60">{description}</p>

    <div className="my-6 flex items-baseline gap-2">
      <span className="text-5xl font-extrabold tracking-tight text-white">{price}</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{priceLabel}</span>
    </div>

    <div
      className="mb-5 h-px w-full"
      style={{ background: `linear-gradient(90deg, transparent, ${accentColor}66, transparent)` }}
    />

    <ul className="mb-6 flex flex-1 flex-col gap-2.5 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-white/80">
          <CheckIcon className="shrink-0" color={accentColor} />
          {f}
        </li>
      ))}
    </ul>

    <RippleButton
      className={[
        'mt-auto w-full rounded-xl py-3 text-sm font-bold uppercase tracking-wider text-white transition',
        isPopular ? '' : 'border border-white/20 bg-white/10 hover:bg-white/20',
      ].join(' ')}
      style={isPopular ? { backgroundColor: accentColor } : {}}
      rippleColor="rgba(255,255,255,0.2)"
    >
      {buttonText}
    </RippleButton>
  </div>
);

// ── Page wrapper ──────────────────────────────────────────────────────────────

interface AnimatedGlassyPricingProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const AnimatedGlassyPricing = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}: AnimatedGlassyPricingProps) => (
  <div className="relative w-full overflow-hidden">
    {showAnimatedBackground && <ShaderCanvas />}
    <div className="relative flex w-full flex-col items-center px-6 py-24 lg:px-10">
      <div className="mb-14 w-full max-w-[1600px] text-center">
        <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[55ch] text-base text-white/60">{subtitle}</p>
      </div>
      <div className="flex w-full max-w-[1600px] flex-col items-stretch gap-5 md:flex-row md:items-end">
        {plans.map((p) => (
          <PricingCard key={p.planName} {...p} />
        ))}
      </div>
    </div>
  </div>
);
