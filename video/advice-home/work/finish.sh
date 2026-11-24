#!/bin/sh
# Renders one advice film and makes its outputs, as the dengue and cancer pain films: run from video/advice-home.
# sh work/finish.sh <key> [ms] [level]   (with "level": skip the render and remake the outputs from work/render-<key>[-ms].mp4)
#   work/render-<key>[-ms].mp4        the HyperFrames render (CRF 20)
#   video/adv-<key>[-ms]-1080.mp4     the sound levelled to -16 LUFS, AAC 160k, +faststart
#   app/media/adv-<key>[-ms]-720.mp4  720 x 720, libx264 CRF 27, AAC 96k, +faststart
#   app/media/adv-<key>[-ms]-poster.webp and -thumb.webp   the title frame (its time from work/scenes-<key>-<lang>.json), 720 and 144 px
# The levelling is two-pass and linear (one gain for the whole film): single-pass loudnorm is dynamic and lifted the bed under
# the 4 s title card from about -33 to -15 LUFS (24 Nov 2026), since no voice is heard there.
set -e
K=$1; L=en; S=""; [ "$2" = ms ] && L=ms && S="-ms"
B="adv-$K$S"; M=../../app/media; V=..
T=$(node -e "console.log(require('./work/scenes-$K-$L.json').poster)")
case " $* " in *" level "*) ;; *) (cd "$K$S" && npx --yes hyperframes@0.9.22 render --crf 20 -o "../work/render-$K$S.mp4" > "../work/render-$K$S.log" 2>&1) ;; esac
J=$(ffmpeg -hide_banner -i "work/render-$K$S.mp4" -vn -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null - 2>&1 | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s.slice(s.lastIndexOf('Parsed_loudnorm')).match(/\{[^{}]*\}/)[0]);console.log('measured_I='+j.input_i+':measured_TP='+j.input_tp+':measured_LRA='+j.input_lra+':measured_thresh='+j.input_thresh+':offset='+j.target_offset)})")
ffmpeg -v error -y -i "work/render-$K$S.mp4" -c:v copy -af "loudnorm=I=-16:TP=-1.5:LRA=11:$J:linear=true" -ar 48000 -c:a aac -b:a 160k -movflags +faststart "$V/$B-1080.mp4"
ffmpeg -v error -y -i "$V/$B-1080.mp4" -vf scale=720:720:flags=lanczos -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -c:a aac -b:a 96k -ar 48000 -movflags +faststart "$M/$B-720.mp4"
ffmpeg -v error -y -ss "$T" -i "$V/$B-1080.mp4" -frames:v 1 -vf scale=720:720:flags=lanczos -c:v libwebp -quality 80 "$M/$B-poster.webp"
ffmpeg -v error -y -ss "$T" -i "$V/$B-1080.mp4" -frames:v 1 -vf scale=144:144:flags=lanczos -c:v libwebp -quality 80 "$M/$B-thumb.webp"
echo "$B: done (cover at $T s)"
