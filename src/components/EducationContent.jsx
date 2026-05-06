function EducationalContent({ title, children }) {
  return (
    <section className="educational">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </section>
  );
}

export default EducationalContent;