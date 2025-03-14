export default function ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            StudentSuite brings together all the essential tools you need to
            thrive as a student.
          </h2>
          <div className="space-y-6">
            <p>
              StudentSuite is evolving to be more than just a scheduling tool.
              It supports an entire ecosystem—from productivity features to
              collaboration tools—helping students organize their academic lives
              and excel in their studies.
            </p>
            <p>
              Imagine having all your schedules, assignments, notes, and study
              resources seamlessly integrated. StudentSuite makes this a
              reality, so you can focus on learning and achieving your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
