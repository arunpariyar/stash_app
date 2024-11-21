import "./pageHeader.css";

export default function PageHeader({ title }: { title: string }) {
  return (
    <>
      <div className="page-title">{title}</div>
    </>
  );
}
