"use client";

import { useState, type CSSProperties } from "react";
import { projects, type Project } from "@/lib/studio-config";
import { ArrowRight, ArrowUpRight, CloseIcon } from "./icons";
import { ProjectMockup } from "./project-mockups";
import { Dialog } from "./dialog";

export function SelectedWork({ onOpenModal }: { onOpenModal: () => void }) {
  const [detail, setDetail] = useState<Project | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const openDetail = (project: Project) => {
    setDetail(project);
    setDetailOpen(true);
  };

  return (
    <section className="st-section st-work" id="works" aria-labelledby="works-title">
      <div className="st-shell">
        <div className="st-section-head" data-reveal>
          <p className="st-eyebrow">Selected work</p>
          <h2 id="works-title" className="st-h2">
            Built with purpose.
          </h2>
        </div>

        <div className="st-work-grid">
          {projects.map((project, index) => {
            const inner = (
              <>
                <div className="st-card-top">
                  <span className="st-card-category">{project.category}</span>
                  <span className="st-card-badge" aria-hidden="true">
                    {project.action.type === "link" ? <ArrowUpRight /> : <ArrowRight />}
                  </span>
                </div>
                <div className="st-card-visual">
                  <ProjectMockup kind={project.mockup} />
                </div>
                <div className="st-card-bottom">
                  <h3 className="st-card-title">{project.name}</h3>
                  <p className="st-card-text">{project.text}</p>
                  <ul className="st-tags" aria-label="Tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </>
            );
            const style = { "--delay": `${(index % 2) * 90}ms` } as CSSProperties;

            if (project.action.type === "link") {
              return (
                <a
                  key={project.id}
                  className="st-card"
                  href={project.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name}: open website in a new tab`}
                  data-reveal
                  style={style}
                >
                  {inner}
                </a>
              );
            }
            if (project.action.type === "modal") {
              return (
                <button
                  key={project.id}
                  type="button"
                  className="st-card st-card-cta"
                  onClick={onOpenModal}
                  aria-label={`${project.name}: start a project request`}
                  data-reveal
                  style={style}
                >
                  {inner}
                </button>
              );
            }
            return (
              <button
                key={project.id}
                type="button"
                className="st-card"
                onClick={() => openDetail(project)}
                aria-haspopup="dialog"
                aria-label={`${project.name}: view project details`}
                data-reveal
                style={style}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>

      <Dialog
        id="st-project-detail"
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        labelledBy="st-detail-title"
        describedBy="st-detail-text"
        className="st-dialog-panel-wrap"
      >
        <div className="st-panel st-panel-detail">
          <div className="st-panel-head">
            <p className="st-eyebrow">{detail?.category}</p>
            <button type="button" className="st-icon-btn" onClick={() => setDetailOpen(false)} aria-label="Close project details">
              <CloseIcon />
            </button>
          </div>
          <h3 id="st-detail-title" className="st-panel-title">
            {detail?.name}
          </h3>
          <p id="st-detail-text" className="st-panel-text">
            {detail?.detail ?? detail?.text}
          </p>
          {detail ? (
            <ul className="st-tags st-tags-light" aria-label="Tags">
              {detail.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          <div className="st-panel-actions">
            <button
              type="button"
              className="st-pill st-pill-dark"
              onClick={() => {
                setDetailOpen(false);
                onOpenModal();
              }}
            >
              Discuss a similar project <ArrowRight />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
