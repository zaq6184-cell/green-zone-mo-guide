#!/bin/sh
# Levels a rendered film's sound and writes the 1080 film, the 720 app copy, its cover and thumbnail (as the dengue films).
# sh work/finish.sh <render.mp4> <base name> <cover time s>   (run from video/cancer-pain-home; overwrites the outputs)
set -e
R=$1; B=$2; T=$3; M=../../app/media
ffmpeg -v error -y -i "$R" -c:v copy -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 48000 -c:a aac -b:a 160k -movflags +faststart "../$B-1080.mp4"
ffmpeg -v error -y -i "../$B-1080.mp4" -vf scale=720:720:flags=lanczos -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -c:a aac -b:a 96k -ar 48000 -movflags +faststart "$M/$B-720.mp4"
ffmpeg -v error -y -ss "$T" -i "../$B-1080.mp4" -frames:v 1 -vf scale=720:720:flags=lanczos -c:v libwebp -quality 80 "$M/$B-poster.webp"
ffmpeg -v error -y -ss "$T" -i "../$B-1080.mp4" -frames:v 1 -vf scale=144:144:flags=lanczos -c:v libwebp -quality 80 "$M/$B-thumb.webp"
