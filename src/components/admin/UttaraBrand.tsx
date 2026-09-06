export function UttaraLogo() {
  return (
    <div
      aria-label="Uttara — Administration du site"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <strong
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "2rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}
      >
        Uttara
      </strong>
      <span
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          opacity: 0.65,
          textTransform: "uppercase",
        }}
      >
        Administration du site
      </span>
    </div>
  );
}

export function UttaraIcon() {
  return (
    <span
      aria-label="Uttara"
      style={{
        alignItems: "center",
        border: "1px solid currentColor",
        borderRadius: "999px",
        display: "inline-flex",
        fontFamily: "Georgia, serif",
        fontSize: "1rem",
        height: "2rem",
        justifyContent: "center",
        width: "2rem",
      }}
    >
      U
    </span>
  );
}
