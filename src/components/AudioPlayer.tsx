import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type AudioPlayerProps = {
  src: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
};

export function AudioPlayer({ src, title, subtitle, compact, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [src]);

  const seek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn(
        "rounded-xl border border-gold/25 bg-card/60 backdrop-blur-sm",
        compact ? "p-4" : "p-5",
        className,
      )}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {(title || subtitle) && (
        <div className={cn("min-w-0", compact ? "mb-3" : "mb-4")}>
          {subtitle && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 truncate">
              {subtitle}
            </p>
          )}
          {title && (
            <p className={cn("font-display text-foreground truncate", compact ? "text-lg" : "text-xl")}>
              {title}
            </p>
          )}
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-gold text-primary-foreground shadow-md hover:bg-gold-soft transition-colors"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gold rounded-full transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={seek}
            className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:border-gold/50 [&_.bg-primary]:bg-gold -mt-3 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity"
            aria-label="Seek"
          />
          <div className="flex justify-between text-[11px] tabular-nums text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="shrink-0 p-2 rounded-full text-muted-foreground hover:text-gold transition-colors"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
