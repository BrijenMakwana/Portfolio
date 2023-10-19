import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="f" id="contact">
      <div className="f-texts">
        <h2 className="f-title">Contact Details</h2>

        <>
          <a href={`mailto:${props.email}`}>{props.email}</a> <br />
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </>
      </div>
    </footer>
  );
}
