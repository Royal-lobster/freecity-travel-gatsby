import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__copyright">
            <p>© 2021 freecity.travel. All rights reserved.</p>
          </div>
          <div className="footer__socials">
            <a className="pi pi-facebook" />
            <a className="pi pi-twitter" />
            <a className="pi pi-camera" />
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: var(--theme-300);
          margin-top: auto;
        }
        .footer__wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
          max-width: var(--max-width);
          color: var(--theme-500);
          padding: 30px;
          margin: 0 auto;
        }
        .footer__socials {
          display: flex;
          gap: 20px;
        }
        @media only screen and (max-width: 500px) {
          .footer__socials,
          .footer__copyright {
            margin: 0 auto;
            text-align: center;
            line-height: 1.5;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
