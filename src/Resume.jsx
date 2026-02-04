export function Resume() {
return (
<div className="container py-5">
<h2 className="fw-semibold">Resume</h2>
<p className="text-muted">Click below to download my resume</p>
<a href="/resume.pdf" download className="btn btn-dark">
Download Resume
</a>
</div>
);
}