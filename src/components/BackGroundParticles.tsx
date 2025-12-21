"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

function BackGroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load toàn bộ module (shape, preset, interaction...)
    await loadFull(engine);
  }, []);

  const particlesOptions: any = {
    // Hiển thị full màn hình
    fullScreen: {
      enable: true,
      zIndex: -1, // Đẩy xuống dưới, làm background
    },
    // Màu nền
    background: {
      color: "#111", // nền đen (space)
    },
    // Giới hạn FPS để tối ưu hiệu năng
    fpsLimit: 60,
    particles: {
      // Số lượng hạt
      number: {
        value: 150, // tổng số sao
        density: {
          enable: true,
          area: 800, // mật độ phân bố
        },
      },
      // Màu của particles
      color: {
        value: "#ffffff", // sao trắng
      },
      // Hình dạng particles
      shape: {
        type: "circle", // hình tròn (sao nhỏ)
      },
      // Độ trong suốt
      opacity: {
        value: 0.8,
      },
      // Kích thước sao (random trong khoảng)
      size: {
        value: { min: 0.5, max: 2 },
      },
      // Cấu hình chuyển động
      move: {
        enable: true, // bật animation
        direction: "bottom", // rơi từ trên xuống (starfall)
        speed: {
          min: 0.2,
          max: 0.7, // tốc độ rơi chậm
        },
        straight: false, // di chuyển hơi ngẫu nhiên
        outModes: {
          default: "out", // ra khỏi màn hình thì biến mất
        },
      },
    },
    // Tối ưu cho màn hình retina
    detectRetina: true,
  };

  return (
    <Particles
      id="BackGroundParticles" // id canvas
      init={particlesInit} // hàm init engine
      options={particlesOptions} // cấu hình particles
    />
  );
}

export default BackGroundParticles;
