// AudioPlayer.jsx
import React, { useEffect, useRef } from 'react'

const AudioPlayer = ({ src, volume, control }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    switch (control) {
      case 'play':
        playSound()
        break
      case 'stop':
        stopSound()
        break
      default:
        break
    }
  }, [control])

  const playSound = () => {
    audioRef.current.src = src
    audioRef.current.volume = volume
    audioRef.current.play()
  }

  const stopSound = () => {
    audioRef.current.src = ''
  }

  return <audio ref={audioRef} src={src} />
}

export default AudioPlayer