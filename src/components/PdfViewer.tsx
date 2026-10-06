import React from "react";

interface PdfViewerProps {
  src: string;
  title: string;
  height?: string;
}

/**
 * Affiche un PDF directement dans la page (lecteur natif du navigateur),
 * avec un repli : boutons « Ouvrir » et « Télécharger » (utile sur mobile,
 * où les navigateurs n'affichent souvent que la première page).
 */
export function PdfViewer({ src, title, height = "85vh" }: PdfViewerProps) {
  const viewerSrc = `${src}#view=FitH&toolbar=1&navpanes=0`;
  const btn: React.CSSProperties = {
    display: "inline-block",
    padding: "0.55rem 1.1rem",
    borderRadius: "0.6rem",
    border: "1px solid var(--neutral-alpha-medium)",
    background: "var(--surface-background)",
    color: "var(--neutral-on-background-strong)",
    fontSize: "0.9rem",
    fontWeight: 500,
    textDecoration: "none",
  };

  return (
    <div
      style={{
        width: "min(960px, 92vw)",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        margin: "1.5rem 0",
      }}
    >
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
        <a href={src} target="_blank" rel="noopener noreferrer" style={btn}>
          Ouvrir en plein écran
        </a>
        <a href={src} download style={btn}>
          Télécharger (PDF)
        </a>
      </div>
      <div
        style={{
          border: "1px solid var(--neutral-alpha-medium)",
          borderRadius: "0.75rem",
          overflow: "hidden",
          background: "var(--neutral-alpha-weak)",
        }}
      >
        <iframe
          src={viewerSrc}
          title={title}
          loading="lazy"
          style={{ width: "100%", height, minHeight: "600px", border: 0, display: "block" }}
        />
      </div>
    </div>
  );
}
