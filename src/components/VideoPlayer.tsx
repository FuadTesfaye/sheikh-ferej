import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type VideoPlayerProps = {
  src: string;
  title?: string;
  poster?: string;
  className?: string;
};

export function VideoPlayer({ src, title, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.pause();
    else void video.play();
  }, [playing]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoaded = () => setDuration(video.duration);
    const onEnded = () => setPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const seek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void container.requestFullscreen();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-video rounded-xl overflow-hidden bg-black border border-gold/20",
        className,
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        playsInline
        onClick={togglePlay}
      />

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 grid place-items-center bg-background/30 backdrop-blur-[2px]"
        >
          <span className="grid place-items-center h-16 w-16 rounded-full bg-gold/90 text-primary-foreground shadow-2xl hover:scale-105 transition-transform">
            <Play className="h-7 w-7 ml-1" />
          </span>
        </button>
      )}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-4 pt-10 transition-opacity duration-300",
          showControls || !playing ? "opacity-100" : "opacity-0",
        )}
      >
        {title && (
          <p className="font-display text-sm text-foreground/90 mb-2 truncate">{title}</p>
        )}
        <div className="relative h-1 rounded-full bg-muted/60 mb-3 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gold rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={seek}
          className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:border-gold/50 [&_.bg-primary]:bg-gold -mt-4 mb-2"
          aria-label="Seek"
        />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            className="p-1.5 rounded-full text-foreground hover:text-gold transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="p-1.5 rounded-full text-foreground hover:text-gold transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <span className="text-[11px] tabular-nums text-muted-foreground ml-1">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div className="flex-1" />
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-full text-foreground hover:text-gold transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

type VideoModalProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export function VideoModal({ src, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 sm:-top-12 right-0 z-10 p-2 rounded-full text-muted-foreground hover:text-gold transition"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <VideoPlayer src={src} title={title} />
      </div>
    </div>
  );
}
