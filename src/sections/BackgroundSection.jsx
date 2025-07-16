import React from "react";

export default function BackgroundSection() {
  return (
    <section className="flex px-30">
      <h2 className="text-accent text-4xl font-bold w-1/3">Background</h2>
      <div className="w-2/3">
        <p className="text-lg leading-8 text-neutral-300">
          My journey into frontend development started with a strong technical
          foundation - I hold a degree in
          <strong> Information Systems and Technologies</strong>. While working
          full-time in an office environment, I realized my true passion lies in
          building interfaces and solving real-world problems through code.
          <br />
          <br />
          Over the last 1.5 years, I’ve been consistently learning and building
          projects using <strong>React</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Redux Toolkit</strong>, and <strong>Tailwind CSS</strong>.
          I’ve completed multiple online courses, collaborated in team projects,
          and recently developed a full-stack MERN app for internal employee
          ratings — from the landing page to the admin panel.
          <br />
          <br />
          Currently, I’m transitioning into frontend full-time: I’m polishing my
          portfolio, deepening my knowledge of modern frontend workflows, and
          preparing for my first developer role or internship. My main focus now
          is on building clean, accessible, and performant interfaces - and I’m
          excited for what’s ahead.
        </p>
      </div>
    </section>
  );
}
